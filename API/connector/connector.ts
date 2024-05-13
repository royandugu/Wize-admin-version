require("dotenv").config();

import {createConnection} from "mongoose";

export const connectDB= async ()=>{
    if(process.env.MONGO_URI) return await createConnection(process.env.MONGO_URI).asPromise();
    else return false;
}

export const connectEducationDB=async ()=>{
    if(process.env.MONGO_URI_EDUCATION) return await createConnection(process.env.MONGO_URI_EDUCATION).asPromise();
    else return false;
}

export const connectMigrationDB=async ()=>{
    if(process.env.MONGO_URI_MIGRATION) return await createConnection(process.env.MONGO_URI_MIGRATION).asPromise();
    else return false;
}

export const connectCredentialDB=async ()=>{
    if(process.env.MONGO_URI_CREDENTIALS) return await createConnection(process.env.MONGO_URI_CREDENTIALS).asPromise();
    else return false;
}

export const connectEventsDB=async ()=>{
    if(process.env.MONGO_URI_EVENTS) return await createConnection(process.env.MONGO_URI_EVENTS).asPromise();
    else return false;
}


export const connectQuizDB=async ()=>{
    if(process.env.MONGO_URI_QUIZES) return await createConnection(process.env.MONGO_URI_QUIZES).asPromise();
    else return false;
}
