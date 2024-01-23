"use client"

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import ImageUpload from "../../../systemComponents/modules/imageUpload";
import { useState, useContext, useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";

import ButtonDesign from "../../../systemComponents/modules/buttonDesign";
import PopUp from "../../../systemComponents/modules/popUp";
import context from "../../../systemComponents/context/context";
import { uploadFile } from "../../../systemComponents/microFunctions/uploadFile";
import { universalJSONPost } from "../../../systemComponents/apiConnectors/system/POST";
import { useQuery } from "react-query";

import 'react-quill/dist/quill.snow.css';
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../systemComponents/modules/spinner";
import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";


const MigrationEditDisplay = () => {
    const [fileOne, setFileOne] = useState<File>();
    const [fileTwo, setFileTwo] = useState<File>();

    const { data, status } = useQuery("migration-data", () => universalGet("/migration"));

    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [chooseUs, setChooseUs] = useState("");
    const [migrationServices, setMigrationServices] = useState("");
    const [readyToBegin, setReadyToBegin] = useState("");
    const [disclaimer, setDisclaimer] = useState("");

    const [originalData, setOriginalData] = useState({ imageOne: "", imageTwo: "" })

    const [noTrimmerOne, setNoTrimmerOne] = useState(true);
    const [noTrimmerTwo, setNoTrimmerTwo] = useState(true);

    const [showPopUp, setShowPopUp] = useState(false);

    const contextContainer = useContext(context);
    const { edgestore } = useEdgeStore();

    const submitForm = async () => {
        const updatedContent = { imageOne: originalData.imageOne, imageTwo: originalData.imageTwo };
        contextContainer.setLoading(0);
        try {
            if (fileOne) {
                const { status } = await deleteFile(originalData.imageOne, edgestore);
                if (status) {
                    const { data, status: imageUploadStatus } = await uploadFile(fileOne, edgestore);
                    if (imageUploadStatus) updatedContent.imageOne = data;
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
                const { status } = await deleteFile(originalData.imageTwo, edgestore);
                if (status) {
                    const { data, status: imageUploadStatus } = await uploadFile(fileTwo, edgestore);
                    if (imageUploadStatus) updatedContent.imageTwo = data;
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
                whyChooseUsBanner: updatedContent.imageOne,
                whyChooseUsText: chooseUs,
                ourMigServicesBanner: updatedContent.imageTwo,
                ourMigServicesText: migrationServices,
                readyToBegin: readyToBegin,
                disclaimer: disclaimer
            }
            console.log(body);
            const response = await universalPatch(body, `/admin/migration/${data.migration._id}`);
            console.log(response);
            if (response?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);

        }
        catch (err) {
            console.log(err);
            contextContainer.setLoading(3);
        }
    }

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    useEffect(() => {
        if (status === "success") {
            setChooseUs(data.migration.whyChooseUsText);
            setMigrationServices(data.migration.ourMigServicesText);
            setReadyToBegin(data.migration.readyToBegin);
            setDisclaimer(data.migration.disclaimer);
            setImageOne(data.migration.whyChooseUsBanner);
            setImageTwo(data.migration.ourMigServicesBanner);
            setOriginalData({ imageOne: data.migration.whyChooseUsBanner, imageTwo: data.migration.ourMigServicesBanner });
        }
    }, [status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching migration </h5>
    else if (status === "success") {
        return (
            <form>
                <h1 className="mt-8 mb-2">  Why choose us : </h1>
                <ImageUpload fullWidth={true} setFile={setFileOne} image={imageOne} setImage={setImageOne} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                <ReactQuill value={chooseUs} onChange={setChooseUs} theme="snow" className="h-[400px] mt-8" />
                <h1 className="mt-20 mb-2">  Our migration services : </h1>
                <ImageUpload fullWidth={true} setFile={setFileTwo} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmerTwo} setNoTrimmer={setNoTrimmerTwo} />
                <ReactQuill value={migrationServices} onChange={setMigrationServices} theme="snow" className="h-[400px] mt-8" />
                <h1 className="mt-20 mb-2">  Ready to begin : </h1>
                <ReactQuill value={readyToBegin} onChange={setReadyToBegin} theme="snow" className="h-[400px]" />
                <h1 className="mt-20 mb-2">  Disclaimer: </h1>
                <ReactQuill value={disclaimer} onChange={setDisclaimer} theme="snow" className="h-[400px]" />
                <div className="mt-20 flex gap-5">
                    <div onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update migration page"} noArrow={true} /></div>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit migration page"]} title="Migration edit" body="Are you sure you want to edit the migration page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The migration page have been sucesfully edited" errorMessage="Error updating the migration page" />
            </form>
        )
    }
}

export default MigrationEditDisplay;