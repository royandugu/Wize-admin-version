import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes";
import { getMigration } from "../../../../../API/controllers/system/systemMigrationController";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getMigration();
        return NextResponse.json({message:response.message,migration:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}