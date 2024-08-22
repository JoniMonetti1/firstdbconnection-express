const express = require("express");
const morgan = require("morgan");
const path = require("path");
const home = require("./routes/home");
const users = require("./routes/users");
const connectDB = require('./db');

connectDB();

const app = express();

app.use(express.text());
app.use(express.json());
app.use('/home', home);
app.use('/users', users);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//Logging middleware
app.use(morgan('dev'));




//isValidAuthorization middleware
// app.use((req, res, next) => {
//     if (req.query.login === 'admin') {
//         next();
//     } else {
//         res.status(401).send('Unauthorized');
//     }
// })



app.use('/public', express.static(path.join(__dirname, './public')));

app.listen(3000, () => {
    console.log("Express running at http://localhost:3000");
});
