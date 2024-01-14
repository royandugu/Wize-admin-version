import { NextRequest, NextResponse } from "next/server"
import { getTrPage } from "../../../../../../API/controllers/system/systemTrController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getTrPage();
        return NextResponse.json({message:response.message,tr:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}