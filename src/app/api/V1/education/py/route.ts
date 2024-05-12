import { NextRequest, NextResponse } from "next/server"
import { getOneData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import { pyModel } from "../../../../../../API/models/cmsModel/cmsModel";
import { connectEducationDB } from "../../../../../../API/connector/connector";
export const dynamic = 'force-dynamic';
export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(pyModel,connectEducationDB);
        return NextResponse.json({message:response.message,data:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}