import { StatusCodes } from "http-status-codes";
import { response, setMessageAndResponse } from "../../modules/eventModules";

import eventModel from "../../models/eventModel/eventModel";

export const createEvent = async (body: object) => {
    try {
        const createdEvent = await eventModel.create(body);
        console.log(createdEvent);
        setMessageAndResponse("Event created", createdEvent, StatusCodes.CREATED);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const updateEvent = async (id: string, body: object) => {
    try {
        const updatedEvent = await eventModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Event sucesfully updated", updatedEvent, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const deleteEvent = async (id: string) => {
    try {
        const deletedEvent = await eventModel.findOneAndDelete({ _id: id });
        setMessageAndResponse("Event sucesfully deleted", deletedEvent, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}
