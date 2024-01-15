import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes";
import { updateData } from "../../../../../../../API/controllers/controllers";

import educationModel from "../../../../../../../API/models/educationModel/educationModel";

export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateData(id,jsonReq,educationModel);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}




