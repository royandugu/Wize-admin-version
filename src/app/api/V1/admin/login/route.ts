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
        if(response.status === 200){
            const result=compareSync(password,response.bodyData.password);
            return NextResponse.json({loginStatus:result, bodyData:response.bodyData},{status:response.status})
        }
        else return NextResponse.json({message:"Your account does not exist"},{status:StatusCodes.NOT_FOUND});
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({message:err.message},{status:StatusCodes.INTERNAL_SERVER_ERROR});
    }
}
 

