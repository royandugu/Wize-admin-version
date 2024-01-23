import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    profilePicture:{
        type:String
    },
    name:{
        type:String,
        required:[true, "Title field is required"]
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Your email doesnot match the format"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"],
        match:[/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"Please provide a valid password"]
    }
},{timestamps:true})

const userModel=mongoose.models.user || mongoose.model("user",userSchema); 
export default userModel;