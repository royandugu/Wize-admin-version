"use client"

import { useState, useEffect } from "react";
import { GiSkills } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import "../../animations/pulse.css";
import QuizPopUpContent from "./quizPopUpContent";
import context from "../../context/context";
import { universalJSONPost } from "../../apiConnectors/system/POST";
import Spinner from "../spinner";
import { quizProp } from "../../types/types";
import { uploadFile } from "../../microFunctions/uploadFile";
import { useEdgeStore } from "@/lib/edgestore";

const QuizPopUp = () => {
    const [popUp, setPopUp] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [pagesData, setPagesData] = useState<quizProp>({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "", qualificationText:"", resumeLocation:"" })
    const [labels, setLabels] = useState<quizProp>({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
    const [resume,setResume]=useState<File>();

    const contextContainer = useContext(context);

    const {edgestore}=useEdgeStore();

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    const increasePageNumber = async () => {
        const increase = () => {
            let number = pageNumber;
            setPageNumber(++number);
        }
        if (pageNumber === 1) {
            if (pagesData.industry === "") {
                setLabels({ industry: "Choose you industry first", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: ""});
                return;
            }
            if (pagesData.qualification === "") {
                setLabels({ industry: "", qualification: "Please choose your qualification", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: ""});
                return
            }
            increase();
        }
        else if (pageNumber === 2) {
            if (pagesData.yearExp === "") {
                setLabels({ industry: "", qualification: "", yearExp: "Please select your year experience", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            if (pagesData.placeExp === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "Please select your place experience", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            increase();
        }
        else if (pageNumber === 3) {
            if (pagesData.state === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "Please select the state work experience", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            increase();
        }
        else if (pageNumber === 4) {
            if (pagesData.formalQualifications === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "Please select your formal qualification", firstName: "", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            increase();
        }
        else if (pageNumber === 5) {
            if (pagesData.firstName === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "First name is necessary", lastName: "", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            else if (pagesData.lastName === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "Last name is necessary", contactNumber: "", email: "", questionsForUs: "" });
                return;
            }
            else if (pagesData.contactNumber === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "Contact number is necessary", email: "", questionsForUs: "" });
                return;
            }
            else if (pagesData.email === "") {
                setLabels({ industry: "", qualification: "", yearExp: "", placeExp: "", state: "", formalQualifications: "", firstName: "", lastName: "", contactNumber: "", email: "Email is necessary", questionsForUs: "" });
                return;
            }
            contextContainer.setLoading(0);
            
            const body:quizProp={industry: pagesData.industry, qualification:pagesData.qualification, yearExp:pagesData.yearExp, placeExp:pagesData.placeExp,state:pagesData.state, formalQualifications:pagesData.formalQualifications, firstName:pagesData.firstName, lastName:pagesData.lastName, contactNumber:pagesData.contactNumber,email:pagesData.email}

            if(resume){
                const {data,status}=await uploadFile(resume,edgestore);
                if(status){
                    body.resumeLocation=data;
                }
                else{
                    contextContainer.setLoading(3);
                    return;
                }
            }
            

            if(pagesData.qualificationText!=="") body.qualificationText=pagesData.qualificationText;
            if(pagesData.questionsForUs!=="") body.questionsForUs=pagesData.questionsForUs;

            const response = await universalJSONPost(body, "/quiz");
            
            if (response?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);
        }
    }

    const decreasePageNumber = () => {
        let number = pageNumber;
        setPageNumber(--number);
    }

    return (
        <>
            <div className={`${!popUp && 'hidden'} fixed left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.8)] z-99`} onClick={() => setPopUp(false)}> </div>
            <div className={`${!popUp && 'hidden'} fixed flex flex-col items-center top-[100px] sm:top-1/4 left-[20px] right-[20px] md:left-[50px] md:right-[50px]  lg:left-1/4 lg:right-1/4 lg+196:left-1/3 lg+196:right-1/3 p-5 md:p-10 lg:px-20 bg-white rounded-xl border-[5px] border-grad-one z-999`}>
                {contextContainer.loading === 0 ? <Spinner button={true}/> : contextContainer.loading === 2 ? <h1 className="text-green-500"> Sucesfully sent your data </h1> : contextContainer.loading === 3 ? <h1 className="text-red-500"> Error sending data </h1> : <>
                    <QuizPopUpContent pageNumber={pageNumber} pagesData={pagesData} setPagesData={setPagesData} labels={labels} resume={resume} setResume={setResume}/>
                    <div className="mt-5" />

                    <div className="flex gap-4 mt-5">
                        {pageNumber !== 1 && pageNumber !== 5 && <button className="bg-grad-one hover:bg-grad-two text-white px-10 py-2 rounded-md" onClick={decreasePageNumber}> Previous </button>}
                        <button className="bg-grad-one hover:bg-grad-two text-white px-10 py-2 rounded-md" onClick={increasePageNumber}> {pageNumber === 5 ? 'Send your data' : 'Next'} </button>
                    </div>
                </>
                }

            </div>
            <div className="flex justify-center items-center text-white pulse-div fixed bottom-[50px] right-[50px] cursor-pointer h-[50px] w-[50px] rounded-full mainGradient" onClick={() => setPopUp(true)}>
                <GiSkills size={30} />
            </div>
            <div className="fixed bottom-[45px] right-[120px] bg-white p-5 rounded-3xl" data-aos="fade-right">
                <div className="flex items-center gap-2">
                    <h5> Take a skill assessment test </h5>
                    <FaChevronRight />
                </div>
            </div>
        </>

    )
}
export default QuizPopUp;