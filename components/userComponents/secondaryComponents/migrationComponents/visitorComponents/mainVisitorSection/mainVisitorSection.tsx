"use client"


import { useQuery } from "react-query";
import { universalGet } from "../../../../../systemComponents/apiConnectors/system/GET";

import Spinner from "../../../../../systemComponents/modules/spinner";
import parse from "html-react-parser"

import "../../migration.css"

const MainVisitorSection = () => {
    const { data, status } = useQuery("visitor-data", () => universalGet("/migration/visitor"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching tr page </h5>
    else if (status === "success") {

        return (
            <div className="bg-sky-bg pt-10 pb-10 md:pl-[13.4%] md:pr-[13.4%]">
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold text-[20px]"> Why Choose Australia for a visit ?</h1>
                    <div className="mt-2 ulContainer"> {parse(data.visitor.whyChooseAustralia)} </div>

                    <h5 className="font-bold mt-5 text-[20px]"> Tourist Stream : </h5>
                    <img alt="Young-girl" src={data.visitor.touristStreamBanner} className="w-full mt-2 mb-5" />
                   
                    <div className="mt-2 ulContainer"> {parse(data.visitor.touristStreamText)} </div>
                    
                    <h5 className="font-bold mt-5 text-[20px]"> Buisness Visitor Stream : </h5>
                    <img alt="two-confident-business-man" src={data.visitor.buisnessVisitorBanner} className="w-full mt-2 mb-5" />
                    <div> {parse(data.visitor.buisnessVisitorText)} </div>
                    <h5 className="font-bold mt-5 text-[20px]"> Sponsored Family Stream : </h5>
                    <img alt="happy-family-couple" src={data.visitor.familyBanner} className="w-full mt-2 mb-5" />
                    <div className="ulContainer"> {parse(data.visitor.familyText)} </div>
                    <h1 className="font-bold text-[20px] mt-10"> Our Services:</h1>
                    <div className="ulContainer"> {parse(data.visitor.ourServices)} </div>
                </div>
            </div>
        )
    }
}
export default MainVisitorSection;