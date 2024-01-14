import { NextRequest, NextResponse } from "next/server"
import { getStudentPage } from "../../../../../../API/controllers/system/systemStudentController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getStudentPage();
        return NextResponse.json({message:response.message,student:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}