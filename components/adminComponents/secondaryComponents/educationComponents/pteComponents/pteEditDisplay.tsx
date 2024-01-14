"use client"

import { useState, useEffect } from "react";
import { useContext } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useQuery } from "react-query";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../../systemComponents/modules/spinner";

import MainPteSection from "../../../../userComponents/secondaryComponents/educationComponents/pteComponents/mainPteSection/mainPteSection";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import PopUp from "../../../../systemComponents/modules/popUp";
import context from "../../../../systemComponents/context/context";
import { uploadImage } from "../../../../systemComponents/microFunctions/uploadImage";
import { deleteImage } from "../../../../systemComponents/microFunctions/deleteImage";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";

const PteEditDisplay = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const contextContainer = useContext(context);

    const { edgestore } = useEdgeStore();

    const { data, status } = useQuery("pte-data", () => universalGet("/education/pte"));

    console.log(data);


    const [pteTextSection, setPteTextSection] = useState({
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
            titleOne: pteTextSection.titleOne,
            paraOne: pteTextSection.paraOne,
            pointParasOne: pteTextSection.pointParas,
            titleTwo: pteTextSection.titleTwo,
            paraTwo: pteTextSection.paraTwo,
            pointParasTwo: pteTextSection.pointParas2,
            titleThree: pteTextSection.titleThree,
            paraThree: pteTextSection.paraThree,
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

            const response = await commonSubmitter(universalPatch, `/admin/education/pte/${data.pte._id}`, uploadData.dataOne, uploadData.dataTwo);
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
            setPteTextSection({
                titleOne: data.pte.titleOne,
                paraOne: data.pte.paraOne,
                pointParas: data.pte.pointParasOne,
                titleTwo: data.pte.titleTwo,
                paraTwo: data.pte.paraTwo,
                pointParas2: data.pte.pointParasTwo,
                titleThree: data.pte.titleThree,
                paraThree: data.pte.paraThree
            });
            setImageOne(data.pte.pictureOne);
            setImageTwo(data.pte.pictureTwo);
            setActualImage({ imageOne: data.pte.pictureOne, imageTwo: data.pte.pictureTwo })
        }
    }, [status])


    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching PTE data </h5>
    else if (status === "success") {


        return (
            <>
                <MainPteSection isAdmin={true} textSection={pteTextSection} setTextSection={setPteTextSection} pictureOne={pictureOne} pictureTwo={pictureTwo} setPictureOne={setPictureOne} setPictureTwo={setPictureTwo} imageOne={imageOne} setImageOne={setImageOne} imageTwo={imageTwo} setImageTwo={setImageTwo} />
                <div className="flex gap-5 mt-5">
                    <button onClick={() => setShowPopUp(true)}> <ButtonDesign text="Confirm changes" noArrow={true} /></button>
                    <button> <ButtonDesign text="Discard changes" noArrow={true} /></button>
                </div>
                <PopUp title="PTE update" body={"Do you want to update the PTE page ?"} buttonTexts={["Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The PTE page has been updated"} errorMessage={"Error updating the PTE page"} />

            </>
        )
    }
}
export default PteEditDisplay;