import { NextRequest, NextResponse } from "next/server"
import { getPy } from "../../../../../../API/controllers/system/systemPyController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getPy();
        return NextResponse.json({message:response.message,py:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}