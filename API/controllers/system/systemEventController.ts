import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import eventModel from "../../models/eventModel/eventModel";

export const getIndvEvent=async (id:string)=>{
    const indvEvent=await eventModel.findOne({_id:id});
    if(!indvEvent) setMessageAndResponse("The event does not exist",null,StatusCodes.NOT_FOUND);
    else setMessageAndResponse("Your desired event",indvEvent,StatusCodes.OK);
    return response;
}   

export const getAllEvents=async ()=>{
    try{
        const events=await eventModel.find({}).sort({updatedAt: -1});
        setMessageAndResponse("All your events",events,StatusCodes.OK);
    }
    catch(err){
        setMessageAndResponse("Event fetching error",null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;

}

