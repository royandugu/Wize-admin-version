"use client"

import { useQuery } from "react-query";
import { universalIndvGet } from "../../../../systemComponents/apiConnectors/system/GET";
import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";

import Spinner from "../../../../systemComponents/modules/spinner";
import MainIndvEventSection from "./mainIndvEventSection";

type indvEventSectionProp={
    id:string
}
const IndvEventSection=({id}:indvEventSectionProp)=>{
    const {data,status}=useQuery(['indv-event', id],()=>universalIndvGet(`/events`,id));
    
    if(status === "loading") return <Spinner/>
    else if(status === "error") return <h5> Error fetching event </h5>
    return(
        <>
            <SecondaryTitleDesign changeBg={true} page={data.title} menu={true}/>
            <MainIndvEventSection startDate={data.startDate} endDate={data.endDate} image={data.banner} body={data.body}/>
        </>
    )
}
export default IndvEventSection; 