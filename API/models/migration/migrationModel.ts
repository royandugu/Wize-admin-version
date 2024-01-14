import mongoose from "mongoose";

const migrationSchema=new mongoose.Schema({
    whyChooseUsBanner:{
        type:String,
        required:[true,"Why choose us banner must be present"],
    },
    whyChooseUsText:{
        type:String,
        required:[true,"Why choose us text must be present"]
    },
    ourMigServicesBanner:{
        type:String,
        required:[true,"Our Migration services banner must be present"]
    },
    ourMigServicesText:{
        type:String,
        required:[true,"Our Migration text must be present"]
    },
    readyToBegin:{
        type:String,
        required:[true,"Ready to begin text must be present"]
    },
    disclaimer:{
        type:String,
        required:[true,"Disclaimer should be present"]
    }
},{timestamps:true})

const migrationModel=mongoose.models.migration || mongoose.model("migration",migrationSchema); 

export default migrationModel