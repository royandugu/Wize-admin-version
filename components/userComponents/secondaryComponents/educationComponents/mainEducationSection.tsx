"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../systemComponents/modules/spinner";
import parse from "html-react-parser"
import StudyAbroadForm from "../../ternaryComponents/studyAbroadForm";
import "../migrationComponents/migration.css";

const MainEducationSection = () => {
    const { data, status } = useQuery("education-data", () => universalGet("/education"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h1> Error getting migration data </h1>
    else if (status === "success") {
        console.log(data);
     
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold"> Why Choose Australia for Education? </h1>
                    <img alt="student_potrait" src={data.education.whyChooseAusBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.education.whyChooseAusText)} </div>
                    <h5 className="mt-5"> Our Education Services : </h5>
                    <img alt="teaching" src={data.education.ourEduServicesBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.education.ourEduServicesText)} </div>
                    <h1 className="font-bold text-[20px] mt-5"> Study in Australia - Your Future Awaits </h1>
                    <div className="ulContainer"> {parse(data.education.futureAwaitsText)} </div>
                </div>
            </div>
        </div>
    )
    }
}
export default MainEducationSection;