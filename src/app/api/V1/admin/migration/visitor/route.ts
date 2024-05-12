import { NextRequest, NextResponse } from "next/server"

import { StatusCodes } from "http-status-codes";
import { createData } from "../../../../../../../API/controllers/controllers";
import { visitorModel } from "../../../../../../../API/models/cmsModel/cmsModel";
import { connectMigrationDB } from "../../../../../../../API/connector/connector";

export const dynamic = 'force-dynamic';
export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const jsonReq=await request.json();
        const response=await createData(jsonReq,visitorModel,connectMigrationDB);
        return NextResponse.json({message:response.message,createdVisitor:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


