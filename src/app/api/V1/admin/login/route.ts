import { NextRequest,NextResponse } from "next/server";
// import { loginAdmin } from "../../../../../../API/controllers/admin/registerAndLogin";
// import { StatusCodes } from "http-status-codes";

export const POST=async (request:NextRequest):Promise<any>=>{
    return NextResponse.json({message:"Hello"},{status:200})
}