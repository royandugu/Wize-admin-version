import { defaultApiResponse } from "../../components/systemComponents/types/types";

export let response:defaultApiResponse={message:"",bodyData:null,status:0}

export const setMessageAndResponse=(message:string,bodyData:any,status:number)=>{
    response.message=message;
    response.status=status;
    response.bodyData=bodyData;
}