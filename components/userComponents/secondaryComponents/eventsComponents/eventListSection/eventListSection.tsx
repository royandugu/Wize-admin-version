import { FiSearch } from "react-icons/fi";

const EventListSection = () => {
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
            <h5 className="mt-5 mb-10"> August 2023 - now </h5>
            <h1 className="text-grad-one mb-2"> August 2023 </h1>
            <div className="bg-white flex flex-col xl:flex-row rounded-md xl:pr-10" data-aos="fade-left"> 
                <div className="pl-5 pr-5 pb-5 xl:pb-0 text-center pt-10 border-b xl:border-r xl:border-b-0 border-grad-one">
                    <div className="flex gap-2 xl:flex-col xl:gap-0">
                        <h1> Wed </h1>
                        <h1> 21 </h1>
                    </div>
                </div>
                <div className="pt-10 pl-10 pr-10 xl:pr-0">
                    <h1 className="text-grad-one"> August (some date to some date) </h1>
                    <h1 className="text-[25px]"> Event Title </h1>
                    <p className="text-light-black text-[14px] leading-[1px]"> Author </p>
                    <p className=" mt-10 xl:mb-10 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="xl:hidden p-5 xl:p-0">
                    <img src="./images/Helping.jpg" width={100} alt="Teaching" className="w-full xl:ml-10 xl:mt-5 xl:mb-5 rounded-md" />
                </div>
                <img src="./images/Helping.jpg" width={100} alt="Teaching" className="w-full hidden xl:block xl:ml-10 xl:mt-5 xl:mb-5 rounded-md" />
            </div>
            <div>

            </div>
        </div>
    )
}
export default EventListSection;