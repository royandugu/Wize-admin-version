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
    },
    educationalBackgrond:[
        {
            schoolName:{
                type:String,
                required:[true, "School name is required"]
            },
            startDate:{
                type:Date,
                required:[true, "Start date must be present"]
            },
            endDate:Date,
            subjectName:{
                type:String,
                required:[true, "Subject name must be present"]
            }  
        }
    ],
    professionalBackground:[
        {
            companyName:{
                type:String,
                required:[true, "Company name must be present"]
            },
            startDate:{
                type:Date,
                required:[true, "Starting date must be present"]
            },
            endDate:{
                type:Date
            },
            jobPost:{
                type:String,
                required:[true,"Job post is required"]
            }
        }
    ]
},{timestamps:true})

const userModel=mongoose.models.user || mongoose.model("user",userSchema); 
export default userModel;