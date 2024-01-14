import Slider from "react-slick";

const SliderOne = () => {
    return (
        <div className="p-5">
            <img alt="Teaching" src="/images/Teaching.jpg"/>
        </div>
    )
}
const SliderTwo=()=>{
    return (
        <div className="p-5">
            <img alt="Teaching" src="/images/Teaching.jpg"/>
        </div>
    )

}
const SliderThree=()=>{
    return (
        <div className="p-5">
            <img alt="Teaching" src="/images/Teaching.jpg"/>
        </div>
    )

}
const SliderFour=()=>{
    return (
        <div className="p-5">
            <img alt="Teaching" src="/images/Teaching.jpg"/>
        </div>
    )

}

const EventUpdatesSection = () => {
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
        <div className="pt-10 pb-20">
            <h5 className="text-[13px] text-grad-one"> \\ NEWS \\</h5>
            <h1 className="text-[25px] mb-5"> Get Event Updates </h1>
            <div className="hidden md:block pl-[16.5%] pr-[16.5%]">
                <Slider {...settingsOne}>
                    <SliderOne/>
                    <SliderTwo/>
                    <SliderThree/>
                    <SliderFour/>
                </Slider>
            </div>
            <div className="md:hidden pl-[16.5%] pr-[16.5%]">
                <Slider {...settingsTwo}>
                    <SliderOne/>
                    <SliderTwo/>
                    <SliderThree/>
                    <SliderFour/>
                </Slider>
            </div>
        </div>
    )
}
export default EventUpdatesSection;