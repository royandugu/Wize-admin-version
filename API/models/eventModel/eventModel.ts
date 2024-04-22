import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    content: {
        title: {
            type: String,
            required: [true, "Title must be present"],
            unique: true
        },
        startDate: {
            type: Date,
            required: [true, "Start date of the event must be present"]
        },
        endDate: {
            type: Date,
            required: [true, "End date of the event must be present"]
        },
        googleFormUrl:{
            type: String,
            required:[true,"Google form url must be present"]
        },
        banner: {
            type: String
        },
        location:{
            type:String,
            required:[true, "Event location must be present"]
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

const eventModel = mongoose.models.event || mongoose.model("event", eventSchema);
export default eventModel;