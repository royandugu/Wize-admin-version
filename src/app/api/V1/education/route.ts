import { NextRequest, NextResponse } from "next/server"
import { getOneData } from "../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import educationModel from "../../../../../API/models/educationModel/educationModel";
export const dynamic = 'force-dynamic';
export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(educationModel);
        return NextResponse.json({message:response.message,education:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}