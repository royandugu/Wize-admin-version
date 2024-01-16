"use client"

import { useState } from "react";
import { GiSkills } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

import "../animations/pulse.css";

const QuizPopUp = () => {
    const [popUp, setPopUp] = useState(false);

    return (
        <>
            <div className={`${!popUp && 'hidden'} fixed left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.4)] z-99`} onClick={() => setPopUp(false)}> </div>
            <div className={`${!popUp && 'hidden'} fixed top-1/3 left-1/3 right-1/3 p-10 bg-white rounded-xl border border-grad-one z-999`}>
                <h5> This is skill assessment pop up </h5>
            </div>
            <div className="flex justify-center items-center text-white pulse-div fixed bottom-[50px] right-[50px] cursor-pointer h-[50px] w-[50px] rounded-full mainGradient" onClick={() => setPopUp(true)}>
                <GiSkills size={30} />
            </div>
            <div className="fixed bottom-[45px] right-[120px] bg-white p-5 rounded-3xl" data-aos="fade-left">
                <div className="flex items-center gap-2">
                    <h5> Take a skill assessment test </h5>
                    <FaChevronRight/>
                </div>
            </div>
        </>

    )
}
export default QuizPopUp;