import { NextRequest, NextResponse } from "next/server"
import { getOneData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import { ieltsModel } from "../../../../../../API/models/commonModel/commonModel";

export const GET=async (request:NextRequest):Promise<any>=>{
    try{
        const response=await getOneData(ieltsModel);
        return NextResponse.json({message:response.message,ielts:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}