import { NextRequest, NextResponse } from "next/server"
import { getAllEvents } from "../../../../../API/controllers/system/systemEventController"

export const GET=async (request:NextRequest):Promise<any>=>{
    const response=await getAllEvents();
    return NextResponse.json(response.bodyData,{status:response.status})
}

