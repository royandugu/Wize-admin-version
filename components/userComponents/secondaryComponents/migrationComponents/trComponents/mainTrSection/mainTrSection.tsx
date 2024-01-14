"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../../systemComponents/apiConnectors/system/GET";

import Spinner from "../../../../../systemComponents/modules/spinner";
import parse from "html-react-parser"

import "../../migration.css"

const MainTrSection = () => {
    const { data, status } = useQuery("tr-data", () => universalGet("/migration/tr"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching tr page </h5>
    else if (status === "success") {
        return (
            <div className="bg-sky-bg pt-10 pb-10 md:pl-[13.4%] md:pr-[13.4%]">
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold text-[20px] mt-5 mb-5"> Basic Eligibility</h1>
                    <div className="ulContainer"> {parse(data.tr.basicEligibility)} </div>

                    <h1 className="font-bold text-[20px] mt-10">Application Process:</h1>
                    <img alt="couple" src={data.tr.applicationProcessBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer">{parse(data.tr.applicationProcess)}</div>
                    <h1 className="font-bold text-[20px] mt-10">Our Services:</h1>
                    <img alt="visa" src={data.tr.ourServicesBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer">{parse(data.tr.ourServices)}</div>
                </div>
            </div>
        )
    }
}
export default MainTrSection;