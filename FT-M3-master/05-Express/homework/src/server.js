// const bodyParser = require("body-parser");
const express = require("express");
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
let id = 1;

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

// server.post('/posts',function(req,res){
//     const {author, title,contents } = req.body;
//     console.log(author, title,contents);
//     res.send('done');

// })
server.post('/posts', (req, res) => {
    const { author, title, contents } = req.body;
    // console.log(author, title, contents);
    if (author && title && contents) {

        const post = {
            author, title, contents, id: id++
        };
        return res.json(post)

    } else {
        return res.status(422).json({ error: "No se recibieron los parámetros necesarios para crear el Post" })
    }
})

server.post('/posts/author/:author', (req, res) => {
    const { title, contents } = req.body;
    let author = req.params.author;

    if (author && title && contents) {

        const post = {
            author, title, contents, id: id++
        };
        return res.json(post)

    } else {
        return res.status(422).json({ error: "No se recibieron los parámetros necesarios para crear el Post" })
    }

})

server.get('/posts',(req,res)=>{
  let{term}= req.query
  if(term){
    const termPost= posts.filter(p=> p.title.includes(term) || p.contents.includes(term))
    return res.json(termPost);
  }
  res.json(term);
})

module.exports = { posts, server };
