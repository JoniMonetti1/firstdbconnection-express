const express = require('express');
const axios = require('axios');

const route = express.Router('/main');

route.get('/', (req, res) => {
    res.render('index');
})

route.get('/world', (req, res) => {
    res.send('Hello, World!');
})

route.get('/welcome', (req, res) => {
    res.send('Welcome to our website!');
})

route.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

route.get('/about', (req, res) => {
    const title = 'About us'; //Esta podria ser info que viene de la bbdd
    
    res.render('about', {title}); //{title} = {title: title}
})

route.get('/posts', async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    res.render('posts', {
        posts: response.data
    });
})

module.exports = route;