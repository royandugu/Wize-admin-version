"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";
import SecondaryTitleDesign from "../../../../systemComponents/modules/secondaryTitleDesign";
import MainPySection from "./mainPySection/mainPySection";
import Spinner from "../../../../systemComponents/modules/spinner";

const PyDisplay = () => {
    const { data, status } = useQuery("py-data", () => universalGet("/education/py"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching PTE data </h5>
    else if (status === "success") {
        const pyTextSection = {
            titleOne: data.py.titleOne,
            paraOne: data.py.paraOne,
            pointParas: data.py.pointParasOne,
            titleTwo: data.py.titleTwo,
            paraTwo: data.py.paraTwo,
            pointParas2: data.py.pointParasTwo,
            titleThree: data.py.titleThree,
            paraThree: data.py.paraThree
        }
        const imageOne = data.py.pictureOne;
        const imageTwo = data.py.pictureTwo;

        return (
            <>
                <SecondaryTitleDesign page="py" para="At Wize Consult, we recognize that achieving your aspirations, whether they involve studying abroad, pursuing a career overseas, or migrating to an English-speaking country, often hinges on your ability to demonstrate proficiency in the English language. That's where our PTE page comes into play – your gateway to achieving success in the PTE (Pearson Test of English) examination." changeBg={true} />
                <MainPySection textSection={pyTextSection} imageOne={imageOne} imageTwo={imageTwo} />
            </>
        )
    }
}
export default PyDisplay;