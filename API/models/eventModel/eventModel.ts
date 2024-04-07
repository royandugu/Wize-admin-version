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
        banner: {
            type: String
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