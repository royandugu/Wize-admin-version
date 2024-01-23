"use client"

import { useState, useContext, useEffect } from "react";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import ImageUpload from "../../../../systemComponents/modules/imageUpload";
import PopUp from "../../../../systemComponents/modules/popUp";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import { useEdgeStore } from "@/lib/edgestore";
import { useQuery } from "react-query";
import context from "../../../../systemComponents/context/context";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";

import 'react-quill/dist/quill.snow.css';
import { uploadFile } from "../../../../systemComponents/microFunctions/uploadFile";
import Spinner from "../../../../systemComponents/modules/spinner";
import { deleteFile } from "../../../../systemComponents/microFunctions/deleteFile";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";

const VisitorEditDisplay = () => {
    const [whyChooseAustralia, setWhyChooseAustralia] = useState("");
    const [touristStreamText, setTouristStreamText] = useState("");
    const [buisnessStreamText, setBuisnessStreamText] = useState("");
    const [familyText, setFamilyText] = useState("");
    const [ourServices, setOurServices] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);

    const [noTrimmerOne, setNoTrimmerOne] = useState(true);
    const [noTrimmerTwo, setNoTrimmerTwo] = useState(true);
    const [noTrimmerThree, setNoTrimmerThree] = useState(true);

    const [fileOne, setFileOne] = useState<File>();
    const [fileTwo, setFileTwo] = useState<File>();
    const [fileThree, setFileThree] = useState<File>();

    const [imageOne, setImageOne] = useState<string>("");
    const [imageTwo, setImageTwo] = useState<string>("");
    const [imageThree, setimageThree] = useState<string>("");

    const [originalImage, setOriginalImage] = useState({ imageOne: "", imageTwo: "", imageThree: "" });

    const { data, status } = useQuery("visitor-data", () => universalGet("/migration/visitor"));

    const contextContainer = useContext(context);

    const { edgestore } = useEdgeStore();
    
    const submitForm = async () => {
        contextContainer.setLoading(0);
        const newFileUploads = { firstImage: originalImage.imageOne, secondImage: originalImage.imageTwo, thirdImage: originalImage.imageThree };
        try {

            if (fileOne) {
                //const { status } = await deleteFile(originalImage.imageOne, edgestore);
                const status = true;
                if (status) {
                    const { data: imageData, status } = await uploadFile(fileOne, edgestore);
                    if (status) newFileUploads.firstImage = imageData;
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
                    const { data, status } = await uploadFile(fileTwo, edgestore);
                    if (status) newFileUploads.secondImage = data;
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
            if (fileThree) {
               const { status } = await deleteFile(originalImage.imageThree, edgestore);
                if (status) {
                    const { data, status } = await uploadFile(fileThree, edgestore);
                    if (status) newFileUploads.thirdImage = data;
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
                whyChooseAustralia: whyChooseAustralia,
                touristStreamBanner: newFileUploads.firstImage,
                touristStreamText: touristStreamText,
                buisnessVisitorBanner: newFileUploads.secondImage,
                buisnessVisitorText: buisnessStreamText,
                familyBanner: newFileUploads.thirdImage,
                familyText: familyText,
                ourServices: ourServices
            }

            const response = await universalPatch(body, `/admin/migration/visitor/${data.visitor._id}`);

            if (response?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);

        }
        catch (err) {
            console.log(err);
            contextContainer.setLoading(3);
        }
    }

    useEffect(() => {
        if (status === 'success') {
            setWhyChooseAustralia(data.visitor.whyChooseAustralia);
            setTouristStreamText(data.visitor.touristStreamText);
            setBuisnessStreamText(data.visitor.buisnessVisitorText);
            setFamilyText(data.visitor.familyText);
            setOurServices(data.visitor.ourServices);

            setImageOne(data.visitor.touristStreamBanner);
            setImageTwo(data.visitor.buisnessVisitorBanner);
            setimageThree(data.visitor.familyBanner);
            setOriginalImage({ imageOne: data.visitor.touristStreamBanner, imageTwo: data.visitor.buisnessVisitorBanner, imageThree: data.visitor.familyBanner })
        }
    }, [status])


    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error returning the visitor </h5>
    else if (status === "success") {
        return (
            <form>
                <h1 className="mt-5 mb-2"> Why choose australia for a visit ? </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={whyChooseAustralia} onChange={setWhyChooseAustralia} />
                <h1 className="mt-20 mb-2"> Tourist Stream Banner: </h1>
                <ImageUpload fullWidth={true} image={imageOne} setImage={setImageOne} setFile={setFileOne} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                <h1 className="mt-8 mb-2"> Tourist Stream text: </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={touristStreamText} onChange={setTouristStreamText} />
                <h1 className="mt-20 mb-2"> Buisness Stream Banner: </h1>
                <ImageUpload fullWidth={true} image={imageTwo} setImage={setImageTwo} setFile={setFileTwo} noTrimmer={noTrimmerTwo} setNoTrimmer={setNoTrimmerTwo} />
                <h1 className="mt-8 mb-2"> Buisness Stream text: </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={buisnessStreamText} onChange={setBuisnessStreamText} />
                <h1 className="mt-20 mb-2"> Family Stream Banner: </h1>
                <ImageUpload fullWidth={true} image={imageThree} setImage={setimageThree} setFile={setFileThree} noTrimmer={noTrimmerThree} setNoTrimmer={setNoTrimmerThree} />
                <h1 className="mt-8 mb-2"> Faimly Stream text: </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={familyText} onChange={setFamilyText} />
                <h1 className="mt-20 mb-2"> Our services: </h1>
                <ReactQuill theme="snow" className="h-[400px]" value={ourServices} onChange={setOurServices} />

                <div className="mt-20 flex gap-5">
                    <div onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update migration/Visitor"} noArrow={true} /></div>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit Visitor page"]} title="Visitor edit" body="Are you sure you want to edit the Visitor page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The Visitor page have been sucesfully edited" errorMessage="Error updating the Visitor page" />

            </form>
        )
    }
}
export default VisitorEditDisplay;