"use client"

import { useState } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [loading,setLoading]=useState(1);
    const [message,setMessage]=useState("");

    const collection={
        loading:loading,
        setLoading:setLoading,
        message:message,
        setMessage:setMessage
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;