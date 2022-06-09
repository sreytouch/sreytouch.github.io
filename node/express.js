const express = require('express');
const path = require('path');
const ejs = require("ejs");
const { error } = require('console');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let data = [];
let cou = 0;

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, './', 'view', 'jqueryReview.html'));
    cou ++;
})

app.post("/postData", function (req, res) {
    data = req.body;
    res.redirect("view");
})

app.get("/view", function (req, res) {
    res.render(path.join(__dirname, './', 'view', 'jqueryReviewEjs.html'), { data: data, cou: cou });
})

app.get("/error", function(req, res){
    res.status(error());
})

app.use(function (eq, res) {
    res.status(400);
    res.sendFile(path.join(__dirname, '../', '404.html'))
})

app.use(function (error, eq, res) {
    res.status(500);
    res.sendFile(path.join(__dirname, '../', 'error.html'))
})