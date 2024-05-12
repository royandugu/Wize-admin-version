import { NextRequest,NextResponse } from "next/server";
import { updateData } from "../../../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import { partnerModel } from "../../../../../../../../API/models/cmsModel/cmsModel";
import { connectMigrationDB } from "../../../../../../../../API/connector/connector";

export const dynamic = 'force-dynamic';
export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateData(id,jsonReq,partnerModel,connectMigrationDB);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}
