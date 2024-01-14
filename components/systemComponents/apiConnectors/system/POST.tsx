"use client"

import { API_URL } from "../../../../API/globals/url";

export const universalJSONPost = async (data:any,url:string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const fullUrl=`${API_URL}${url}`

    try {
        const response=await fetch(fullUrl, requestOptions);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}