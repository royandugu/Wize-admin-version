"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../../components/systemComponents/apiConnectors/system/GET";

import IeltsDisplay from "../../../../../components/userComponents/secondaryComponents/educationComponents/ieltsComponents/ieltsDisplay";
import Spinner from "../../../../../components/systemComponents/modules/spinner";

const Page=()=>{

    const {data,status}=useQuery("ielts-data",()=>universalGet("/education/ielts"));

    if(status === "loading") return <Spinner/>
    else if(status === "error") return <h5> Error fetching IELTS data </h5>
    else if(status === "success") {
        const ieltsTextSection={
            titleOne: data.ielts.titleOne,
            paraOne: data.ielts.paraOne,
            pointParas: data.ielts.pointParasOne,
            titleTwo: data.ielts.titleTwo,
            paraTwo: data.ielts.paraTwo,
            pointParas2: data.ielts.pointParasTwo,
            titleThree: data.ielts.titleThree,
            paraThree: data.ielts.paraThree    
        }
        const imageOne=data.ielts.pictureOne;
        const imageTwo=data.ielts. pictureTwo;
        
        return <IeltsDisplay isAdmin={false} textSection={ieltsTextSection} imageOne={imageOne} imageTwo={imageTwo}/>
    }
}
export default Page;