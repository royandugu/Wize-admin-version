import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    initialParagraph:{
        type:String,
        required:[true,"Initial paragraph is required"]
    },
    studentBanner:{
        type:String,
        required:[true, "Student banner is required"]
    },
    documentRequirements:{
        type:String,
        required:[true, "Document requirements is required"]
    },
    ourServices:{
        type:String,
        required:[true, "Our services is required"]
    },
    disclaimer:{
        type:String,
        required:[true,"Disclaimer is required"]
    }
},{timestamps:true})

const studentModel=mongoose.models.student || mongoose.model("student",studentSchema); 
export default studentModel;