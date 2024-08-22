const express = require("express");

const route = express.Router('/user');


route.get('/', (req, res) => {
    res.render('users');
})

module.exports = route;