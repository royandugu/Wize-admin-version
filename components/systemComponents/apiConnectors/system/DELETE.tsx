import { API_URL } from "../../../../API/globals/url";

export const universalDelete=async (url:string,id:string)=>{
    const deleteResponse=await fetch(`${API_URL}${url}/${id}`,{method:"DELETE"});
    return deleteResponse;
} 