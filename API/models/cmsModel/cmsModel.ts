import mongoose from "mongoose";

const cmsSchema = new mongoose.Schema({
    content: {
        initialPara:{
            type:String,   
            required:[true, "Initial paragraph must be present"]
        },
        cms: [
            {
                title: String,
                subtitle: String,
                description: String,
                image: String
            }
        ]
    } 
}, { timestamps: true })

export const educationModel = mongoose.models.educationModel || mongoose.model("educationModel", cmsSchema);
export const pteModel = mongoose.models.pteModel || mongoose.model("pteModel", cmsSchema);
export const pyModel = mongoose.models.pyModel || mongoose.model("pyModel", cmsSchema);
export const ieltsModel = mongoose.models.ieltsModel || mongoose.model("ieltsModel", cmsSchema);

export const migrationModel = mongoose.models.migrationModel || mongoose.model("migrationModel", cmsSchema);
export const occupationModel = mongoose.models.occupationModel || mongoose.model("occupationModel", cmsSchema);
export const studentModel = mongoose.models.studentModel || mongoose.model("studentModel", cmsSchema);
export const trModel = mongoose.models.trModel || mongoose.model("trModel", cmsSchema);
export const visitorModel = mongoose.models.visitorModel || mongoose.model("visitorModel", cmsSchema);
export const partnerModel = mongoose.models.partnerModel || mongoose.model("partnerModel", cmsSchema);
