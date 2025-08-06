import mongoose, { Schema } from 'mongoose'
const userSchema=new Schema({
    userName:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    userImage:{
        type:String,
        default:"https://tse3.mm.bing.net/th/id/OIP.djtHFlAcx0spchAfFcg87gHaIg?pid=Api&P=0&h=180"
    }
},{timestamps: true})

const User=mongoose.model('User',userSchema);

export default User;