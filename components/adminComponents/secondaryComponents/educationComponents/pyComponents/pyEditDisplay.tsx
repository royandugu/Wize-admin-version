"use client"

import { useState, useEffect } from "react";
import { useContext } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useQuery } from "react-query";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../../systemComponents/modules/spinner";

import MainPySection from "../../../../userComponents/secondaryComponents/educationComponents/pyComponents/mainPySection/mainPySection";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import PopUp from "../../../../systemComponents/modules/popUp";
import context from "../../../../systemComponents/context/context";
import { uploadImage } from "../../../../systemComponents/microFunctions/uploadImage";
import { deleteImage } from "../../../../systemComponents/microFunctions/deleteImage";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";

const PyEditDisplay = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const contextContainer = useContext(context);

    const { edgestore } = useEdgeStore();

    const { data, status } = useQuery("py-data", () => universalGet("/education/py"));


    const [pyTextSection, setPyTextSection] = useState({
        titleOne: " ",
        titleTwo: " ",
        paraOne: " ",
        paraTwo: " ",
        pointParas2: [],
        pointParas: [],
        titleThree: " ",
        paraThree: " "
    })

    const [pictureOne, setPictureOne] = useState<File>();
    const [pictureTwo, setPictureTwo] = useState<File>();

    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [actualImage, setActualImage] = useState({ imageOne: "", imageTwo: "" })


    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    const commonSubmitter = async (func: (body: any, url: string) => Promise<any>, url: string, dataOne: string, dataTwo: string) => {
        const staticFormBody = {
            titleOne: pyTextSection.titleOne,
            paraOne: pyTextSection.paraOne,
            pointParasOne: pyTextSection.pointParas,
            titleTwo: pyTextSection.titleTwo,
            paraTwo: pyTextSection.paraTwo,
            pointParasTwo: pyTextSection.pointParas2,
            titleThree: pyTextSection.titleThree,
            paraThree: pyTextSection.paraThree,
            pictureOne: dataOne,
            pictureTwo: dataTwo
        }

        const response = await func(staticFormBody, url);
        return response;

    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);

        try {
            const uploadData = {
                dataOne: actualImage.imageOne,
                dataTwo: actualImage.imageTwo
            }

            if (pictureOne) {
                const { status: pictureOneStatus } = await deleteImage(actualImage.imageOne, edgestore);
                if (pictureOneStatus) {
                    const { data, status } = await uploadImage(pictureOne, edgestore);
                    if (status) {
                        uploadData.dataOne = data;
                    }
                    else {
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else {
                    contextContainer.setLoading(3);
                    return;
                }
            }

            if (pictureTwo) {
                const { status: pictureTwoStatus } = await deleteImage(actualImage.imageTwo, edgestore);
                if (pictureTwoStatus) {
                    const { data, status } = await uploadImage(pictureTwo, edgestore);
                    if (status) {
                        uploadData.dataTwo = data;
                    }
                    else {
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else {
                    contextContainer.setLoading(3);
                    return;
                }
            }

            const response = await commonSubmitter(universalPatch, `/admin/education/py/${data.py._id}`, uploadData.dataOne, uploadData.dataTwo);
            if (response) {
                if (response.ok) {
                    contextContainer.setLoading(2);
                }
                else contextContainer.setLoading(3);
            }
        }

        catch (err) {
            console.log(err);
            contextContainer.setLoading(3);
        }

    }

    useEffect(() => {
        if (status === "success") {
            setPyTextSection({
                titleOne: data.py.titleOne,
                paraOne: data.py.paraOne,
                pointParas: data.py.pointParasOne,
                titleTwo: data.py.titleTwo,
                paraTwo: data.py.paraTwo,
                pointParas2: data.py.pointParasTwo,
                titleThree: data.py.titleThree,
                paraThree: data.py.paraThree
            });
            setImageOne(data.py.pictureOne);
            setImageTwo(data.py.pictureTwo);
            setActualImage({ imageOne: data.py.pictureOne, imageTwo: data.py.pictureTwo })
        }
    }, [status])


    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching PY data </h5>
    else if (status === "success") {


        return (
            <>
                <MainPySection isAdmin={true} textSection={pyTextSection} setTextSection={setPyTextSection} pictureOne={pictureOne} pictureTwo={pictureTwo} setPictureOne={setPictureOne} setPictureTwo={setPictureTwo} imageOne={imageOne} setImageOne={setImageOne} imageTwo={imageTwo} setImageTwo={setImageTwo} />
                <div className="flex gap-5 mt-5">
                    <button onClick={() => setShowPopUp(true)}> <ButtonDesign text="Confirm changes" noArrow={true} /></button>
                    <button> <ButtonDesign text="Discard changes" noArrow={true} /></button>
                </div>
                <PopUp title="PY update" body={"Do you want to update the PY page ?"} buttonTexts={["Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The PY page has been updated"} errorMessage={"Error updating the Py page"} />

            </>
        )
    }
}
export default PyEditDisplay;