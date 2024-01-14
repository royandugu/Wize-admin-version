import { Dispatch, SetStateAction } from "react";

import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import MainIeltsSection from "./mainIeltsSection/mainIeltsSection";
import { educationProp } from "../../../../systemComponents/types/types";


const IeltsDisplay = (props: educationProp) => {
    return (
        <>
            {!props.isAdmin && <SecondaryTitleDesign page="ielts" para="At Wize Consult, we understand that achieving your dreams of studying abroad or immigrating to an English-speaking country often hinges on your ability to demonstrate proficiency in the English language. That's where our IELTS page comes in – your key to unlocking success in the IELTS (International English Language Testing System) examination." changeBg={true} />}
            <MainIeltsSection isAdmin={props.isAdmin} textSection={props.textSection} setTextSection={props.textSection} setPictureOne={props.setPictureOne} setPictureTwo={props.setPictureTwo} imageOne={props.imageOne} imageTwo={props.imageTwo} setImageOne={props.setImageOne} setImageTwo={props.setImageTwo}/>
            
        </>
    )
}
export default IeltsDisplay;