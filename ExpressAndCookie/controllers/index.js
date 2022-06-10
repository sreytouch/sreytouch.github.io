var express = require('express');
var router = express.Router();

router.use('/login',function(req, res, next){
    // res.send("<h1>hello world testing</h1>");
	res.render('login', {
		pageTitle: 'Login',
		pageID: 'login'
	})
});

router.use('/user',function(req, res, next){
    // res.send("<h1>hello world testing</h1>");
	res.render('user', {
		pageTitle: 'User',
		pageID: 'user'
	})
});

router.use('/display',function(req, res, next){
    // res.send("<h1>hello world testing</h1>");
	res.render('display', {
		pageTitle: 'Display',
		pageID: 'display'
	})
});

router.use('/',function(req, res, next){
    // res.send("<h1>hello world testing</h1>");
	res.render('404', {
		pageTitle: '404',
		pageID: '404'
	})
});

module.exports = router;

