import { NextRequest, NextResponse } from "next/server"
import { getOneData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import partnerModel from "../../../../../../API/models/migration/partnerModel";
export const dynamic = 'force-dynamic';
export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(partnerModel);
        return NextResponse.json({message:response.message,partner:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}