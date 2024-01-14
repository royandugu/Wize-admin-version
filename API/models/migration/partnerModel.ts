import mongoose from "mongoose";

const partnerSchema=new mongoose.Schema({
    subClass309Banner:{
        type:String,
        required:[true,"Sub class 309  banner is required"]
    },
    subClass309Text:{
        type:String,
        required:[true, "Sub class 309 text is required"]
    },
    subClass100Banner:{
        type:String,
        required:[true, "Sub class 100 banner is required"]
    },
    subClass100Text:{
        type:String,
        required:[true, "Sub class 100 text is required"]
    },
    studentDependentBanner:{
        type:String,
        required:[true, "Student dependent banner is required"]
    },
    studentDependentText:{
        type:String,
        required:[true, "Student dependent text is required"]
    },
    workDependentBanner:{
        type:String,
        required:[true, "Work dependent banner is required"]
    },
    workDependentText:{
        type:String,
        required:[true, "Work dependent text is required"]
    },
},{timestamps:true})

const partnerModel=mongoose.models.partner || mongoose.model("partner",partnerSchema); 
export default partnerModel;