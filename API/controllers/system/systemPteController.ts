import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import { pteModel } from "../../models/commonModel/commonModel";

export const getPte=async ()=>{
    const indvPte=await pteModel.findOne({});
    if(!indvPte) setMessageAndResponse("The pte does not exist",null,StatusCodes.NOT_FOUND);
    else setMessageAndResponse("Your desired pte",indvPte,StatusCodes.OK);
    return response;
}   