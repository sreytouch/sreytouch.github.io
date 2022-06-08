const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

app.get("/add", function (req, res, next) {
    res.sendFile(path.join(__dirname, './', 'view', 'jqueryReview.html'));
})

let data = [];
app.post("/postData", function (req, res, next) {
    data = req.body;
    res.redirect("view");
})

app.get("/view", function (req, res, next) { 
    res.render(path.join(__dirname, './', 'view', 'jqueryReviewEjs.html'),{data:data});
})

app.use(function (eq, res, next) {
    res.sendFile(path.join(__dirname, '../', '404.html'))
})