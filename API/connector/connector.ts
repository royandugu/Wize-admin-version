require("dotenv").config();

import {connect} from "mongoose";

export const connectDB=()=>{
    if(process.env.MONGO_URI) return connect(process.env.MONGO_URI);
    else return false;
}

export const connectEducationDB=()=>{
    if(process.env.MONGO_URI_EDUCATION) return connect(process.env.MONGO_URI_EDUCATION);
    else return false;
}

export const connectMigrationDB=()=>{
    if(process.env.MONGO_URI_MIGRATION) return connect(process.env.MONGO_URI_MIGRATION);
    else return false;
}

export const connectCredentialDB=()=>{
    if(process.env.MONGO_URI_CREDENTIALS) return connect(process.env.MONGO_URI_CREDENTIALS);
    else return false;
}

export const connectEventsDB=()=>{
    if(process.env.MONGO_URI_EVENTS) return connect(process.env.MONGO_URI_EVENTS);
    else return false;
}


export const connectQuizDB=()=>{
    if(process.env.MONGO_URI_QUIZES) return connect(process.env.MONGO_URI_QUIZES);
    else return false;
}
