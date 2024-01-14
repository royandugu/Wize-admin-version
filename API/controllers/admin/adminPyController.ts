import { pyModel } from "../../models/commonModel/commonModel";
import { StatusCodes } from "http-status-codes";
import { setMessageAndResponse, response } from "../../modules/eventModules";

export const updatePy = async (id: string, body: object) => {
    try {
        const updatedPy = await pyModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("py sucesfully updated", updatedPy, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}


export const createPy=async (body:object)=>{
    try{
       const createdPy=await pyModel.create(body);
       setMessageAndResponse("PY sucesfully created", createdPy, StatusCodes.CREATED);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}