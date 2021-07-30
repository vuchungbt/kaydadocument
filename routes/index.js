const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/checkAuth');

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ blog list ------------//
router.get('/bloglist', (req, res) => {
    res.render('bloglist');
});

//------------ blog list ------------//
router.get('/stories', (req, res) => {
    res.render('stories');
});



router.get('/dashboard', ensureAuthenticated, (req,res) => res.render('home',{name: req.user.name}));

module.exports = router;