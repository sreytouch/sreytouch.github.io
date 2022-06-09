const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.use(cookieParser());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.listen(3000, function(){
    console.log('Your Server is running on 3000');
});

app.use(require('./controllers'));