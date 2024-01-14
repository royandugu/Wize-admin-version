"use client"

import Slider from "react-slick";

const SliderOne=()=>{
    return(
        <div className="pl-2 pr-2 text-center">
        <img src="/images/Teaching.jpg" alt="Teaching"/>
        <div className="bg-white pt-5 pb-5">
            <h1> Some content </h1>
        </div>
    </div>
    )   
}
const SliderTwo=()=>{
    return(
        <div className="pl-2 pr-2 text-center">
        <img src="/images/Teaching.jpg" alt="Teaching"/>
        <div className="bg-white pt-5 pb-5">
            <h1> Some content </h1>
        </div>
    </div>
    )   
}
const SliderThree=()=>{
    return(
        <div className="pl-2 pr-2 text-center">
        <img src="/images/Teaching.jpg" alt="Teaching"/>
        <div className="bg-white pt-5 pb-5">
            <h1> Some content </h1>
        </div>
    </div>
    )   
}
const SliderFour=()=>{
    return(
        <div className="pl-2 pr-2 text-center">
        <img src="/images/Teaching.jpg" alt="Teaching"/>
        <div className="bg-white pt-5 pb-5">
            <h1> Some content </h1>
        </div>
    </div>
    )   
}


const NewsFeedSection = () => {
    
    const settingsOne = {
        slidesToShow: 3,
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
        <div className="text-center pt-20 pb-20">
            <h1 className="text-[20px] sm:text-[25px] text-grad-one"> // NEWS //</h1>
            <h1 className="text-center text-[30px] mb-10 sm:text-[40px]"> NEWS FEED </h1>
            <div className="hidden md:block">
                <Slider {...settingsOne}>
                    <SliderOne />
                    <SliderTwo />
                    <SliderThree />
                    <SliderFour />
                </Slider>
            </div>
            <div className="md:hidden">
                <Slider {...settingsTwo}>
                    <SliderOne />
                    <SliderTwo />
                    <SliderThree />
                    <SliderFour />
                </Slider>
            </div>
        </div>
    )
}
export default NewsFeedSection;