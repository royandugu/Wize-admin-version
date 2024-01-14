"use client"

import { useState } from "react";
import { SiSemanticscholar } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { GoNote } from "react-icons/go";
import { Circle } from "rc-progress";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";

import DotAnimations from "../../../../systemComponents/animations/dotAnimations";

import "./statsSection.css";

const StatsSection = ({ isAdmin }: { isAdmin?: boolean }) => {
    const [personalizedGuidanceTitle, setPersonalizedGuidanceTitle] = useState("Personalized Guidance");
    const [personalizedGuidanceBody, setPersonalizedGuidanceBody] = useState("In the ever-evolving world of consultancy, achieving success requires more than just knowledge; it demands a strategic and personalized approach.");
    const [scholarshipGuidanceTitle, setScholarshipGuidanceTitle] = useState("Scholarship Guidance ");
    const [scholarshipGuidanceBody, setScholarshipGuidanceBody] = useState("In the ever-evolving world of consultancy, achieving success requires more than just knowledge; it demands a strategic and personalized approach.");
    const [streamlinedSupportTitle, setStreamlinedSupportTitle] = useState("Streamlined Support");
    const [streamlinedSupportBody, setStreamlinedSupportBody] = useState("In the ever-evolving world of consultancy, achieving success requires more than just knowledge; it demands a strategic and personalized approach.");

    const [statsPartOne, setStatsPartOne] = useState("FIND A NEW WAY FOR GROW");
    const [statsPartTwo, setStatsPartTwo] = useState("WIZE WIZE WIZE WIZE");
    const [statsPartThree, setStatsPartThree] = useState("AAAAAAAAAAAAAAAA");

    const [numberOne, setNumberOne] = useState("9999");
    const [numberTwo, setNumberTwo] = useState("9999");
    const [numberThree, setNumberThree] = useState("9999");
    const [numberFour, setNumberFour] = useState("9999");

    const [numberLabelOne, setNumberLabelOne] = useState("Happy clients");
    const [numberLabelTwo, setNumberLabelTwo] = useState("Happy clients");
    const [numberLabelThree, setNumberLabelThree] = useState("Happy clients");
    const [numberLabelFour, setNumberLabelFour] = useState("Happy clients");

    type CardTitleContent = {
        titleOne: string,
        titleTwo: string,
        titleThree: string,
        titleFour: string
    }

    type CardBodyContent = {
        bodyOne: string,
        bodyTwo: string,
        bodyThree: string,
        bodyFour: string
    }

    type ServicesSection = {
        title:string,
        body:string
    }

    const [cardTitleContent, setCardTitleContent] = useState<CardTitleContent>({ titleOne: "AAAAAAAAAAAAAAA", titleTwo: "AAAAAAAAAAAAAAA", titleThree: "AAAAAAAAAAAAAAA", titleFour: "AAAAAAAAAAAAAAA" })
    const [cardBodyContent, setCardBodyContent] = useState<CardBodyContent>({ bodyOne: "AAAAAAAAAAAAAAA", bodyTwo: "AAAAAAAAAAAAAAA", bodyThree: "AAAAAAAAAAAAAAA", bodyFour: "AAAAAAAAAAAAAAA" });
    const [servicesSection,setServicesSection]=useState<ServicesSection>({title:"We Provide Services To Grow Your Buisness", body:"AAAAAAAAAAAAAAAAAA"});

    return (
        <div className="statsSection bg-sky-bg mb-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:pl-20 sm:pr-20">
                <div className={`bg-white shadow-lg w-[90%] md:w-80 mt-[-130px] statCard pb-3`} data-aos="fade-up">
                    <img src="/images/Teaching.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <GoNote className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            {isAdmin ? (<input type="text" className=" pl-2 border border-[rgb(200,200,200)] outline-none" value={personalizedGuidanceTitle} onChange={(e) => setPersonalizedGuidanceTitle(e.target.value)} />) : (<h1 className="text-[20px] title--statsSection"> {personalizedGuidanceTitle} </h1>)}
                            {isAdmin ? <textarea className="mt-3 pl-2 border border-[rgb(200,200,200)] outline-none" value={personalizedGuidanceBody} onChange={(e) => setPersonalizedGuidanceBody(e.target.value)} /> : (<p className="mt-2 text-sm para--statsSection">
                                {personalizedGuidanceBody}
                            </p>)}
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-[90%] md:w-80 md:mt-[-130px] statCard pb-3`} data-aos="fade-up">
                    <img src="/images/Scholarship.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <SiSemanticscholar className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            {isAdmin ? (<input type="text" className=" pl-2 border border-[rgb(200,200,200)] outline-none" value={scholarshipGuidanceTitle} onChange={(e) => setScholarshipGuidanceTitle(e.target.value)} />) : (<h1 className="text-[20px] title--statsSection"> {scholarshipGuidanceTitle} </h1>)}
                            {isAdmin ? <textarea className="mt-3 pl-2 border border-[rgb(200,200,200)] outline-none" value={scholarshipGuidanceBody} onChange={(e) => setScholarshipGuidanceBody(e.target.value)} /> : (<p className="mt-2 text-sm para--statsSection">
                                {scholarshipGuidanceBody}
                            </p>)}
                        </div>
                    </div>
                </div>

                <div className={`bg-white shadow-lg w-[90%] md:w-80 pb-3 md:mt-[-130px] statCard`} data-aos="fade-up">
                    <img src="/images/Helping.jpg" alt="Teaching" />
                    <div className="flex gap-5 p-5 pr-2 items-center text-black">
                        <div>
                            <TfiCup className="icon text-[40px]" />
                        </div>
                        <div className="text-left pt-5 pb-10 md:p-0">
                            {isAdmin ? (<input type="text" className=" pl-2 border border-[rgb(200,200,200)] outline-none" value={streamlinedSupportTitle} onChange={(e) => setStreamlinedSupportTitle(e.target.value)} />) : (<h1 className="text-[20px] title--statsSection"> {streamlinedSupportTitle} </h1>)}
                            {isAdmin ? <textarea className="mt-3 pl-2 border border-[rgb(200,200,200)] outline-none" value={streamlinedSupportBody} onChange={(e) => setStreamlinedSupportBody(e.target.value)} /> : (<p className="mt-2 text-sm para--statsSection">
                                {streamlinedSupportBody}
                            </p>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pl-20 pr-20">
                <h5 className="text-center mt-6"> <span className="text-light-black">Stop wasting time and money on technology.</span> <span className="underline">Explore our company</span> </h5>
            </div>

            {/* Find a new way to grow */}
            <div className="flex flex-col md:flex-row justify-center md:gap-10 mt-20 md:mt-40">
                <div className="text-center md:text-left" data-aos="fade-right">

                    {isAdmin ? (<><input type="text" className="text-[13px] pl-2 border border-[rgb(200,200,200)] outline-none" value={statsPartOne} onChange={(e) => setStatsPartOne(e.target.value)} /><br /></>) : <h5 className="text-[13px]"> \\ {statsPartOne} \\</h5>}

                    {isAdmin ? (<><input type="text" className="text-[25px] pl-2 border border-[rgb(200,200,200)] outline-none mt-2" value={statsPartTwo} onChange={(e) => setStatsPartTwo(e.target.value)} /><br /></>) : <h1 className="text-[25px]"> {statsPartTwo} </h1>}

                    {isAdmin ? (<><input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={statsPartThree} onChange={(e) => setStatsPartThree(e.target.value)} /></>) : <p className="text-light-black"> {statsPartThree} </p>}

                    <div className="flex gap-5 justify-center pl-24 pr-24 md:pl-0 md:pr-0 md:justify-start">
                        <div className="mainGradient relative text-white top-10 p-6 w-full rounded-md md:h-[120px] md:w-[120px]">
                            <Circle percent={90} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                        <div className="mainGradient relative text-white top-20 p-6 rounded-md w-full mdh-[120px] md:w-[120px]">
                            <Circle percent={30} strokeWidth={10} strokeColor="#FFFFFF" />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/5 relative z-10" data-aos="fade-left">
                    <div className="md:absolute top-0 z-10 pl-28 pr-28 pt-48 md:pl-0 md:pr-0 md:pt-0">
                        <img src="/images/Helping_Cut.jpg" alt="Teaching" className="w-full h-auto" />
                    </div>
                    <div className="z-0 absolute top-[120px] md:top-[-50px] right-[30px] md:right-[-50px]">
                        <DotAnimations />
                    </div>
                </div>
            </div>

            {/* Counter */}
            <div className="text-center md:pt-0 md:mt-[300px] relative">
                <h5 className="text-[13px]"> \\ COUNTER \\</h5>
                <h1 className="text-[25px] text-black"> What we have achieve </h1>
                <div className="pl-20 md:pl-0 pr-20 md:pr-0">
                    <div className="bg-white md:absolute mt-5 md:mt-0 md:top-[80px] pt-7 pb-7 rounded-md z-10 left-[20%] right-[20%]  shadow-lg">
                        <div className="clientRecords flex flex-col md:flex-row justify-evenly items-center">
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberOne} onChange={(e) => setNumberOne(e.target.value)} /> : <h5> {numberOne}+ </h5>}
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberLabelOne} onChange={(e) => setNumberLabelOne(e.target.value)} /> : <p className="text-light-black"> {numberLabelOne} </p>}
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberTwo} onChange={(e) => setNumberTwo(e.target.value)} /> : <h5> {numberTwo}+ </h5>}
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberLabelTwo} onChange={(e) => setNumberLabelTwo(e.target.value)} /> : <p className="text-light-black"> {numberLabelTwo} </p>}
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="icon" />
                                <div className="ml-1">
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberThree} onChange={(e) => setNumberThree(e.target.value)} /> : <h5> {numberThree}+ </h5>}
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberLabelThree} onChange={(e) => setNumberLabelThree(e.target.value)} /> : <p className="text-light-black"> {numberLabelThree} </p>}
                                </div>
                            </div>
                            <div>
                                <AiOutlineUsergroupAdd className="text-[60px] text-grad-two icon" />
                                <div className="ml-1">
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberFour} onChange={(e) => setNumberFour(e.target.value)} /> : <h5> {numberFour}+ </h5>}
                                    {isAdmin ? <input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={numberLabelFour} onChange={(e) => setNumberLabelFour(e.target.value)} /> : <p className="text-light-black"> {numberLabelFour} </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="z-0 h-[120px] hidden md:block absolute rounded-md mainGradient top-[120px] left-[22%] right-[18%]" />
            </div>

            <div className="flex flex-col md:flex-row mt-10 md:mt-72 pb-24">
                <div className="md:w-1/2 pl-[20%] pr-[20%] md:pr-10" data-aos="fade-left">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <div className="bg-white rounded-md p-5 mr-5 shadow-lg">
                                <div className="iconContainer--statsSection md:w-[20%]">
                                    <PiUsersThreeBold />
                                </div>
                                <div className={`pt-5 pr-10 overflow-hidden overflow-ellipsis flex-none ${isAdmin ? 'overflow-scroll' : 'overflow-ellipsis'}`}>
                                    {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardTitleContent.titleOne} onChange={(e) => setCardTitleContent({ ...cardTitleContent, titleOne: e.target.value })} /> : <h1 className="text-[25px] text-black"> {cardTitleContent.titleOne} </h1>}
                                    {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardBodyContent.bodyOne} onChange={(e) => setCardBodyContent({ ...cardBodyContent, bodyOne: e.target.value })} /> : <p className="text-light-black">{cardBodyContent.bodyOne} </p>}
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white rounded-md p-5 mt-5 shadow-lg">
                                <div className="iconContainer--statsSection md:w-[20%]">
                                    <PiUsersThreeBold />
                                </div>
                                <div className={`pt-5 pr-10 overflow-hidden overflow-ellipsis ${isAdmin ? 'overflow-scroll' : 'overflow-ellipsis'} self-start`}>
                                    {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardTitleContent.titleTwo} onChange={(e) => setCardTitleContent({ ...cardTitleContent, titleTwo: e.target.value })} /> : <h1 className="text-[25px] text-black"> {cardTitleContent.titleTwo} </h1>}
                                    {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardBodyContent.bodyTwo} onChange={(e) => setCardBodyContent({ ...cardBodyContent, bodyTwo: e.target.value })} /> : <p className="text-light-black">{cardBodyContent.bodyTwo} </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-10 pr-[50px]">
                        <div className="bg-white rounded-md p-5 mr-5 shadow-lg md:w-1/2">
                            <div className="iconContainer--statsSection md:w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className={`pt-5 overflow-hidden ${isAdmin ? 'overflow-scroll' : 'overflow-ellipsis'} `}>
                                {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardTitleContent.titleThree} onChange={(e) => setCardTitleContent({ ...cardTitleContent, titleThree: e.target.value })} /> : <h1 className="text-[25px] text-black"> {cardTitleContent.titleThree} </h1>}
                                {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardBodyContent.bodyThree} onChange={(e) => setCardBodyContent({ ...cardBodyContent, bodyThree: e.target.value })} /> : <p className="text-light-black">{cardBodyContent.bodyThree} </p>}
                            </div>
                        </div>
                        <div className="bg-white rounded-md p-5 mt-5 shadow-lg md:w-1/2">
                            <div className="iconContainer--statsSection md:w-[20%]">
                                <PiUsersThreeBold />
                            </div>
                            <div className="pt-5 pr-10 overflow-hidden overflow-ellipsis">
                                {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardTitleContent.titleFour} onChange={(e) => setCardTitleContent({ ...cardTitleContent, titleFour: e.target.value })} /> : <h1 className="text-[25px] text-black"> {cardTitleContent.titleFour} </h1>}
                                {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={cardBodyContent.bodyFour} onChange={(e) => setCardBodyContent({ ...cardBodyContent, bodyFour: e.target.value })} /> : <p className="text-light-black">{cardBodyContent.bodyFour} </p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 pt-14 text-center pl-[10%] pr-[10%] md:pt-0 md:text-left md:pl-0 md:pr-0" data-aos="fade-right">
                    <h5 className="text-[13px]"> \\ SERVICES \\</h5>
                    {isAdmin ? <><input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={servicesSection.title} onChange={(e) => setServicesSection({...servicesSection,title:e.target.value})} /><br/></> :<h1 className="text-[25px] text-black"> {servicesSection.title} </h1>}
                    {isAdmin ? <textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={servicesSection.body} onChange={(e) => setServicesSection({...servicesSection, body:e.target.value})} /> : <p className="text-light-black mt-5"> {servicesSection.body} </p>}
                </div>

            </div>

        </div>
    )
}
export default StatsSection;