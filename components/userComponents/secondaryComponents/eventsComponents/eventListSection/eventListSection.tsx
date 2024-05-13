"use client"

import { useQuery } from "react-query";
import { FiSearch } from "react-icons/fi";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";

import Link from "next/link";

import Spinner from "../../../../systemComponents/modules/spinner";

const EventListSection = () => {
    const { data, status } = useQuery("event-data", () => universalGet("/events"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching events </h5>
    else if (status === "success") {

        return (
            <div className="bg-sky-bg pt-20 pl-[16%] pr-[16%] pb-20">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                    <div className="relative w-[100%]">
                        <input type="text" placeholder="Type to search" className="pl-5 bg-transparent border-b border-light-black w-[100%] text-light-black relative" />
                        <FiSearch className="absolute text-light-black right-0 top-0" />
                    </div>
                    <div className="flex gap-5">
                        <button className="mainGradient pl-3 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
                            List </button>
                        <button className="mainGradient pl-3 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
                            Month </button>
                        <button className="mainGradient pl-3 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
                            Day </button>
                    </div>  
                </div>
                {data?.data?.map((event: any, i: number) => (
                    <Link key={i} href={`/events/${event._id}`}>
                        <div className="bg-white cursor-pointer shadow-xl mt-10 flex flex-col xl:flex-row rounded-md xl:pr-10" data-aos="fade-left">
                            <div className="pl-5 pr-5 pb-5 xl:pb-0 text-center pt-10 border-b xl:border-r xl:border-b-0 text-white bg-grad-one">
                                <div className="flex gap-2 xl:flex-col xl:gap-0">
                                    <h1 className="font-bold"> {new Date(event.content.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}</h1>
                                </div>
                            </div>
                            <div className="w-2/3 pt-10 pl-10 pr-10 xl:pr-0">
                                <h1 className="text-grad-one"> {new Date(event.content.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })} - {new Date(event.content.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })} </h1>
                                <h1 className="text-[25px]"> {event.content.title} </h1>
                                <p className="text-light-black text-[14px] leading-[1px] mb-10"> Admin </p>
                            </div>
                            <div className="xl:hidden p-5 xl:p-0">
                                <img src={event.content.banner} alt="Teaching" className="xl:ml-10 xl:mt-5 xl:mb-5 rounded-md" />
                            </div>
                            <div className="w-1/3 pr-5">
                                <img src={event.content.banner} alt="Teaching" className="w-full hidden xl:block xl:ml-10 xl:mt-5 xl:mb-5 rounded-md" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}
export default EventListSection;