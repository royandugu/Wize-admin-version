import mongoose from "mongoose";

const commonSchema=new mongoose.Schema({
    titleOne:{
        type:String,
        required:[true,"Title must be present"],
    },
    paraOne:{
        type:String,
        required:[true,"Para one must be present"]
    },
    pointParasOne:{
        type:[{point:String,para:String}],
        required:[true,"Point para one must be present"]
    },
    titleTwo:{
        type:String,
        required:[true,"Title two must be present"]
    },
    paraTwo:{
        type:String,
        required:[true,"Para two must be present"]
    },
    pointParasTwo:{
        type:[{point:String,para:String}],
        required:[true,"Point para two must be present"]
    },
    titleThree:{
        type:String,
        required:[true,"Title three must be present"]
    },
    paraThree:{
        type:String,
        required:[true,"Para three must be present"]
    },
    pictureOne:{
        type:String,
        required:[true,"Picture one must be present"]
    },
    pictureTwo:{
        type:String,
        required:[true,"Picture two must be present"]
    }
},{timestamps:true})

export const ieltsModel=mongoose.models.ielts || mongoose.model("ielts",commonSchema); 
export const pteModel=mongoose.models.pte || mongoose.model("pte",commonSchema); 
export const pyModel=mongoose.models.pies || mongoose.model("pies",commonSchema); 
