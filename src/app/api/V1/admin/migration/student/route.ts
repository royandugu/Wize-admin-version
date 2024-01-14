import { NextRequest, NextResponse } from "next/server"
import { createStudent } from "../../../../../../../API/controllers/admin/adminStudentController";
import { StatusCodes } from "http-status-codes";

export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const jsonReq=await request.json();
        const response=await createStudent(jsonReq);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


