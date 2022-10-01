const session = require('supertest-session');
const { post } = require('../index.js');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.

const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
      agent.get('/').then((res) => {
        expect(res.body.message).toEqual('hola');
      }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with an object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('test');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').send({ a: 1, b: 1 }).expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
  });

  describe('POST /producto', () => {
    it('responds with 200', () => agent.post('/producto').send({ a: 1, b: 3 }).expect(200));
    it('responds with 400', () => agent.post('/producto').send({ a: 1, b: 'dsadsad' }).expect(400));
    it('responds with 400', () => agent.post('/producto').expect(400));

    it('responds with the product of 2 and 3', () =>
      agent.post('/producto')
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );

    it('responds with the product of 0 and 3', () =>
      agent.post('/producto')
        .send({ a: -2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(-6);
        })
    );
    it('responds with the product of 5 and 3', () =>
      agent.post('/producto')
        .send({ a: 5, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(15);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 400', () => agent.post('/sumArray').expect(400));
    it('responds with 200', () => agent.post('/sumArray').send({ array: [], num: 0 }).expect(200));
    it('responds with and object with message `test`', () =>
      agent.post('/sumArray')
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 13 })
        .then((res) => {
          expect(res.body.result).toEqual(true);
        }));
    it('should response with false if no combination of two numbers matrches num', () => {
      agent
        .post('/sumArray') 
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 23 })
        .then((res) => {
          expect(res.body.result).toEqual(false);
        })
    });


  });

//     Responder con status 200.
// Responder con 4 si enviamos 'hola'.
// Responder con un status 400 (bad request) si el string es un número.
// Responder con un status 400 (bad request) si el string esta vacio.

describe('GET /numString', () => {
it('responds with 200', () => {
  agent
  .get ('/numString?s=agustin')
  .expect(200)
});
it('responds with 400', () => {
  agent
  .get ('/numString?s=4')
  .expect(400)
});
it('responds with 400 null', () => {
  agent
  .get ('/numString')
  .expect(400)
});
it('responds with 4 if hola', () => {
  agent
  .get ('/numString?s=hola')
  .then(res=> expect(res.body.result).toEqual(4))
});


});
});