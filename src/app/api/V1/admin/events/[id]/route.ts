import { NextRequest,NextResponse } from "next/server";
import { updateData, deleteData } from "../../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";
import { connectEventsDB } from "../../../../../../../API/connector/connector";

import eventModel from "../../../../../../../API/models/eventModel/eventModel";
export const dynamic = 'force-dynamic';
export const PATCH=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const jsonReq=await request.json();
        const response=await updateData(id,jsonReq,eventModel, connectEventsDB);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}

export const DELETE=async (request:NextRequest,{params}:{params:{id:string}}):Promise<any>=>{
    try{
        const {id}=params;
        const response=await deleteData(id,eventModel,connectEventsDB);
        return NextResponse.json({message:response.message,createdEvent:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}