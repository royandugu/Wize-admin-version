import mongoose from "mongoose";

const commonSchema=new mongoose.Schema({
    whyChooseAusBanner:{
        type:String,
        required:[true,"Why choose australia banner must be present"],
    },
    whyChooseAusText:{
        type:String,
        required:[true,"Why choose australia text must be present"]
    },
    ourEduServicesBanner:{
        type:String,
        required:[true,"Our education services banner must be present"]
    },
    ourEduServicesText:{
        type:String,
        required:[true,"Our education text must be present"]
    },
    futureAwaitsText:{
        type:String,
        required:[true,"Future awaits text must be present"]
    }
},{timestamps:true})

const educationModel=mongoose.models.education || mongoose.model("education",commonSchema); 

export default educationModel