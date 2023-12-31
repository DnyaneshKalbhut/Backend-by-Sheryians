const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pinterest");

const postSchema = new mongoose.Schema
({

    posttext:{
        type:String,
        required:true,
        
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    likes: {
        type:Array,
        default:[],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Post',postSchema)