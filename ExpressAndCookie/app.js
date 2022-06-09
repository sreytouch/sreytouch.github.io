const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();


app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.listen(3000, function(){
    console.log('Your Server is running on 3000');
})

app.use('/new',function(req, res, next){
    // console.log("hello world");
    res.send("<h1>hello world testing</h1>");
});