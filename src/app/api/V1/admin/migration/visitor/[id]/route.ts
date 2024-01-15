import { NextRequest,NextResponse } from "next/server";
import { updateData } from "../../../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import visitorModel from "../../../../../../../../API/models/migration/visitorModel";
export const dynamic = 'force-dynamic';
export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateData(id,jsonReq,visitorModel);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}