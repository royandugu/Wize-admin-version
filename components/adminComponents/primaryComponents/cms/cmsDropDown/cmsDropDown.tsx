import { MdOutlineTitle } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { FaRegFileImage } from "react-icons/fa";
import { cmsType } from "../../../../systemComponents/types/types";

import "./cmsDropDown.css";
import { SetStateAction, Dispatch } from "react";

const CmsDropDown=({isOpen, setIsOpen, setContainer}:{isOpen:boolean, setIsOpen:Dispatch<SetStateAction<boolean>> ,setContainer:Dispatch<SetStateAction<Array<string>>>})=>{
    

    const staticContent=[
        {
           text:"Title",
           icon:<MdOutlineTitle/>
        },
        {
            text:"Subtitle",
            icon:<MdOutlineSubtitles/>
         },
         {
            text:"Description box",
            icon:<MdDescription/>
         },
         {
            text:"Image",
            icon:<FaRegFileImage/>
         }
    ]

    return(
        <div className={`cmsDropDown bg-white ${!isOpen && 'closed'}`}>
            {staticContent.map((cnt,indx:number)=>(
                <div className="flex gap-5 px-5 py-3 items-center opacity-40 hover:opacity-100 cursor-pointer" key={indx} onClick={()=>{
                    setContainer(prevContainer => [...prevContainer, cnt.text])
                    setIsOpen(false)
                }}>
                    {cnt.icon}
                    {cnt.text}
                     
                </div>
            ))}
        </div>
    )
}
export default CmsDropDown;