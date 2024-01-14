import trModel from "../../models/migration/trModel";
import { setMessageAndResponse, response } from "../../modules/eventModules";
import { StatusCodes } from "http-status-codes";

export const updateTr=async (id: string, body: object)=>{
    try {
        const updatedTr = await trModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Tr details sucesfully updated", updatedTr, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createTr=async (body:object)=>{
    try{
        const createdTr=await trModel.create(body);
        setMessageAndResponse("Tr sucesfully created", createdTr, StatusCodes.CREATED);
     }
     catch (err: any) {
         console.log(err);
         setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
     }
     return response;
}