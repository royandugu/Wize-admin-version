import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { createData } from "../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import userModel from "../../../../../API/models/userModel/userModel";
import { connectCredentialDB } from "../../../../../API/connector/connector";

export const POST=async (request:NextRequest):Promise<any>=>{
    try{
        const requestBody=await request.json();
        const response=await createData(requestBody,userModel, connectCredentialDB);
        return NextResponse.json({message:response.message},{status:StatusCodes.CREATED});
    }
    catch(err:any){
        return NextResponse.json({message:err.message},{status:StatusCodes.BAD_REQUEST})
    }
}  