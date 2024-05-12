import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes";
import { getOneData } from "../../../../../API/controllers/controllers";

import { migrationModel } from "../../../../../API/models/cmsModel/cmsModel";
import { connectMigrationDB } from "../../../../../API/connector/connector";

export const dynamic = 'force-dynamic';
export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(migrationModel,connectMigrationDB);
        return NextResponse.json({message:response.message,data:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}