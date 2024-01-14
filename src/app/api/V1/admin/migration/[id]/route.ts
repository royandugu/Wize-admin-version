import { NextRequest,NextResponse } from "next/server";
import { updateMigration } from "../../../../../../../API/controllers/admin/adminMigrationController";
import { StatusCodes } from "http-status-codes";

export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateMigration(id,jsonReq);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}
