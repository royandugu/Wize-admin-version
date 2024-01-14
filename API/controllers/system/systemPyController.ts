import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import { pyModel } from "../../models/commonModel/commonModel";

export const getPy=async ()=>{
    const indvPy=await pyModel.findOne({});
    console.log(indvPy);
    if(!indvPy) setMessageAndResponse("The py does not exist",null,StatusCodes.NOT_FOUND);
    else setMessageAndResponse("Your desired py",indvPy,StatusCodes.OK);
    return response;
}   