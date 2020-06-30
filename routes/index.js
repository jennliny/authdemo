var express = require('express');
var router = express.Router();
const Writing = require('../models/Writing');
const Comment = require('../models/Comment');

/* GET home page. */
router.get('/',
  async (req, res, next) => {
    try {

      res.locals.posts = await Writing.find({});
      res.locals.posts.sort((a,b) => b.createdAt - a.createdAt);
      res.render('index', { title: 'Express' });
    } catch (e) {
      next(e)
    }

});

router.get('/remove/:itemId',
  //isLoggedIn,
  async (req, res, next) => {
      console.log("inside /remove/:itemId")
      await Writing.remove({_id:req.params.itemId});
      res.redirect('/')
});



module.exports = router;
