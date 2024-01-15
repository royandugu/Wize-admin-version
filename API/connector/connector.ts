require("dotenv").config();

import {connect} from "mongoose";

const connectDB=()=>{
    if(process.env.MONGO_URI) return connect(process.env.MONGO_URI);
    else return false;
}

export default connectDB;