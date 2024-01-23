"use client"

import { useState, useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useContext } from "react";
import { uploadFile } from "../../../../systemComponents/microFunctions/uploadFile";
import { universalGet } from "../../../../../components/systemComponents/apiConnectors/system/GET";
import { useQuery } from "react-query";

import context from "../../../../systemComponents/context/context";
import IeltsDisplay from "../../../../userComponents/secondaryComponents/educationComponents/ieltsComponents/ieltsDisplay";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import PopUp from "../../../../systemComponents/modules/popUp";
import Spinner from "../../../../systemComponents/modules/spinner";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";
import { deleteFile } from "../../../../systemComponents/microFunctions/deleteFile";


const IeltsEditDisplay = () => {
    const { edgestore } = useEdgeStore();
    const { data, status } = useQuery("ielts-data", () => universalGet("/education/ielts"));

    const [showPopUp, setShowPopUp] = useState(false);
    const [ieltsTextSection, setIeltsTextSection] = useState({
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

    const contextContainer = useContext(context);

    const commonSubmitter = async (func: (body: any, url: string) => Promise<any>, url: string, dataOne: string, dataTwo: string) => {
        const staticFormBody = {
            titleOne: ieltsTextSection.titleOne,
            paraOne: ieltsTextSection.paraOne,
            pointParasOne: ieltsTextSection.pointParas,
            titleTwo: ieltsTextSection.titleTwo,
            paraTwo: ieltsTextSection.paraTwo,
            pointParasTwo: ieltsTextSection.pointParas2,
            titleThree: ieltsTextSection.titleThree,
            paraThree: ieltsTextSection.paraThree,
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
                const { status: pictureOneStatus } = await deleteFile(actualImage.imageOne, edgestore);
                if (pictureOneStatus) {
                    const { data, status } = await uploadFile(pictureOne, edgestore);
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
                const { status: pictureTwoStatus } = await deleteFile(actualImage.imageTwo, edgestore);
                if (pictureTwoStatus) {
                    const { data, status } = await uploadFile(pictureTwo, edgestore);
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

            const response = await commonSubmitter(universalPatch, `/admin/education/ielts/${data.ielts._id}`, uploadData.dataOne, uploadData.dataTwo);
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
            setIeltsTextSection({
                titleOne: data.ielts.titleOne,
                paraOne: data.ielts.paraOne,
                pointParas: data.ielts.pointParasOne,
                titleTwo: data.ielts.titleTwo,
                paraTwo: data.ielts.paraTwo,
                pointParas2: data.ielts.pointParasTwo,
                titleThree: data.ielts.titleThree,
                paraThree: data.ielts.paraThree
            });
            setImageOne(data.ielts.pictureOne);
            setImageTwo(data.ielts.pictureTwo);
            setActualImage({ imageOne: data.ielts.pictureOne, imageTwo: data.ielts.pictureTwo })
        }
    }, [status])

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])


    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching IELTS data </h5>
    else if (status === "success") {


        return (
            <>
                <IeltsDisplay isAdmin={true} textSection={ieltsTextSection} setTextSection={setIeltsTextSection} pictureOne={pictureOne} pictureTwo={pictureTwo} setPictureOne={setPictureOne} setPictureTwo={setPictureTwo} imageOne={imageOne} setImageOne={setImageOne} imageTwo={imageTwo} setImageTwo={setImageTwo} />
                <div className="flex gap-5 mt-5">
                    <div onClick={() => setShowPopUp(true)}> <ButtonDesign text="Confirm changes" noArrow={true} /></div>
                    <div> <ButtonDesign text="Discard changes" noArrow={true} /></div>
                </div>
                <PopUp title="IELTS update" body={"Do you want to update the IELTS page ?"} buttonTexts={["Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The IELTS page has been updated"} errorMessage={"Error updating the IELTS page"} />

            </>)
    }
}

export default IeltsEditDisplay;