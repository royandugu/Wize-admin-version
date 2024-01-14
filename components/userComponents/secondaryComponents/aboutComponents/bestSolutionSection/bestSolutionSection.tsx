import {TiTick} from "react-icons/ti";

const BestSolutionSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-10 bg-sky-bg pr-[20%] pb-32">
            <div className="pl-[20%]" data-aos="fade-left">
                <img src="/images/peopleWorking.png" alt="people_working"/>
            </div>
            <div className="pl-[20%] lg:pl-0" data-aos="fade-right">
                <h5 className="text-[20px] text-grad-one mt-5"> \\About </h5>
                <h1 className="xl+70:text-[45px] text-[25px]"> Get Your Best Consulting Solution with Wize </h1>
                <p className="mt-5 text-light-black uppercase text-[15px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="flex flex-col md:flex-row pt-5 md:gap-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-[50%] bg-white shadow-lg h-[50px] w-[50px] mt-3 flex justify-center items-center"> <TiTick className="text-[25px] text-grad-one"/> </div>

                            <h5 className="text-light-black"> LOREM IPSUM </h5> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BestSolutionSection;