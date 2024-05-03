import { MdOutlineTitle } from "react-icons/md";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { FaRegFileImage } from "react-icons/fa";
import { cmsType } from "../../../../systemComponents/types/types";
import { SetStateAction, Dispatch } from "react";

import "./cmsDropDown.css";

const CmsDropDown = ({ isOpen, setContainer }: { isOpen: boolean, setContainer: Dispatch<SetStateAction<Array<cmsType>>> }) => {


    const staticContent = [
        {
            text: "Title",
            icon: <MdOutlineTitle />
        },
        {
            text: "Subtitle",
            icon: <MdOutlineSubtitles />
        },
        {
            text: "Description box",
            icon: <MdDescription />
        },
        {
            text: "Image",
            icon: <FaRegFileImage />
        }
    ]

    return (
        <div className={`cmsDropDown bg-white ${!isOpen && 'closed'}`}>
            {staticContent.map((cnt, indx: number) => (
                <div className="flex gap-5 px-5 py-3 items-center opacity-40 hover:opacity-100 cursor-pointer" key={indx} onClick={() => {
                    cnt.text === "Title" ? setContainer(prevContainer => [...prevContainer, {title: " "}]):cnt.text === "Title" ? setContainer(prevContainer => [...prevContainer, {title: ""}]):cnt.text === "Subtitle" ? setContainer(prevContainer => [...prevContainer, {subtitle: " "}]):cnt.text === "Description box" ? setContainer(prevContainer => [...prevContainer, {description: " "}]):setContainer(prevContainer => [...prevContainer, {image: ""}])
                }}>
                    {cnt.icon}
                    {cnt.text}

                </div>
            ))}
        </div>
    )
}
export default CmsDropDown;