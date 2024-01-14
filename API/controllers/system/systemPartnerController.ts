import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import partnerModel from "../../models/migration/partnerModel";

export const getPartnerPage=async ()=>{
    try {
        const partnerPage = await partnerModel.findOne({});
        if (!partnerPage) setMessageAndResponse("The partner page does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired partner page data", partnerPage, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   