/*
This file contains routes for the writing
*/
const express = require('express');
const router = express.Router();
const Writing = require('../models/Writing');

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

router.get('/',
  isLoggedIn, (req,res) => {
    res.render('writing')
  }
)

router.post('/',
  isLoggedIn,
  async (req, res, next) => {
      const newPost = new Writing(
        {title:req.body.title,
         createdAt: new Date(),
         writing:req.body.writing,
         authorID: req.user._id,
         author: req.user.googlename
        })
      await newPost.save();
      res.redirect('/')
});

module.exports = router;
