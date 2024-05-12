import { getAllData } from "../../../../../../API/controllers/controllers";

import { NextRequest,NextResponse } from "next/server";

import quizModel from "../../../../../../API/models/quizModel/quizModel";
import { connectQuizDB } from "../../../../../../API/connector/connector";

export const dynamic = 'force-dynamic';

export const GET=async (request:NextRequest):Promise<any>=>{
    const response=await getAllData(quizModel,connectQuizDB);
    return NextResponse.json(response.bodyData,{status:response.status})
}
