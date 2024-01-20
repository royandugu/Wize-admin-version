import mongoose from "mongoose";

const commonSchema=new mongoose.Schema({
    industry:{
        type:String,
        required:[true,"Industry must be present"],
    },
    qualification:{
        type:String,
        required:[true,"Qualification must be present"]
    },
    yearExp:{
        type:String,
        required:[true,"Year experience must be present"]
    },
    placeExp:{
        type:String,
        required:[true,"Place experience must be present"]
    },
    state:{
        type:String,
        required:[true,"state must be present"]
    },
    formalQualifications:{
        type:String,
        required:[true,"Formal qualifications must be present"]
    },
    firstName:{
        type:String,
        required:[true,"First name must be present"]
    },
    lastName:{
        type:String,
        required:[true,"Last name must be present"]
    },
    contactNumber:{
        type:String,
        required:[true,"Contact number must be present"]
    },
    email:{
        type:String,
        required:[true,"Email must be present"]
    },
    questionsForUs:{
        type:String
    }
},{timestamps:true})

const quizModel=mongoose.models.quiz || mongoose.model("quiz",commonSchema); 
export default quizModel;