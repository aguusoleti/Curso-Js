// const bodyParser = require("body-parser");
const express = require("express");
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
let id = 1;
let PATH='/posts'

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

server.post(`${PATH}`, (req, res) => {
   
    const { author, title, contents } = req.body;



    if (!author || !title || !contents) {
        return res
            .status(STATUS_USER_ERROR)
            .json({
                error: "No se recibieron los parámetros necesarios para crear el Post"
            });
    }
    const post = {
        author, title, contents, id: id++
    }
    posts.push(post);
    res.json(post)

})

server.post(`${PATH}/author/:author`, (req, res) => {
    let author = req.params.author;
    const { title, contents } = req.body;

    if (!author || !title || !contents) {

        return res
            .status(STATUS_USER_ERROR)
            .json({ error: "No se recibieron los parámetros necesarios para crear el Post" })
    }
    const post = {
        author, title, contents, id: id++
    };
    posts.push(post);
    res.status(200).json(post)


})

server.get(`${PATH}`, (req, res) => {
    let { term } = req.query
    if (term) {
        const termPost = posts.filter(
            p => p.title.includes(term) || p.contents.includes(term)
        );

        return res.json(termPost)
    }
    // tu novi te ama mas que no se que
    res.json(posts);
})

server.get(`${PATH}/:author`, (req, res) => {
    // const { title, contents } = req.body;
    let { author } = req.params;
    const post_autor = posts.filter((p) => p.author === author );
    if (post_autor.length > 0) {
        res.json(post_autor)
    } else {
         res
         .status(STATUS_USER_ERROR)
         .json({ error: "No existe ningun post del autor indicado" })
    }
})

server.get(`${PATH}/:author/:title`, (req, res) => {
    // const { title, contents } = req.body;
    let { author, title } = req.params;
    if (author && title) {
        const newpost = posts.filter(p => {return  p.author === author && p.title === title });
        if (newpost.length > 0) {
             res.json(newpost)
        } else {
             res
                .status(STATUS_USER_ERROR)
                .json({ error: "No existe ningun post con dicho titulo y autor indicado" })
        }
    }
    else {
        return res
            .status(STATUS_USER_ERROR)
            .json({ error: "No existe ningun post con dicho titulo y autor indicado" })
    }



})

server.put(`${PATH}`, (req, res) => {
    let { id, title, contents } = req.body
    if (id && title && contents) {
let post= posts.find(p=>p.id === parseInt(id))
if(post){
    post.title=title
    post.contents=contents
    res.json(post)
}else{
    return res
        .status(STATUS_USER_ERROR)
        .json({ error: "No se recibio el id" })    

}
         
    }else{
        return res
        .status(STATUS_USER_ERROR)
        .json({ error: "No se recibieron los parámetros necesarios para modificar el Post" })    
    }
    
        // const termPost = posts.filter(
        //     (p) => { p.author === author && p.title === title }
        // );
        // if (termPost.length > 0) {
        //     return res.json(termPost)
        // } else {
        //     return res
        //         .status(STATUS_USER_ERROR)
        //         .json({ error: "No existe ningun post con dicho titulo y autor indicado" })
        // }
    
    
})

server.delete(`${PATH}`, (req, res) => {
    let { id } = req.body
    let post= posts.find((p)=>p.id === parseInt(id))

    if (!id || !post) {
        return res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" })    
    }
    posts= posts.filter((p)=>p.id !== parseInt(id));
     res.json({ success: true })
})
server.delete('/author', (req, res) => {
    let { author } = req.body
    const authorFind= posts.find((p)=>p.author === author)

    if (!author || !authorFind) {
        return res.status(STATUS_USER_ERROR).json({ error: "No existe el autor indicado" })    
    }
    let posts_nuevo=[];

    posts_nuevo= posts.filter((p)=>p.author === author);
    posts= posts.filter((p)=>p.author !== author);
    // posts= posts.filter(p=>{
    //     if(p.author!== author){
    //         return true
    //     }else{
    //         posts_nuevo.push(p);
    //     }
    // })
     return  res.json(posts_nuevo)
})
module.exports = { posts, server };
