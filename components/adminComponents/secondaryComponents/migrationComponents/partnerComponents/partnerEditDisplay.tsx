"use client"

import { useState, useContext, useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";

import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import ImageUpload from "../../../../systemComponents/modules/imageUpload";
import PopUp from "../../../../systemComponents/modules/popUp";
import context from "../../../../systemComponents/context/context";
import Spinner from "../../../../systemComponents/modules/spinner";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import { uploadFile } from "../../../../systemComponents/microFunctions/uploadFile";
import { universalGet } from "../../../../systemComponents/apiConnectors/system/GET";
import { useQuery } from "react-query";

import 'react-quill/dist/quill.snow.css';
import { deleteFile } from "../../../../systemComponents/microFunctions/deleteFile";
import { universalPatch } from "../../../../systemComponents/apiConnectors/system/PATCH";

const PartnerEditDisplay = () => {
    const [subClass309Text, setSubClass309Text] = useState("")
    const [subClass100Text, setSubClass100Text] = useState("")
    const [studentDependentText, setStudentDependentText] = useState("")
    const [workDependentText, setWorkDependentText] = useState("")
    const [showPopUp, setShowPopUp] = useState(false);

    const [imageOne, setImageOne] = useState("");
    const [imageTwo, setImageTwo] = useState("");
    const [imageThree, setImageThree] = useState("");
    const [imageFour, setImageFour] = useState("");

    const [fileOne, setFileOne] = useState<File>();
    const [fileTwo, setFileTwo] = useState<File>();
    const [fileThree, setFileThree] = useState<File>();
    const [fileFour, setFileFour] = useState<File>();

    const [noTrimmerOne, setNoTrimmerOne] = useState(true);
    const [noTrimmerTwo, setNoTrimmerTwo] = useState(true);
    const [noTrimmerThree, setNoTrimmerThree] = useState(true);
    const [noTrimmerFour, setNoTrimmerFour] = useState(true);

    const [originalImage,setOriginalImage]=useState({imageOne:"",imageTwo:"",imageThree:"",imageFour:""});

    const { data, status } = useQuery("partner-data", () => universalGet("/migration/partner"));


    const { edgestore } = useEdgeStore();

    const contextContainer = useContext(context);

    useEffect(() => {
        contextContainer.setLoading(1);
    }, [])

    const submitForm = async () => {
        contextContainer.setLoading(0);
        const updatedImages={imageOne:originalImage.imageOne,imageTwo:originalImage.imageTwo, imageThree:originalImage.imageThree, imageFour:originalImage.imageFour}

        try{
            if(fileOne){
                const {status:deleteStatus} = await deleteFile(originalImage.imageOne,edgestore);
                if(deleteStatus){
                    const {data,status:uploadStatus} = await uploadFile(fileOne,edgestore);
                    if(uploadStatus) updatedImages.imageOne=data;
                    else{
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else{
                    contextContainer.setLoading(3);
                    return;
                }
            }
            if(fileTwo){
                const {status:deleteStatus} = await deleteFile(originalImage.imageTwo,edgestore);
                if(deleteStatus){
                    const {data,status:uploadStatus} = await uploadFile(fileTwo,edgestore);
                    if(uploadStatus) updatedImages.imageTwo=data;
                    else{
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else{
                    contextContainer.setLoading(3);
                    return;
                }
            }
            if(fileThree){
                const {status:deleteStatus} = await deleteFile(originalImage.imageThree,edgestore);
                if(deleteStatus){
                    const {data,status:uploadStatus} = await uploadFile(fileThree,edgestore);
                    if(uploadStatus) updatedImages.imageThree=data;
                    else{
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else{
                    contextContainer.setLoading(3);
                    return;
                }

            }
            if(fileFour){
                const {status:deleteStatus} = await deleteFile(originalImage.imageFour,edgestore);
                if(deleteStatus){
                    const {data,status:uploadStatus} = await uploadFile(fileFour,edgestore);
                    if(uploadStatus) updatedImages.imageFour=data;
                    else{
                        contextContainer.setLoading(3);
                        return;
                    }
                }
                else{
                    contextContainer.setLoading(3);
                    return;
                }
            }
            const body = {
                subClass309Banner: updatedImages.imageOne,
                subClass309Text: subClass309Text,
                subClass100Banner: updatedImages.imageTwo,
                subClass100Text: subClass100Text,
                studentDependentBanner: updatedImages.imageThree,
                studentDependentText: studentDependentText,
                workDependentBanner: updatedImages.imageFour,
                workDependentText: workDependentText
            }
            const response = await universalPatch(body, `/admin/migration/partner/${data.partner._id}`);
            if (response?.ok) contextContainer.setLoading(2);
            else contextContainer.setLoading(3);
        }
        catch(err){
            contextContainer.setLoading(3);
        }
    }

    useEffect(()=>{
        if(status === "success"){
            setSubClass309Text(data.partner.subClass309Text);
            setSubClass100Text(data.partner.subClass100Text);
            setStudentDependentText(data.partner.studentDependentText);
            setWorkDependentText(data.partner.workDependentText);
            
            setImageOne(data.partner.subClass309Banner);
            setImageTwo(data.partner.subClass100Banner);
            setImageThree(data.partner.studentDependentBanner);
            setImageFour(data.partner.workDependentBanner);

            setOriginalImage({imageOne:data.partner.subClass309Banner, imageTwo:data.partner.subClass100Banner,imageThree:data.partner.studentDependentBanner, imageFour:data.partner.workDependentBanner})
        }
    },[status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error while student display </h5>
    else if (status === "success") {


        return (
            <form>
                <h1 className="mt-8 mb-2">  SUBCLASS 309 VISA (PARTNER PROVISIONAL VISA) banner : </h1>
                <ImageUpload fullWidth={true} setFile={setFileOne} image={imageOne} setImage={setImageOne} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                <h1 className="mt-8 mb-2">  SUBCLASS 309 VISA (PARTNER PROVISIONAL VISA) text : </h1>
                <ReactQuill value={subClass309Text} onChange={setSubClass309Text} theme="snow" className="h-[400px]" />
                <h1 className="mt-20 mb-2">  SUBCLASS 100 VISA (AUSTRALIA PARTNER VISA)  banner : </h1>
                <ImageUpload fullWidth={true} setFile={setFileTwo} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmerTwo} setNoTrimmer={setNoTrimmerTwo} />
                <h1 className="mt-8 mb-2">  SUBCLASS 100 VISA (PARTNER PROVISIONAL VISA) text : </h1>
                <ReactQuill value={subClass100Text} onChange={setSubClass100Text} theme="snow" className="h-[400px]" />
                <h1 className="mt-20 mb-2">  FOR STUDENT DEPENDENTS banner : </h1>
                <ImageUpload fullWidth={true} setFile={setFileThree} image={imageThree} setImage={setImageThree} noTrimmer={noTrimmerThree} setNoTrimmer={setNoTrimmerThree} />
                <h1 className="mt-8 mb-2">  FOR STUDENT DEPENDENTS text : </h1>
                <ReactQuill value={studentDependentText} onChange={setStudentDependentText} theme="snow" className="h-[400px]" />
                <h1 className="mt-20 mb-2">  FOR POST STUDY WORK DEPENDENTS banner : </h1>
                <ImageUpload fullWidth={true} setFile={setFileFour} image={imageFour} setImage={setImageFour} noTrimmer={noTrimmerFour} setNoTrimmer={setNoTrimmerFour} />
                <h1 className="mt-8 mb-2">  FOR POST STUDY WORK DEPENDENTS text : </h1>
                <ReactQuill value={workDependentText} onChange={setWorkDependentText} theme="snow" className="h-[400px]" />

                <div className="mt-20 flex gap-5">
                    <div onClick={(e) => {
                        e.preventDefault();
                        //form validation
                        setShowPopUp(true)
                    }}><ButtonDesign text={"Update migration/partner"} noArrow={true} /></div>
                </div>
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Edit Partner page"]} title="Partner edit" body="Are you sure you want to edit the partner page" contextContainer={contextContainer} functionLists={[submitForm]} finalMessage="The student page have been sucesfully edited" errorMessage="Error updating the partner page" />


            </form>
        )
    }
}
export default PartnerEditDisplay;