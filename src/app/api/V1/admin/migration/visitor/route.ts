import { NextRequest, NextResponse } from "next/server"

import { StatusCodes } from "http-status-codes";
import { createData } from "../../../../../../../API/controllers/controllers";

import visitorModel from "../../../../../../../API/models/migration/visitorModel";
export const dynamic = 'force-dynamic';
export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const jsonReq=await request.json();
        const response=await createData(jsonReq,visitorModel);
        return NextResponse.json({message:response.message,createdVisitor:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


