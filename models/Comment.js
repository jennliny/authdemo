'use strict';
const mongoose = require( 'mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;



const commentSchema = Schema( {
  user:String,
  userId: ObjectId,
  writing: {type:Schema.Types.ObjectId, ref:"Writing"},
  createdAt: Date,
  comment:String,
  
});

module.exports = mongoose.model('CommentJL', commentSchema);
