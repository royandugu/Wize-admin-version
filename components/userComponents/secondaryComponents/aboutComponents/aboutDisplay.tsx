import SecondaryTitleDesign from "../../../systemComponents/modules/secondaryTitleDesign";
import BestSolutionSection from "./bestSolutionSection/bestSolutionSection";
import OptionSection from "../homeComponents/optionSection/optionSection";
import OurTeamMembersSection from "./ourTeamMembersSection/ourTeamMembersSection";

const AboutDisplay = () => {

    return (
        <>
            <SecondaryTitleDesign changeBg={true} page="about" para=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <BestSolutionSection />
            <OptionSection />
            <OurTeamMembersSection />
        </>
    )
}

export default AboutDisplay;