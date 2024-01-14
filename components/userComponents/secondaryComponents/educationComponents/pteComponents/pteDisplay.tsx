"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";
import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import MainPteSection from "./mainPteSection/mainPteSection";
import Spinner from "../../../../systemComponents/modules/spinner";

const PteDisplay = () => {
    const { data, status } = useQuery("pte-data", () => universalGet("/education/pte"));
    console.log(data);
    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching PTE data </h5>
    else if (status === "success") {
        const pteTextSection = {
            titleOne: data.pte.titleOne,
            paraOne: data.pte.paraOne,
            pointParas: data.pte.pointParasOne,
            titleTwo: data.pte.titleTwo,
            paraTwo: data.pte.paraTwo,
            pointParas2: data.pte.pointParasTwo,
            titleThree: data.pte.titleThree,
            paraThree: data.pte.paraThree
        }
        const imageOne = data.pte.pictureOne;
        const imageTwo = data.pte.pictureTwo;

        return (
            <>
                <SecondaryTitleDesign page="pte" para="At Wize Consult, we recognize that achieving your aspirations, whether they involve studying abroad, pursuing a career overseas, or migrating to an English-speaking country, often hinges on your ability to demonstrate proficiency in the English language. That's where our PTE page comes into play – your gateway to achieving success in the PTE (Pearson Test of English) examination." changeBg={true} />
                <MainPteSection textSection={pteTextSection} imageOne={imageOne} imageTwo={imageTwo} />
            </>
        )
    }
}
export default PteDisplay;