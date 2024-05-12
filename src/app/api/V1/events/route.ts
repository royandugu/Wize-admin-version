import { NextRequest, NextResponse } from "next/server"
import { getAllData } from "../../../../../API/controllers/controllers";

import eventModel from "../../../../../API/models/eventModel/eventModel";
import { connectEventsDB } from "../../../../../API/connector/connector";

export const dynamic = 'force-dynamic';

export const GET=async (request:NextRequest):Promise<any>=>{
    const response=await getAllData(eventModel,connectEventsDB);
    return NextResponse.json({data:response.bodyData},{status:response.status})
}

