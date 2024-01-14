"use client"

import { useState } from "react";
import {BiPhone} from "react-icons/bi";

const OptionSection=({isAdmin}:{isAdmin?:boolean})=>{
    type options={
        title:string,
        para:string
    }
    const [optionsSection,setOptionsSection]=useState<options>({title:"Explore your options", para:" Explore Your Options SomethingSomething aaaaaaaaaaaaaaaaaa"});

    return(
        <div className="bg-black text-grad-one pt-10">
            <div className="flex">
                <div className="md:w-1/2 pl-[18%]" data-aos="fade-right">
                    <h5 className="text-[13px]">// FEATURES //</h5>
                    {isAdmin ? <><input type="text" className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={optionsSection.title} onChange={(e) => setOptionsSection({...optionsSection,title:e.target.value})} /><br/></> : <h1 className="text-[25px] text-white mt-3 mb-3"> {optionsSection.title} </h1>}
                    {isAdmin ? <><textarea className=" pl-2 border text-light-black border-[rgb(200,200,200)] outline-none mt-2" value={optionsSection.para} onChange={(e) => setOptionsSection({...optionsSection,para:e.target.value})} /><br/></> : <p className="text-white"> {optionsSection.para} </p>}
 
                    <div className="flex mt-5 mb-10 text-white items-center gap-5">
                        <div className="rounded-md p-3 mainGradient">
                            <BiPhone className="text-[30px]"/>
                        </div>
                        <h5 className={isAdmin?'text-[20px]':'text-[30px]'}> {isAdmin? 'Your number will be here' :'9899889898'}  </h5>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 relative" data-aos="fade-up">
                    <img alt="CEO" src="/images/CEO.png" className="mt-[-130px]"/>
                </div> 
            </div>
            
        </div>
    )
}
export default OptionSection;