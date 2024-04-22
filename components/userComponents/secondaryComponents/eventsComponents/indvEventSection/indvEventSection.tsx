"use client"

import { useQuery } from "react-query";
import { universalIndvGet } from "../../../../systemComponents/apiConnectors/system/GET";

import Spinner from "../../../../systemComponents/modules/spinner";
import MainIndvEventSection from "./mainIndvEventSection";

type indvEventSectionProp = {
    id: string
}
const IndvEventSection = ({ id }: indvEventSectionProp) => {
    const { data, status } = useQuery(['indv-event', id], () => universalIndvGet(`/events`, id));
    
    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching event </h5>
    else if (status === "success") {
        return (
            <>
                <MainIndvEventSection title={data.data.content.title} startDate={data.data.content.startDate} endDate={data.data.content.endDate} image={data.data.content.banner} body={data.data.content.cms} googleLink={data.data.content.googleFormUrl} location={data.data.content.location}/>
            </>
        )
    }
}
export default IndvEventSection; 