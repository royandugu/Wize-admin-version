import { StatusCodes } from "http-status-codes";
import {response, setMessageAndResponse} from "../../modules/eventModules";

import migrationModel from "../../models/migration/migrationModel";

export const getMigration=async ()=>{
    try {
        const indvMigration = await migrationModel.findOne({});
        if (!indvMigration) setMessageAndResponse("The migration data does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired migration data", indvMigration, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null,StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}   