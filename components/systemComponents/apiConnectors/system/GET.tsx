import { API_URL } from "../../../../API/globals/url";

export const universalGet=async (url:string)=>{
    const response=await fetch(`${API_URL}${url}`);
    return response.json();
}

export const universalIndvGet=async (url:string, id:string|undefined)=>{
    console.log(`${API_URL}${url}/${id}`)
    const response=await fetch(`${API_URL}${url}/${id}`)
    return response.json();
}
 