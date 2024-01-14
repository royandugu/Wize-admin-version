import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import trModel from "../../models/migration/trModel";

export const getTrPage=async ()=>{
    try {
        const trPage = await trModel.findOne({});
        if (!trPage) setMessageAndResponse("The Tr page does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired Tr page data", trPage, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   