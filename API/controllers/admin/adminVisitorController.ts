import visitorModel from "../../models/migration/visitorModel";
import { setMessageAndResponse, response } from "../../modules/eventModules";
import { StatusCodes } from "http-status-codes";

export const updateVisitor=async (id: string, body: object)=>{
    try {
        const updatedVisitor = await visitorModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Visitor details sucesfully updated", visitorModel, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createVisitor=async (body:object)=>{
    try{
        const createdVisitor=await visitorModel.create(body);
        setMessageAndResponse("Visitor sucesfully created", createdVisitor, StatusCodes.CREATED);
     }
     catch (err: any) {
         console.log(err);
         setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
     }
     return response;
}