import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { cmsType } from "../../../../systemComponents/types/types";

import Link from "next/link";

import parse from "html-react-parser";

type mainIndvEventSectionProps = {
    image: string,
    body: Array<cmsType>,
    startDate: Date,
    endDate: Date,
    title: string,
    googleLink:string,
    location:string
}

const MainIndvEventSection = ({ image, body, startDate, endDate, title, googleLink, location }: mainIndvEventSectionProps) => {
    return (
        <div className="bg-sky-bg">
            <div className="h-[500px]" style={{ background: `url(${image})`, backgroundSize: 'cover' }} />
            <div className="bg-white ml-[15%] mr-[15%] rounded-xl mt-[-50px] shadow-xl">
                <div className="flex justify-between">
                    <div className="p-10 flex-1 border-r-2 border-dotted border-gray-400">
                        <h1 className="text-[40px] mb-5"> {title} </h1>
                        <div className="flex items-center gap-3 mt-3"> <span className="text-[20px] text-grad-one"><FaClock /></span><p className="text-[rgb(150,150,150)]"> Date / Time  </p></div>
                        <p className="text-[15px] mt-2"> <span>{new Date(startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })}</span> <span className="ml-2 mr-2"> - </span> <span>{new Date(endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })}</span></p>
                        <div className="flex items-center gap-3 mt-3"> <span className="text-[20px] text-grad-one"><FaLocationDot /></span><p className="text-[rgb(150,150,150)]"> Location  </p></div>
                        <p className="text-[15px] mt-2 text-primary"> {location} </p>
                    </div>
                    <div className="p-10 flex-1">

                        <h5 className="text-[25px] font-bold"> Book the event </h5>
                        <div className="flex items-center gap-5">
                            <p className="text-[rgb(150,150,150)]"> This button will lead you to a google form </p>
                            <Link href={googleLink} target="_blank"><button className="p-5 py-4 bg-primary text-white rounded-xl"> Enter form </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" m-auto max-w-5xl mt-10 pb-20">
                {body.map((cnt: cmsType, int: number) => (
                    <div key={int}>
                        {cnt.title && <h1 className="text-[2.5rem]"> {cnt.title} </h1>} 
                        {cnt.subtitle && <div className="mt-5"> {parse(cnt.subtitle)} </div>}
                        {cnt.description && <div className="mt-5"> {parse(cnt.description)} </div>}
                        {cnt.image && typeof cnt.image === "string" && <img src={cnt.image} className="w-full mt-5" />}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MainIndvEventSection;