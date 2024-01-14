import { NextRequest, NextResponse } from "next/server"
import { updatePte } from "../../../../../../../../API/controllers/admin/adminPteController";
import { StatusCodes } from "http-status-codes";

export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updatePte(id,jsonReq);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}




