import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import visitorModel from "../../models/migration/visitorModel";

export const getVisitorPage=async ()=>{
    try {
        const visitorPage = await visitorModel.findOne({});
        if (!visitorPage) setMessageAndResponse("The Visitor page does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired visitor page data", visitorPage, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   