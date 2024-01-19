"use client"

import { useState } from "react";
import { GiSkills } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";


import "../../animations/pulse.css";
import QuizPopUpContent from "./quizPopUpContent";

const QuizPopUp = () => {
    const [popUp, setPopUp] = useState(false);
    const [pageNumber,setPageNumber]=useState(1);
    const [pagesData,setPagesData]=useState({industry:"",qualification:""})
    const [labels,setLabels]=useState({industry:"",qualification:""});

    const increasePageNumber=()=>{
        const increase=()=>{
            let number=pageNumber;
            setPageNumber(++number);
        }
        if(pageNumber === 1){
            if(pagesData.industry === "") {
                setLabels({...labels, qualification:"", industry:"Choose your industry first"});
                return;
            }
            if(pagesData.qualification === ""){ 
                setLabels({...labels, industry:"", qualification:"Choose your qualification"});
                return
            }
            increase();
        }
        else increase();
    }

    const decreasePageNumber=()=>{
        let number=pageNumber;
        setPageNumber(--number);
       
    }

    return (
        <>
            <div className={`${!popUp && 'hidden'} fixed left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.8)] z-99`} onClick={() => setPopUp(false)}> </div>
            <div className={`${!popUp && 'hidden'} fixed flex flex-col items-center top-1/3 left-1/3 right-1/3 p-10 px-20 bg-white rounded-xl border-[5px] border-grad-one z-999`}>
                <QuizPopUpContent pageNumber={pageNumber} pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>
                <div className="mt-5"/>
                {pageNumber === 1 ?     <button className="bg-grad-one hover:bg-grad-two text-white px-10 py-2 rounded-md mt-5" onClick={increasePageNumber}> Next </button> : 
                    <div className="flex gap-4 mt-5">
                        <button className="bg-grad-one hover:bg-grad-two text-white px-10 py-2 rounded-md" onClick={decreasePageNumber}> Previous </button>
                        <button className="bg-grad-one hover:bg-grad-two text-white px-10 py-2 rounded-md" onClick={increasePageNumber}> Next </button>
                    </div>
                }
            </div>
            <div className="flex justify-center items-center text-white pulse-div fixed bottom-[50px] right-[50px] cursor-pointer h-[50px] w-[50px] rounded-full mainGradient" onClick={() => setPopUp(true)}>
                <GiSkills size={30} />
            </div>
            <div className="fixed bottom-[45px] right-[120px] bg-white p-5 rounded-3xl" data-aos="fade-right">
                <div className="flex items-center gap-2">
                    <h5> Take a skill assessment test </h5>
                    <FaChevronRight/>
                </div>
            </div>
        </>

    )
}
export default QuizPopUp;