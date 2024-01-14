import { NextRequest, NextResponse } from "next/server"
import { getIelts } from "../../../../../../API/controllers/system/systemIeltsController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getIelts();
        return NextResponse.json({message:response.message,ielts:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}