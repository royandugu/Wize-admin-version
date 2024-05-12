import { NextRequest, NextResponse } from "next/server"
import { createData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";
import { connectMigrationDB } from "../../../../../../API/connector/connector";
import { migrationModel } from "../../../../../../API/models/cmsModel/cmsModel";

export const dynamic = 'force-dynamic';
export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const jsonReq=await request.json();
        const response=await createData(jsonReq,migrationModel,connectMigrationDB);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


