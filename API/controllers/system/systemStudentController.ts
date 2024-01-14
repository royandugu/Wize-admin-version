import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import studentModel from "../../models/migration/studentModel";

export const getStudentPage=async ()=>{
    try {
        const studentPage = await studentModel.findOne({});
        if (!studentPage) setMessageAndResponse("The student page does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired student page data", studentPage, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   