const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const route =require('./routers/routes');
const cookieParser=require('cookie-parser');
const db=require('./db');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(session({
    secret: "cookie_secret",
    name: "cookie_name",
    // store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
//Error-handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })    
app.use('/api',route);    
app.listen(3007, () => {
    console.log("server runing");
});