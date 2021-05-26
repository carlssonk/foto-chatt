const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ImageSchema = new Schema({
  url: String,
  filename: String,
})


// const CommentSchema = new Schema({
//   text: String,
// })

// ImageSchema.virtual("thumbnail").get(function() {
//   return this.url.replace("/upload", "/upload/w_200")
// })

const MessageSchema = new Schema({
  text: String,
  sent: Date,
  images: [ImageSchema],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
})

module.exports = mongoose.model("Message", MessageSchema);