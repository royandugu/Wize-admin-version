import { NextRequest, NextResponse } from "next/server"
import { getVisitorPage } from "../../../../../../API/controllers/system/systemVisitorController";

import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getVisitorPage();
        return NextResponse.json({message:response.message,visitor:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}