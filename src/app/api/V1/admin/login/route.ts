import { NextRequest, NextResponse } from "next/server"
import { getOneData } from "../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";
import { compareSync } from "bcryptjs";
import { connectCredentialDB } from "../../../../../../API/connector/connector";

import adminModel from "../../../../../../API/models/adminModel/adminModel";

export const dynamic = 'force-dynamic';

export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const {password}=await request.json();
        const response=await getOneData(adminModel, connectCredentialDB);
        const result=compareSync(password,response.bodyData.password);
        return NextResponse.json({loginStatus:result, bodyData:response.bodyData},{status:response.status})
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}


