import SecondaryTitleDesign from "../../../systemComponents/modules/secondaryTitleDesign";
import EventListSection from "./eventListSection/eventListSection";

const EventsDisplay = () => {
    return (
        <>
            <SecondaryTitleDesign changeBg={true} page="events" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
            <EventListSection/>
        </>
    )
}
export default EventsDisplay;