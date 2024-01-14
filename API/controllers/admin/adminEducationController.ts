import { StatusCodes } from "http-status-codes";
import { response, setMessageAndResponse } from "../../modules/eventModules";

import educationModel from "../../models/educationModel/educationModel";

export const updateEducation = async (id: string, body: object) => {
    try {
        const updatedEducation = await educationModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Education sucesfully updated", updatedEducation, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createEducation=async (body:object)=>{
    try{
       const createdEducation=await educationModel.create(body);
       setMessageAndResponse("Education sucesfully created", createdEducation, StatusCodes.OK);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}