import mongoose from "mongoose";

const vistorSchema=new mongoose.Schema({
    whyChooseAustralia:{
        type:String,
        required:[true,"Why choose australia is required"]
    },
    touristStreamBanner:{
        type:String,
        required:[true, "Tourist stream banner is required"]
    },
    touristStreamText:{
        type:String,
        required:[true, "Tourist stream text is required"]
    },
    buisnessVisitorBanner :{
        type:String,
        required:[true, "Buisness stream banner is required"]
    },
    buisnessVisitorText :{
        type:String,
        required:[true, "Buisness visitor stream is required"]
    },
    familyBanner:{
        type:String,
        required:[true, "Our services banner is required"]
    },
    familyText :{
        type:String,
        required:[true, "Our services banner is required"]
    },
    ourServices:{
        type:String,
        required:[true, "Our services is required"]
    }
},{timestamps:true})

const visitorModel=mongoose.models.visitor || mongoose.model("visitor",vistorSchema); 
export default visitorModel;