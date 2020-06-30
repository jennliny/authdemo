
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var WritingSchema = Schema( {
  writing: String,
  title: String,
  createdAt: Date,
  authorID: ObjectId,
  author: String
} );

module.exports = mongoose.model( 'Writing', WritingSchema );
