import { NextRequest,NextResponse } from "next/server";
import { updateVisitor } from "../../../../../../../../API/controllers/admin/adminVisitorController";
import { StatusCodes } from "http-status-codes";

export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateVisitor(id,jsonReq);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}