import mongoose, { Schema } from 'mongoose'
const postSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    postImage:{
        type:String,
        default:"https://wallpapercave.com/wp/wp5511725.jpg"
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps: true})

const Post=mongoose.model('Post',postSchema);

export default Post;