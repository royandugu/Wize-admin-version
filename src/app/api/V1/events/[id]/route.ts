import { NextRequest, NextResponse } from "next/server"
import { getIndvData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import eventModel from "../../../../../../API/models/eventModel/eventModel";

export const GET=async (request:NextRequest,{params}:{params:{id:any}}):Promise<any>=>{
    try{
    const {id}=params;
    const response=await getIndvData(id,eventModel);
    return NextResponse.json(response.bodyData,{status:response.status})
    }
    catch(err){
        return NextResponse.json({err},{status:StatusCodes.INTERNAL_SERVER_ERROR})
    }
}
