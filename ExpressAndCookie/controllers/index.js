var express = require('express');
var router = express.Router();

router.use('/',function(req, res, next){
    // res.send("<h1>hello world testing</h1>");
	res.render('login', {
		pageTitle: 'Login',
		pageID: 'login'
	})
});

module.exports = router;

