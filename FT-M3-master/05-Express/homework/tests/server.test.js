const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../src/server.js');

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const PATH = '/posts';
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_DELETE = 'DELETE';

// allows us to make and test HTTP requests
chai.use(chaiHTTP);

const expect = chai.expect;

/* Expects the status code expected from the given response, res. Throws
 * a useful error message if the expectation is not met. The request
 * method is used to improve error messages. */
const expectStatus = (expected, res, method) => {
  // We assume the status *isn't* expected to be STATUS_SERVER_ERROR or
  // STATUS_NOT_FOUND; in these cases, we have custom error messages that
  // help the student out (see switch statement below).
  if (expected === STATUS_SERVER_ERROR || expected === STATUS_NOT_FOUND) {
    throw new Error(
      'The expected status should be something other than ' +
      `${STATUS_SERVER_ERROR} and ${STATUS_NOT_FOUND}`
    );
  }

  switch (res.status) {
    case STATUS_SERVER_ERROR:
      throw new Error(
        `El servidor arrojó un error durante la ejecución del request ${method} ${PATH} (status code ` +
        '500)'
      );

    case STATUS_NOT_FOUND:
      throw new Error(
        `El handler para el request ${method} ${PATH} no se encuentra implementado (status ` +
        'code 404)'
      );

    default:
      if (expected !== res.status) {
        const msg = `Expected status ${expected} but got ${res.status} from ` +
          `${method} ${PATH}`;
        throw new Error(msg);
      }

      /* eslint no-unused-expressions: 0 */
      // This is the correct way to make the expectation, even though it seems odd.
      expect(res).to.be.json;

      if (expected === STATUS_USER_ERROR) {
        expect(res.body).to.have.property('error');
      }
  }
};

/* Makes a request using the given method to the provided path. If body is
 * given, sends it along with the request. Checks for the expected status. */
const req = (method, status, body = null, path = PATH) => {
  const property = method.toLowerCase();
  let request = chai.request(server.server)[property](path);

  if (body) {
    request = request.send(body);
  }

  return request
    .catch((err) => {
      // For status codes like 404, 500, and 422, the promise fails and contains
      // a response property in the error object. We want to rescue these cases
      // and return the response object normally. That way we can have a single
      // handler that checks status properly in all cases.
      if (err.response) {
        return err.response;
      }
      throw err;
    })
    .then((res) => {
      expectStatus(status, res, method);
      return res.body;
    });
};

/* Adds the given post object to the array of posts by making a request. Sets
 * the post object's id based on what's returned by the server. */
const addPost = (post) => {
  return req(METHOD_POST, STATUS_OK, post).then((newPost) => {
    expect(newPost).to.have.property('author').that.equals(post.author);
    expect(newPost).to.have.property('title').that.equals(post.title);
    expect(newPost).to.have.property('contents').that.equals(post.contents);
    expect(newPost).to.have.property('id').that.is.a('number');

    // We do this so the post object is always up-to-date. It can then be
    // compared to the existing posts during a subsequent get request.
    post.id = newPost.id;
    return post;
  });
};

describe('Request', () => {
  beforeEach(() => {
    // Reset posts before each test. Note that we must modify the array inline,
    // not reassign the array.
    server.posts.splice(0, server.posts.length);
  });

  describe(`${METHOD_POST} ${PATH}`, () => {
    it('Agrega un nuevo Post', () => {
      const post = { author: 'Juan', title: 'first title', contents: 'first contents' };
      return addPost(post)
        .then((postReturned) => {
          expect(postReturned).to.deep.equal(post);
        });
    });

    it('Informa que falta el parámetro `author`', () => {
      return req(METHOD_POST, STATUS_USER_ERROR, { contents: 'contents', title:'title'});
    });

    it('Informa que falta el parámetro `title`', () => {
      return req(METHOD_POST, STATUS_USER_ERROR, { contents: 'contents', author:'author'});
    });

    it('Informa que falta el parámetro `contents`', () => {
      return req(METHOD_POST, STATUS_USER_ERROR, { title: 'title', author:'author'});
    });
  });

  describe(`${METHOD_POST} ${PATH}/author/:author`, () => {
    it('Agrega un nuevo Post', () => {
      const post = {title: 'first title', contents: 'first contents' };
      req(METHOD_POST, STATUS_OK, post, `${PATH}/author/Mariana`)
          .then((res)=> {
            expect(res).to.deep.equal({title: 'first title', contents: 'first contents', id:res.id, author:'Mariana'});
          })
    });

    it('Informa que falta el parámetro `title`', () => {
      return req(METHOD_POST, STATUS_USER_ERROR, { contents: 'contents'}, `${PATH}/author/Mariana`);
    });

    it('Informa que falta el parámetro `contents`', () => {
      return req(METHOD_POST, STATUS_USER_ERROR, { title: 'title'}, `${PATH}/author/Mariana`);
    });
  });

  describe(`${METHOD_GET} ${PATH}`, () => {
    it('Obtiene el listado de Posts', () => {
      return req(METHOD_GET, STATUS_OK)
        .then(posts => expect(posts).to.have.length(0));
    });

    it('Filtra los Posts por `title` si el parámetro `term` existe', () => {
      const posts = [
        { author: 'first author', title: 'first title', contents: 'contents' },
        { author: 'second author', title: 'second', contents: 'contents' },
        { author: 'third author',title: 'third title', contents: 'contents' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
        .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}?term=title`))
        .then((found) => {
          expect(found).to.have.length(2);
          expect(found).to.deep.include(posts[0]);
          expect(found).to.deep.include(posts[2]);
        });
    });

    it('Filtra los Posts por `contents` si el parámetro `term` existe', () => {
      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'author', title: 'title', contents: 'hello' },
        { author: 'author', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
        .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}?term=hello`))
        .then((found) => {
          expect(found).to.have.length(1);
          expect(found).to.deep.include(posts[1]);
        });
    });
  });

  describe (`${METHOD_GET} ${PATH}/:author`, ()=> {
    it('Si el autor no tiene ningun Post, devuelve un mensaje de error', ()=> {
      return req(METHOD_GET, STATUS_USER_ERROR, null,`${PATH}/1`);
    });

    it('Si el autor no tiene ningun Post, devuelve un mensaje de error', ()=>{
      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'author', title: 'title', contents: 'hello' },
        { author: 'author', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_USER_ERROR, null, `${PATH}/Martina`));
    });

    it('Si Martina tiene Post a su nombre, los devuelve', () => {
      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'Martina', title: 'title', contents: 'hello' },
        { author: 'author', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}/Martina`))
          .then((found)=> {
            expect(found).to.have.length(1);
            expect(found).to.deep.include(posts[1]);
          });
    });

    it('Si el Juan tiene Post a su nombre, los devuelve', () => {
      const posts = [
        { author: 'Juan', title: 'title', contents: 'hi there' },
        { author: 'Martina', title: 'title', contents: 'hello' },
        { author: 'Juan', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}/Juan`))
          .then((found)=> {
            expect(found).to.have.length(2);
            expect(found).to.deep.include(posts[0], posts[3]);
          });
    });
  });

  describe(`${METHOD_GET} ${PATH}/:author/:title`, () => {
    it('Retorna todos los Post del autor `Martina`', () => {
      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'Martina', title: 'title', contents: 'hello' },
        { author: 'Martina', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}/Martina`))
          .then((found) => {
            expect(found).to.have.length(2);
            expect(found).to.deep.include(posts[1], posts[2]);
          });
    });

    it('Retorna todos los Post que correspondan al autor `Maria` con titulo `Un titulo`', ()=> {
      const posts = [
        { author: 'Maria', title: 'Un titulo', contents: 'hi there' },
        { author: 'Juan', title: 'title', contents: 'hello' },
        { author: 'Martina', title: 'hey there title', contents: 'hey there' },
        { author: 'Maria', title: 'Un titulo', contents: 'another hi there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_OK, null, `${PATH}/Maria/Un%20titulo`))
          .then((found) => {
            expect(found).to.have.length(2);
            expect(found).to.deep.include(posts[0], posts[2]);
          });
    });

    it('Si no hay ningun match para el autor `Juana` y titulo `Un titulo` mostrar mensaje de error', ()=> {
      const posts = [
        { author: 'Maria', title: 'Un titulo', contents: 'hi there' },
        { author: 'Juana', title: 'title', contents: 'hello' },
        { author: 'Martina', title: 'hey there title', contents: 'hey there' },
        { author: 'Maria', title: 'Un titulo', contents: 'another hi there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_USER_ERROR, null, `${PATH}/Juana/Un%20titulo`))
          .then((found) => {
            expect(found).to.deep.equal({error: "No existe ningun post con dicho titulo y autor indicado"})
          });
    });

    it('Si no hay ningun match para el autor `Juana` y titulo `title` mostrar mensaje de error', ()=> {
      const posts = [
        { author: 'Maria', title: 'Un titulo', contents: 'hi there' },
        { author: 'Juan', title: 'title', contents: 'hello' },
        { author: 'Martina', title: 'hey there title', contents: 'hey there' },
        { author: 'Maria', title: 'Un titulo', contents: 'another hi there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_GET, STATUS_USER_ERROR, null, `${PATH}/Juana/title`))
          .then((found) => {
            expect(found).to.deep.equal({error: "No existe ningun post con dicho titulo y autor indicado"})
          });
    })
  });

  describe(`${METHOD_PUT} ${PATH}`, () => {
    it('Actualiza un Post existente', () => {
      const post1 = { author: 'first author', title: 'first title', contents: 'first contents' };
      const post2 = { author: 'second author',title: 'second title', contents: 'second contents' };
      const updates = {title: 'new title', contents: 'new contents' };

      return Promise.all([addPost(post1), addPost(post2)])
        .then(() => {
          // post2's id property is set in the addPost() call
          const updatedPost = Object.assign({ id: post2.id }, updates);
          return req(METHOD_PUT, STATUS_OK, updatedPost);
        })
        .then((updatedPost) => {
          expect(updatedPost).to.deep.equal(Object.assign({}, post2, updates));
          return req(METHOD_GET, STATUS_OK);
        })
        .then((posts) => {
          expect(posts).to.have.length(2);
          expect(posts).to.deep.include(post1);
          expect(posts).to.deep.include(Object.assign({}, post2, updates));
        });
    });

    it('Informa que falta el parámetro `id`', () => {
      const body = { title: 'new title', contents: 'new contents' };
      return req(METHOD_PUT, STATUS_USER_ERROR, body);
    });

    it('Informa que el `id` indicado no corresponde con un Post existente', () => {
      const body = { id: 1, title: 'new title', contents: 'new contents' };
      return req(METHOD_PUT, STATUS_USER_ERROR, body);
    });

    it('Informa que falta el parámetro `title`', () => {
      return addPost({ author:'author',title: 'title', contents: 'contents' })
        .then((post) => {
          const body = { id: post.id, contents: 'new contents' };
          return req(METHOD_PUT, STATUS_USER_ERROR, body);
        });
    });

    it('Informa que falta el parámetro `contents`', () => {
      return addPost({ author:'author', title: 'title', contents: 'contents' })
        .then((post) => {
          const body = { id: post.id, title: 'new title' };
          return req(METHOD_PUT, STATUS_USER_ERROR, body);
        });
    });
  });

  describe(`${METHOD_DELETE} ${PATH}`, () => {
    it('Elimina un Post existente', () => {
      const post1 = { author: 'first author', title: 'first title', contents: 'first contents' };
      const post2 = { author: 'second author', title: 'second title', contents: 'second contents' };

      return Promise.all([addPost(post1), addPost(post2)])
        .then(() => {
          // post1's id property is set in the addPost() call
          return req(METHOD_DELETE, STATUS_OK, { id: post1.id });
        })
        .then((body) => {
          expect(body).to.deep.equal({ success: true });
          return req(METHOD_GET, STATUS_OK);
        })
        .then((posts) => {
          expect(posts).to.have.length(1);
          expect(posts).to.deep.include(post2);
        });
    });

    it('Informa que falta el parámetro `id`', () => {
      return req(METHOD_DELETE, STATUS_USER_ERROR);
    });

    it('Informa que el `id` indicado no corresponde con un Post existente', () => {
      return req(METHOD_DELETE, STATUS_USER_ERROR, { id: 1 });
    });
  });

  describe(`${METHOD_DELETE} /author`, () => {
    it('Informa que falta el parámetro `author`', () => {
      return req(METHOD_DELETE, STATUS_USER_ERROR);
    });

    it('Si el autor indicado no existe, envia mensaje de error', () => {
      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'Martina', title: 'title', contents: 'hello' },
        { author: 'Martina', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_DELETE, STATUS_USER_ERROR, {author: 'Pedro'}, `/author`))
          .then((found) => expect(found).to.deep.equal({error: "No existe el autor indicado"}));
    });

    it('Si el autor indicado existe, elimina todos sus Posts, devuelve los posts eliminados', () => {

      const posts = [
        { author: 'author', title: 'title', contents: 'hi there' },
        { author: 'Maria', title: 'title', contents: 'hello' },
        { author: 'Maria', title: 'title', contents: 'hey there' },
      ];

      return Promise.all(posts.map(p => addPost(p)))
          .then(() => req(METHOD_DELETE, STATUS_OK, {author: 'Maria'}, `/author`))
          .then((found) => {
            expect(found).to.have.length(2);
            expect(found).to.deep.include(posts[1], posts[2]);
          });
    })
  })
});
