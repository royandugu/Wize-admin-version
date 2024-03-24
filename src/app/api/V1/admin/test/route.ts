import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes";

import { createData, getOneData, updateData } from "../../../../../../API/controllers/controllers";

import cmsModel from "../../../../../../API/models/cmsModel/cmsModel";

export const dynamic = 'force-dynamic';

export const GET=async (request:NextRequest):Promise<any>=>{
    try{ 
        const response=await getOneData(cmsModel);
        return NextResponse.json({message:response.message,data:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}

export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const jsonReq=await request.json();
        const response=await createData(jsonReq,cmsModel);
        return NextResponse.json({message:response.message,data:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


