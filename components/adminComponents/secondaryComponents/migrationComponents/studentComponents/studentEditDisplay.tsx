"use client"

import { useEffect, useState, useContext } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useQuery } from "react-query";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";

import dynamic from "next/dynamic";
import context from "../../../../systemComponents/context/context";
import { deleteFile } from "../../../../systemComponents/microFunctions/deleteFile";

import ImageUpload from "../../../../systemComponents/modules/imageUpload";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import { uploadFile } from "../../../../systemComponents/microFunctions/uploadFile";
import Spinner from "../../../../systemComponents/modules/spinner";
import PopUp from "../../../../systemComponents/modules/popUp";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';

const StudentEditDisplay = () => {

    const { edgestore } = useEdgeStore();
    const { data, status } = useQuery("student-data", () => universalGet("/migration/student"));

    const contextContainer = useContext(context);

    const [initialParagraph, setInitialParagraph] = useState("");
    const [documentsRequired, setDocumentsRequired] = useState("");
    const [ourServices, setOurServices] = useState("");
    const [disclaimer, setDisclaimer] = useState("");
    const [file, setFile] = useState<File>();
    const [image, setImage] = useState("");
    const [noTrimmer, setNoTrimmer] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);
    const [originalImage, setOriginalImage] = useState("");
    

    const submitForm = async () => {
        let uploadLink=originalImage;
        contextContainer.setLoading(0);
        try {
            if (file) {
                const { status } = await deleteFile(originalImage, edgestore);
                console.log(status);
                if (status) {
                    const { data: imageData, status } = await uploadFile(file, edgestore);
                    if (status) uploadLink = imageData;
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
            else uploadLink=originalImage;

            const body = {
                initialParagraph: initialParagraph,
                studentBanner: uploadLink,
                documentRequirements: documentsRequired,
                ourServices: ourServices,
                disclaimer: disclaimer
            }
            const response = await universalPatch(body, `/admin/migration/student/${data.student._id}`);
            
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
            setInitialParagraph(data.student.initialParagraph);
            setImage(data.student.studentBanner);
            setDocumentsRequired(data.student.documentRequirements);
            setOurServices(data.student.ourServices);
            setDisclaimer(data.student.disclaimer);
            setOriginalImage(data.student.studentBanner);
        }
    }, [status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error while student display </h5>
    else if (status === "success") {
        return (
            <form>
                <input type="text" placeholder="Initial paragraph" value={initialParagraph} className="p-2 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setInitialParagraph(e.target.value)} />
                <h1 className="mt-8 mb-2"> Student banner : </h1>
                <ImageUpload setFile={setFile} fullWidth={true} image={image} setImage={setImage} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer} />
                <h1 className="mt-8 mb-2"> Documents required for student visa : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={documentsRequired} onChange={setDocumentsRequired} />
                <h1 className="mt-20 mb-2"> Our services : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={ourServices} onChange={setOurServices} />
                <h1 className="mt-20 mb-2"> Disclaimer : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={disclaimer} onChange={setDisclaimer} />
                <div className="mt-20 flex gap-5">
                    <button onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update migration/student"} noArrow={true} /></button>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit student page"]} title="Student edit" body="Are you sure you want to edit the student page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The student page have been sucesfully edited" errorMessage="Error updating the student page"/>
            </form>
        )
    }
}
export default StudentEditDisplay;