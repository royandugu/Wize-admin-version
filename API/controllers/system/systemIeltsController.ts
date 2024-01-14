import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import { ieltsModel } from "../../models/commonModel/commonModel";

export const getIelts=async ()=>{
    try {
        const indvIelts = await ieltsModel.findOne({});
        if (!indvIelts) setMessageAndResponse("The event does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired event", indvIelts, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   