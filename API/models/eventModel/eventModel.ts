import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title must be present"],
        unique:true
    },
    startDate:{
        type:Date,
        required:[true, "Start date of the event must be present"]
    },
    endDate:{
        type:Date,
        required:[true, "End date of the event must be present"]
    },
    banner:{
        type:String
    },
    body:{
        type:String,
        required:[true, "Event body cannot be empty"]
    }
},{timestamps:true})

const eventModel=mongoose.models.event || mongoose.model("event",eventSchema); 
export default eventModel;