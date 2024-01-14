import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    profilePicture:{
        type:String,
        required:[true,"You must enter your profile picture"]
    },
    name:{
        type:String,
        required:[true, "Title field is required"]
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    }
},{timestamps:true})

const userModel=mongoose.models.user || mongoose.model("user",userSchema); 
export default userModel;