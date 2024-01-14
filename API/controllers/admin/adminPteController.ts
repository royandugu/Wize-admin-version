import { pteModel } from "../../models/commonModel/commonModel";
import { StatusCodes } from "http-status-codes";
import { setMessageAndResponse, response } from "../../modules/eventModules";

export const updatePte = async (id: string, body: object) => {
    try {
        const updatePte = await pteModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("PTE sucesfully updated", updatePte, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}


export const createPte=async (body:object)=>{
    try{
       const createdPte=await pteModel.create(body);
       setMessageAndResponse("PTE sucesfully created", createdPte, StatusCodes.CREATED);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}