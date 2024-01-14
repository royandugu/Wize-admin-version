import studentModel from "../../models/migration/studentModel"
import { setMessageAndResponse, response } from "../../modules/eventModules";
import { StatusCodes } from "http-status-codes";

export const updateStudent=async (id: string, body: object)=>{
    try {
        const updatedStudent = await studentModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("student details sucesfully updated", updatedStudent, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createStudent=async (body:object)=>{
    try{
        const createdStudent=await studentModel.create(body);
        setMessageAndResponse("Student sucesfully created", createdStudent, StatusCodes.CREATED);
     }
     catch (err: any) {
         console.log(err);
         setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
     }
     return response;
}