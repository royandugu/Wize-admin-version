import { NextRequest, NextResponse } from "next/server"
import { getIndvEvent } from "../../../../../../API/controllers/system/systemEventController";
import { StatusCodes } from "http-status-codes";

export const GET=async (request:NextRequest,{params}:{params:{id:any}}):Promise<any>=>{
    try{
    const {id}=params;
    const response=await getIndvEvent(id);
    return NextResponse.json(response.bodyData,{status:response.status})
    }
    catch(err){
        return NextResponse.json({err},{status:StatusCodes.INTERNAL_SERVER_ERROR})
    }
}
