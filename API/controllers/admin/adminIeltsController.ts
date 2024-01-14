import { StatusCodes } from "http-status-codes";
import { response, setMessageAndResponse } from "../../modules/eventModules";

import { ieltsModel } from "../../models/commonModel/commonModel";

export const updateIelts = async (id: string, body: object) => {
    try {
        const updatedIelts = await ieltsModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Ielts sucesfully updated", updatedIelts, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createIelts=async (body:object)=>{
    try{
       const createdIelts=await ieltsModel.create(body);
       setMessageAndResponse("Ielts sucesfully created", createdIelts, StatusCodes.OK);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}