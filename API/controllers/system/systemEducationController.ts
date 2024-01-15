import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import connectDB from "../../connector/connector";

import educationModel from "../../models/educationModel/educationModel";

export const getEducation=async ()=>{
    try {
        await connectDB();
        const indvEducation = await educationModel.findOne({});
        if (!indvEducation) setMessageAndResponse("The event does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired event", indvEducation, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   