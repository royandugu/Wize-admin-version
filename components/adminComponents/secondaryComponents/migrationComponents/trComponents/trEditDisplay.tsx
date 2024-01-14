"use client"

import { useEffect, useState, useContext } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useQuery } from "react-query";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";

import dynamic from "next/dynamic";
import context from "../../../../systemComponents/context/context";
import { deleteImage } from "../../../../systemComponents/microFunctions/deleteImage";

import ImageUpload from "../../../../systemComponents/modules/imageUpload";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import { uploadImage } from "../../../../systemComponents/microFunctions/uploadImage";
import Spinner from "../../../../systemComponents/modules/spinner";
import PopUp from "../../../../systemComponents/modules/popUp";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';
import { universalJSONPost } from "../../../../systemComponents/apiConnectors/system/POST";

const TrEditDisplay = () => {

    const { edgestore } = useEdgeStore();
    const { data, status } = useQuery("tr-data", () => universalGet("/migration/tr"));

    const contextContainer = useContext(context);

    const [basicEligibility, setBasicEligibility] = useState("");
    const [applicationProcess, setApplicationProcess] = useState("");
    const [ourServices, setOurServices] = useState("");
    const [disclaimer, setDisclaimer] = useState("");
    const [file, setFile] = useState<File>();
    const [fileTwo,setFileTwo]=useState<File>();
    const [image, setImage] = useState("");
    const [noTrimmer, setNoTrimmer] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);
    const [originalImage, setOriginalImage] = useState({firstImage:"",secondImage:""});
    const [noTrimmerTwo,setNoTrimmerTwo]=useState(true);
    const [imageTwo,setImageTwo]=useState("");
    

    const submitForm = async () => {
        const uploadLink={firstImage:originalImage.firstImage,secondImage:originalImage.secondImage};
        contextContainer.setLoading(0);
        try {
            if (file) {
                const { status } = await deleteImage(originalImage.firstImage, edgestore);
                if (status) {
                    const { data: imageData, status } = await uploadImage(file, edgestore);
                    if (status) uploadLink.firstImage = imageData;
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

            if(fileTwo){
                const { status } = await deleteImage(originalImage.secondImage, edgestore);
                if (status) {
                    const { data: imageData, status } = await uploadImage(fileTwo, edgestore);
                    if (status) uploadLink.secondImage = imageData;
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

            const body={
                basicEligibility:basicEligibility,
                applicationProcessBanner:uploadLink.firstImage,
                applicationProcess:applicationProcess,
                ourServicesBanner:uploadLink.secondImage,
                ourServices:ourServices
            }
            console.log(body);
            const response = await universalPatch(body, `/admin/migration/tr/${data.tr._id}`);
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
            setBasicEligibility(data.tr.basicEligibility);
            setApplicationProcess(data.tr.applicationProcess);
            setOurServices(data.tr.ourServices);
            setDisclaimer(data.tr.disclaimer);
            setOriginalImage({firstImage:data.tr.applicationProcessBanner,secondImage:data.tr.ourServicesBanner});
            setImage(data.tr.applicationProcessBanner);
            setImageTwo(data.tr.ourServicesBanner);
        }
    }, [status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error while TR display </h5>
    else if (status === "success") {
        return (
            <form>

                <h1 className="mt-5 mb-2"> Basic Eligibility : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={basicEligibility} onChange={setBasicEligibility} />
                
                <h1 className="mt-20 mb-2"> Application Process Banner : </h1>
                <ImageUpload setFile={setFile} fullWidth={true} image={image} setImage={setImage} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer} />
                <h1 className="mt-8 mb-2"> Application Process : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={applicationProcess} onChange={setApplicationProcess} />
                <h1 className="mt-20 mb-2"> Our services banner : </h1>
                <ImageUpload setFile={setFileTwo} fullWidth={true} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmerTwo} setNoTrimmer={setNoTrimmerTwo} />
                
                <h1 className="mt-10 mb-2"> Our services : </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={ourServices} onChange={setOurServices} />
                
                <div className="mt-20 flex gap-5">
                    <button onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update migration/TR"} noArrow={true} /></button>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit TR page"]} title="TR edit" body="Are you sure you want to edit the TR page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The TR page have been sucesfully edited" errorMessage="Error updating the TR page"/>
            </form>
        )
    }
}
export default TrEditDisplay;