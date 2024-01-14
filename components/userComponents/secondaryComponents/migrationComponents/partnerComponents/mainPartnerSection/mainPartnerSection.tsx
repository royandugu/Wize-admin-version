"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../../systemComponents/apiConnectors/system/GET";
import parse from "html-react-parser"

import Spinner from "../../../../../systemComponents/modules/spinner";

import "../../migration.css"

const MainPartnerSection = () => {
    const { data, status } = useQuery("partner-data", () => universalGet("/migration/partner"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error returning the partner page </h5>
    else if (status === "success") {
        return (
            <div className="bg-sky-bg pt-10 pb-10 md:pl-[13.4%] md:pr-[13.4%]">
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="text-[20px] mt-5"> 1.&nbsp;SUBCLASS 309 VISA (PARTNER PROVISIONAL VISA) </h1>
                    <img alt="joyful-couple-vacation" src={data.partner.subClass309Banner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer">
                        {parse(data.partner.subClass309Text)}
                    </div>
                    <h1 className="text-[20px] mt-10"> 2.&nbsp;SUBCLASS 100 VISA (AUSTRALIA PARTNER VISA) </h1>
                    <img alt="visa_giving" src={data.partner.subClass100Banner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.partner.subClass100Text)} </div>
                    <h1 className="text-[20px] mt-10"> 3.&nbsp;FOR STUDENT DEPENDENTS: </h1>
                    <img alt="student_potrait" src={data.partner.studentDependentBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.partner.studentDependentText)} </div>
                    <h1 className="text-[20px] mt-10"> 4.&nbsp;FOR POST STUDY WORK DEPENDENTS: </h1>
                    <img alt="vacations" src={data.partner.workDependentBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.partner.workDependentText)} </div>
                </div>
            </div>
        )
    }
}
export default MainPartnerSection;