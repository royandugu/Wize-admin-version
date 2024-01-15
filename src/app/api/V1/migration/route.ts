import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes";
import { getOneData } from "../../../../../API/controllers/controllers";

import migrationModel from "../../../../../API/models/migration/migrationModel";
export const dynamic = 'force-dynamic';
export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(migrationModel);
        return NextResponse.json({message:response.message,migration:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}