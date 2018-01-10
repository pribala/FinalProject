const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
  // `title` is of type String

  commentAuthor:{
    type: String,
    required: true,
    unique: true
  },
  commentDate:{
    type: Date,
  	required: false,
  	default: Date.now 
  },
  commentBody:{
    type: String,
  	required: false,
  	default: Date.now 
  },
  rating:{
    type: String,
  	required: false,
  },
  recipeUrl:{
    type: String,
  	required: true
  }

});

// This creates our model from the above schema, using mongoose's model method
const Comments = mongoose.model("Comment", CommentSchema);

// Export the Comment model
module.exports = Comments;