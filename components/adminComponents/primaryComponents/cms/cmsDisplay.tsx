"use client"

import { useContext, useEffect, useState } from "react";
import { cmsType } from "../../../systemComponents/types/types";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";
import { useEdgeStore } from "@/lib/edgestore";
import { uploadFile } from "../../../systemComponents/microFunctions/uploadFile";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useQuery } from "react-query";

import TitleBox from "./cmsBoxes/titleBox";
import SubtitleBox from "./cmsBoxes/subtitleBox";
import DescriptionBox from "./cmsBoxes/descriptionBox";
import ImageUpload from "./cmsBoxes/imageUpload";
import ButtonDesign2 from "../../../systemComponents/modules/buttonDesign2";
import CmsDropDown from "./cmsDropDown/cmsDropDown";
import context from "../../../systemComponents/context/context";
import PopUp from "../../../systemComponents/modules/popUp";
import Spinner from "../../../systemComponents/modules/spinner";

import 'react-quill/dist/quill.snow.css';
import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";

const CmsDisplay = ({ updateLink, getLink, fetchQueryName }: { updateLink: string, getLink: string, fetchQueryName: string }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [dataContents, setDataContents] = useState<Array<cmsType>>([]);
    const [noTrimmerOne, setNoTrimmerOne] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [imageTrackRecord, setImageTrackRecord] = useState<Array<{ image: string, index: number }>>([]);

    const contextContainer = useContext(context);

    const { data, status } = useQuery(fetchQueryName, () => universalGet(getLink));
    const { edgestore } = useEdgeStore();

    useEffect(() => {
        if (status === "success") {
            data.data.content.forEach((cnts: any, index: number) => {
                if (typeof cnts.image === 'string') setImageTrackRecord(prevContainer => [...prevContainer, { image: cnts.image, index: index }]);
            });
            setDataContents(data.data.content);
        }
    }, [status])

    const submitForm = async () => {
        let revert = false;
        let index = 0;

        contextContainer.setLoading(0);
        try {
            const promises = dataContents.map(async (cnts, index:number) => {
                if (cnts.image && cnts.image instanceof File && typeof cnts === 'object') {
                    
                    if(imageTrackRecord.some(item => item.index === index)){
                        const {status:imageDeleteStatus} = await deleteFile(imageTrackRecord[index].image, edgestore);
                        if(!imageDeleteStatus){
                            revert=true;
                            return;
                        }
                    }
                    const { data: imageOneUrl, status: imageOneStatus } = await uploadFile(cnts.image, edgestore);
                    if (imageOneStatus) {
                        cnts.image = imageOneUrl;
                        ++index;
                    } else {
                        contextContainer.setLoading(3);
                        revert = true;
                        return;
                    }
                }
            });

            await Promise.all(promises);

            if (!revert) {
                const response = await universalPatch({ content: dataContents }, `${updateLink}/${data.data._id}`);
                index++;
                console.log(index);
                if (response?.ok) contextContainer.setLoading(2);
                else contextContainer.setLoading(3);
            } else {
                contextContainer.setLoading(3);
            }
        } catch (err) {
            contextContainer.setLoading(3);
        }
    }

    const handleMoveUp = (index: number) => {
        if (index > 0) {
            const updatedDataContents = [...dataContents];
            const tempData = updatedDataContents[index];
            updatedDataContents[index] = updatedDataContents[index - 1];
            updatedDataContents[index - 1] = tempData;
            setDataContents(updatedDataContents);
        }
    };

    const handleMoveDown = (index: number) => {
        if (index < dataContents.length - 1) {
            const updatedDataContents = [...dataContents];
            const tempData = updatedDataContents[index];
            updatedDataContents[index] = updatedDataContents[index + 1];
            updatedDataContents[index + 1] = tempData;
            setDataContents(updatedDataContents);
        }
    };

    const removeFunction = (index: number) => {
        const newDataArray = [...dataContents];
        newDataArray.splice(index, 1);
        setDataContents(newDataArray);
    }

    if (status === "loading") return <Spinner />
    if (status === "success") {
        return (
            <>
                <div className="flex items-center justify-between">
                    <div className="relative w-1/6 top-0 ml-9 mb-5">
                        <div onClick={(e) => {
                            e.preventDefault();
                            setShowDropDown(!showDropDown)
                        }}>
                            <ButtonDesign2 text="Add context" booleanTrigger={showDropDown} />
                        </div>
                        <CmsDropDown isOpen={showDropDown} setContainer={setDataContents} />
                    </div>
                    <div onClick={() => setShowPopUp(true)}>
                        <ButtonDesign2 text="Save" showNoIcon={true} />
                    </div>
                </div>
                {dataContents.map((cnts, indx: number) => (
                    <div className="flex relative gap-5 items-center" key={indx}>
                        <div className="flex gap-3 items-center">
                            <div className="flex flex-col items-center justify-center">
                                <FaCaretUp className="cursor-pointer opacity-30 hover:opacity-100" onClick={() => handleMoveUp(indx)} />
                                <FaCaretDown className=" cursor-pointer opacity-30 hover:opacity-100" onClick={() => handleMoveDown(indx)} />
                            </div>
                        </div>
                        {cnts.title!==undefined && <TitleBox placeholder="Enter the title" index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                        {cnts.subtitle!==undefined && <SubtitleBox index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                        {cnts.description!==undefined && <DescriptionBox index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                        {cnts.image!==undefined && (
                            <div className="mt-5 flex-1">
                                <ImageUpload dataContents={dataContents} index={indx} setDataContents={setDataContents} fullWidth={true} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                            </div>
                        )}
                        <div className={`absolute ${cnts.title ? 'top-[-7px]' : 'top-[5px]'} right-[-15px] opacity-50 hover:opacity-100 cursor-pointer bg-red-400 p-2 text-white rounded-full`} onClick={() => removeFunction(indx)}>
                            <RxCross1 />
                        </div>
                    </div>
                ))}
                <PopUp title="Update pop-up" body={"Do you want to update the page ?"} buttonTexts={["Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The page has been updated"} errorMessage={"Error updating the page"} />
            </>
        )
    }
}
export default CmsDisplay;