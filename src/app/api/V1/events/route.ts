import { NextRequest, NextResponse } from "next/server"
import { getAllData } from "../../../../../API/controllers/controllers";

import eventModel from "../../../../../API/models/eventModel/eventModel";

export const GET=async (request:NextRequest):Promise<any>=>{
    const response=await getAllData(eventModel);
    return NextResponse.json(response.bodyData,{status:response.status})
}

