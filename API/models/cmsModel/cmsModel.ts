import mongoose from "mongoose";

const cmsSchema=new mongoose.Schema({
    content: [
        {
            title: String,
            subtitle: String,
            description: String,
            images: String // Assuming image URLs are stored as strings
        }
    ]
},{timestamps:true})

const cmsModel=mongoose.models.cmsmodel || mongoose.model("cmsmodel",cmsSchema);
export default cmsModel;