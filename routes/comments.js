/*
This file contains routes for the writing
*/
const express = require('express');
const router = express.Router();
const Writing = require('../models/Writing');
const Comment = require('../models/Comment');

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

router.get('/:itemId',
  isLoggedIn,
    async (req, res, next) => {
      try {
        console.log("inside /comments/writingid")
        res.locals.writing = await Writing.findOne({_id:req.params.itemId})

        console.log(res.locals.writing);
        res.locals.comments = await Comment.find({writing:req.params.itemId})
        res.render('comments')
      } catch (e) {
        next(e)
      }

  })

router.post('/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      const newComment = new Comment(
        {
         createdAt: new Date(),
         writing:req.params.itemId,
         userId: req.user._id,
         user:req.user.googlename,
         comment:req.body.comment
        })
      await newComment.save();
      res.render('comments')
});

module.exports = router;
