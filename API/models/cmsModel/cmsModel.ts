import mongoose from "mongoose";

const cmsSchema=new mongoose.Schema({
    content: [
        {
            title: String,
            subtitle: String,
            description: String,
            image: String 
        } 
    ]
},{timestamps:true})

const cmsModel=mongoose.models.cmsmodel || mongoose.model("cmsmodel",cmsSchema);
export default cmsModel;