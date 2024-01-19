import WelcomeSection from "./welcomeSection/welcomeSection";
import FeaturesSection from "./featuresSection/featuresSection";
import StatsSection from "./statsSection/statsSection";
import OptionSection from "./optionSection/optionSection";
import TestimonialSection from "./testimonialSection/testimonialSection";
import QuizPopUp from "../../../systemComponents/modules/quizPopUp/quizPopUp";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./homeDisplay.css";

const HomeDisplay = () => {

    return (
        <>
            <WelcomeSection />
            <FeaturesSection/>
            <StatsSection/>
            <OptionSection/>
            <TestimonialSection/>
            <QuizPopUp/>
        </>
    )
}

export default HomeDisplay;