import { NextRequest, NextResponse } from "next/server"
import { updateIelts } from "../../../../../../../../API/controllers/admin/adminIeltsController";
import { StatusCodes } from "http-status-codes";

export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateIelts(id,jsonReq);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}




