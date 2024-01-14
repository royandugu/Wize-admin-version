import { StatusCodes } from "http-status-codes";
import { response, setMessageAndResponse } from "../../modules/eventModules";

import migrationModel from "../../models/migration/migrationModel";

export const updateMigration = async (id: string, body: object) => {
    console.log("Here");
    try {
        const updatedMigration = await migrationModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Migration sucesfully updated", updatedMigration, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createMigration=async (body:object)=>{
    try{
       const createdMigration=await migrationModel.create(body);
       setMessageAndResponse("Migration sucesfully created", createdMigration, StatusCodes.OK);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}