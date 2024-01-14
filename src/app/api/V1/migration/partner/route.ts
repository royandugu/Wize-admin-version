import { NextRequest, NextResponse } from "next/server"
import { getPartnerPage } from "../../../../../../API/controllers/system/systemPartnerController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getPartnerPage();
        return NextResponse.json({message:response.message,partner:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}