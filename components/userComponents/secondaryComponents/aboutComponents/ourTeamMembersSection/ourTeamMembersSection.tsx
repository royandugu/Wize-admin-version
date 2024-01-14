"use client"

import Slider from "react-slick";

import NewsFeedSection from "../newsFeedSection/newsFeedSection";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderOne = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )
}
const SliderTwo = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )

}
const SliderThree = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )
}
const SliderFour = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )
}
const SliderFive = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )
}
const SliderSix = () => {
    return (
        <div className="pl-2 pr-2 text-center">
            <img src="images/Teaching.jpg" alt="Teaching"/>
            <h1 className="text-light-black mt-3 uppercase"> Name </h1>
            <h1 className="uppercase text-grad-one"> Position </h1>
        </div>
    )
}

const OurTeamMembersSection = () => {
    const settingsOne = {
        slidesToShow: 4,
        dots: true,
        arrows: true,
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
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        infinite: true,
        cssEase: "linear",
    };

    return (
        <div className="pl-[18%] pr-[18%] pt-20 bg-sky-bg">
            <h1 className="text-center text-[30px] mb-10 sm:text-[40px]"> Our Team Members </h1>
            <div className="hidden md:block">
                <Slider {...settingsOne}>
                    <SliderOne />
                    <SliderTwo />
                    <SliderThree />
                    <SliderFour />
                    <SliderFive />
                    <SliderSix />
                </Slider>
            </div>
            <div className="md:hidden">
                <Slider {...settingsTwo}>
                    <SliderOne />
                    <SliderTwo />
                    <SliderThree />
                    <SliderFour />
                    <SliderFive />
                    <SliderSix />
                </Slider>
            </div>
            <NewsFeedSection />
        </div>
    )
}
export default OurTeamMembersSection;