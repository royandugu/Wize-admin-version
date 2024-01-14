import mongoose from "mongoose";

const trSchema=new mongoose.Schema({
    basicEligibility:{
        type:String,
        required:[true,"Basic eligibility is required"]
    },
    applicationProcessBanner:{
        type:String,
        required:[true, "Application process banner is required"]
    },
    applicationProcess:{
        type:String,
        required:[true, "Application process is required"]
    },
    ourServicesBanner:{
        type:String,
        required:[true, "Our services banner is required"]
    },
    ourServices:{
        type:String,
        required:[true, "Our services is required"]
    }
},{timestamps:true})

const trModel=mongoose.models.tr || mongoose.model("tr",trSchema); 
export default trModel;