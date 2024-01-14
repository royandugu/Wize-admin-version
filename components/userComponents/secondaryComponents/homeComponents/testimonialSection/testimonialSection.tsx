"use client"

import Slider from "react-slick";

import EventUpdatesSection from "../eventUpdatesSection/eventUpdatesSection";

const SliderContentOne = () => {
    return (
        <div className="p-5">
            <div className="flex bg-white shadow-lg p-5">
                <div className="w-1/3">

                </div>
                <div className="w-2/3 text-left">
                    <p> adadfadfadf </p>
                    <h1> Name </h1>
                </div>
            </div>
        </div>

    )
}

const SliderContentTwo=()=>{
    return (
        <div className="p-5">
            <div className="flex bg-white shadow-lg p-5">
                <div className="w-1/3">

                </div>
                <div className="w-2/3 text-left">
                    <p> adadfadfadf </p>
                    <h1> Name </h1>
                </div>
            </div>
        </div>

    )

}
const SliderContentThree=()=>{
    return (
        <div className="p-5">
            <div className="flex bg-white shadow-lg p-5">
                <div className="w-1/3">

                </div>
                <div className="w-2/3 text-left">
                    <p> adadfadfadf </p>
                    <h1> Name </h1>
                </div>
            </div>
        </div>

    )

}
const SliderContentFour=()=>{
    return (
        <div className="p-5">
            <div className="flex bg-white shadow-lg p-5">
                <div className="w-1/3">

                </div>
                <div className="w-2/3 text-left">
                    <p> adadfadfadf </p>
                    <h1> Name </h1>
                </div>
            </div>
        </div>

    )

}

const TestimonialSection = () => {

    const settingsOne = {
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        infinite: true,
        cssEase: "linear",
    };
    const settingsTwo = {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        infinite: true,
        cssEase: "linear",
    };


    return (
        <div className="bg-sky-bg pt-10 text-center">
            <h5 className="text-[13px] text-grad-one"> \\ FEATURES \\</h5>
            <h1 className="text-[25px]"> Our Testimonials </h1>
            <div className="hidden md:block pl-[16.5%] pr-[16.5%]">
                <Slider {...settingsOne}>
                    <SliderContentOne/>
                    <SliderContentTwo/>
                    <SliderContentThree/>
                    <SliderContentFour/>
                </Slider>
            </div>
            <div className="md:hidden pl-[16.5%] pr-[16.5%]">
                <Slider {...settingsTwo}>
                    <SliderContentOne/>
                    <SliderContentTwo/>
                    <SliderContentThree/>
                    <SliderContentFour/>
                </Slider>
            </div>
            <EventUpdatesSection />
        </div>

    )
}
export default TestimonialSection;