import partnerModel from "../../models/migration/partnerModel";

import { setMessageAndResponse, response } from "../../modules/eventModules";
import { StatusCodes } from "http-status-codes";

export const updatePartner=async (id: string, body: object)=>{
    try {
        const updatedPartner = await partnerModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Partner details sucesfully updated", updatePartner, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createPartner=async (body:object)=>{
    try{
        const createdPartner=await partnerModel.create(body);
        setMessageAndResponse("Partner sucesfully created", createdPartner, StatusCodes.CREATED);
     }
     catch (err: any) {
         console.log(err);
         setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
     }
     return response;
}