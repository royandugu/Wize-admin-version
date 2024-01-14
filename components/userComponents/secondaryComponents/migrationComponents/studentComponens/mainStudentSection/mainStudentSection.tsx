"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../../systemComponents/apiConnectors/system/GET";

import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";
import Spinner from "../../../../../systemComponents/modules/spinner";
import parse from "html-react-parser"

import "../../migration.css";

const MainStudentSection = () => {
    const { data, status } = useQuery("student-data", () => universalGet("/migration/student"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching student page </h5>
    else if (status === "success") {
        return (
            <div className="bg-sky-bg pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-5">
                    <StudyAbroadForm />
                    <div className="pl-10 pr-10 md:pr-20">
                        <h5> {data.student.initialParagraph} </h5>
                        <img alt="cheerful-attractive-young-woman" src={data.student.studentBanner}className="w-full mt-5 mb-5" />
                        <h1 className="font-bold text-[20px] mb-5"> Documents Required for a Student Visa </h1>
                        <div className="mb-10 ulContainer">{parse(data.student.documentRequirements)}</div>
                        <h1 className="font-bold text-[20px] mb-5"> Our Services: </h1>
                        <div className="mb-10 ulContainer">{parse(data.student.ourServices)} </div>
                        <h1 className="font-bold text-[20px] mt-5"> Disclaimer: </h1>
                        <div className="mt-2"> {parse(data.student.disclaimer)} </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainStudentSection;