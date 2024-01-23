"use client"

import { useState, useContext, useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import ImageUpload from "../../../systemComponents/modules/imageUpload";
import ButtonDesign from "../../../systemComponents/modules/buttonDesign";
import context from "../../../systemComponents/context/context";
import PopUp from "../../../systemComponents/modules/popUp";

import 'react-quill/dist/quill.snow.css';
import { uploadFile } from "../../../systemComponents/microFunctions/uploadFile";
import { universalJSONPost } from "../../../systemComponents/apiConnectors/system/POST";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useQuery } from "react-query";
import Spinner from "../../../systemComponents/modules/spinner";
import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";

const EducationEditDisplay = () => {

    const [fileOne, setFileOne] = useState<File>();
    const [fileTwo, setFileTwo] = useState<File>();

    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");

    const [noTrimmerOne, setNoTrimmerOne] = useState(true);
    const [noTrimmerTwo, setNoTrimmerTwo] = useState(true);

    const [chooseAusText, setChooseAusText] = useState("");
    const [educationServicesText, setEducationServicesText] = useState("");
    const [futureAwaitsText, setFutureAwaitsText] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);

    const [originalImage, setOriginalImage] = useState({ imageOne: "", imageTwo: "" })

    const { edgestore } = useEdgeStore();

    const contextContainer = useContext(context);

    const { data, status } = useQuery("education-page", () => universalGet("/education"));

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    const submitForm = async () => {
        contextContainer.setLoading(0);
        const updateImage = { imageOne: originalImage.imageOne, imageTwo: originalImage.imageTwo }
        try {
            if (fileOne) {
                const { status } = await deleteFile(originalImage.imageOne, edgestore);
                if (status) {
                    const { data: imageOneUrl, status: imageOneStatus } = await uploadFile(fileOne, edgestore);
                    if (imageOneStatus) updateImage.imageOne = imageOneUrl;
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
            if (fileTwo) {
                const { status } = await deleteFile(originalImage.imageTwo, edgestore);
                if (status) {
                    const { data: imageTwoUrl, status: imageTwoStatus } = await uploadFile(fileTwo, edgestore);
                    if (imageTwoStatus) updateImage.imageTwo = imageTwoUrl;
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
            const body = {
                whyChooseAusBanner: updateImage.imageOne,
                whyChooseAusText: chooseAusText,
                ourEduServicesBanner: updateImage.imageTwo,
                ourEduServicesText: educationServicesText,
                futureAwaitsText: futureAwaitsText
            }
            const response = await universalPatch(body, `/admin/education/${data.education._id}`);
            if (response?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);
        }
        catch (err) {
            contextContainer.setLoading(3);
        }
    }

    useEffect(() => {
        if (status === "success") {
            setChooseAusText(data.education.whyChooseAusText);
            setEducationServicesText(data.education.ourEduServicesText);
            setFutureAwaitsText(data.education.futureAwaitsText);

            setImageOne(data.education.whyChooseAusBanner);
            setImageTwo(data.education.ourEduServicesBanner);

            setOriginalImage({ imageOne: data.education.whyChooseAusBanner, imageTwo: data.education.ourEduServicesBanner })
        }
    }, [status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error returning education page </h5>
    else {
        return (
            <form>
                <h1 className="mt-8 mb-2">  Why choose Australia for Education : </h1>
                <ImageUpload fullWidth={true} setFile={setFileOne} image={imageOne} setImage={setImageOne} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                <ReactQuill value={chooseAusText} onChange={setChooseAusText} theme="snow" className="h-[400px] mt-8" />
                <h1 className="mt-20 mb-2">  Our Education Services :  </h1>
                <ImageUpload fullWidth={true} setFile={setFileTwo} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmerTwo} setNoTrimmer={setNoTrimmerTwo} />
                <ReactQuill value={educationServicesText} onChange={setEducationServicesText} theme="snow" className="h-[400px] mt-8" />
                <h1 className="mt-20 mb-2">  Study in Australia - Your Future Awaits  :  </h1>
                <ReactQuill value={futureAwaitsText} onChange={setFutureAwaitsText} theme="snow" className="h-[400px]" />

                <div className="mt-20 flex gap-5">
                    <div onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update education page"} noArrow={true} /></div>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit Education page"]} title="Education edit" body="Are you sure you want to edit the education page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The education page have been sucesfully edited" errorMessage="Error updating the education page" />
            </form>
        )
    }
}
export default EducationEditDisplay;