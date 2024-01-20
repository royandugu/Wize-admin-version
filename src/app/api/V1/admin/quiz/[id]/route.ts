import { NextRequest, NextResponse } from "next/server"
import { getIndvData } from "../../../../../../../API/controllers/controllers";
import { StatusCodes } from "http-status-codes";

import quizModel from "../../../../../../../API/models/quizModel/quizModel";

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest, { params }: { params: { id: any } }): Promise<any> => {
    try {
        const { id } = params;
        const response = await getIndvData(id, quizModel);
        return NextResponse.json(response.bodyData, { status: response.status })
    }
    catch (err) {
        return NextResponse.json({ err }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }
}
