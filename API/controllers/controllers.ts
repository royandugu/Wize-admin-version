import { StatusCodes } from "http-status-codes";
import { response, setMessageAndResponse } from "../modules/eventModules";
import connectDB from "../connector/connector";

export const updateData = async (id: string, body: object, model: any) => {
    try {
        await connectDB();
        const updatedData = await model.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true });
        setMessageAndResponse("Sucesfully updated", updatedData, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const createData = async (body: object, model: any) => {
    try {
        await connectDB();
        const createdData = await model.create(body);
        setMessageAndResponse("Sucesfully created", createdData, StatusCodes.OK);
    }
    catch (err: any) {
        console.log(err);
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const getIndvData = async (id: string, model: any) => {
    try {
        await connectDB();
        const indvData = await model.findOne({ _id: id });
        if (!indvData) setMessageAndResponse("The data does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired data", indvData, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const getAllData = async (model: any) => {
    try {
        await connectDB();
        const data = await model.find({}).sort({ updatedAt: -1 });
        setMessageAndResponse("All your data", data, StatusCodes.OK);
    }
    catch (err:any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const deleteData=async (id:string,model:any)=>{
    try{
        await connectDB();
        const data=await model.findOneAndDelete({_id:id});
        setMessageAndResponse("Data sucesfully deleted", data, StatusCodes.OK);
    }
    catch(err:any){
        setMessageAndResponse(err.message,null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

export const getOneData = async (model: any) => {
    try {
        await connectDB();
        const indvData = await model.findOne({});
        if (!indvData) setMessageAndResponse("The data does not exist", null, StatusCodes.NOT_FOUND);
        else setMessageAndResponse("Your desired data", indvData, StatusCodes.OK);
    }
    catch (err: any) {
        setMessageAndResponse(err.message, null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    return response;
}

