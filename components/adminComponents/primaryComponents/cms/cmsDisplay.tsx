"use client"

import { useContext, useState, useEffect, SetStateAction } from "react";
import { cmsType } from "../../../systemComponents/types/types";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";
import { useEdgeStore } from "@/lib/edgestore";
import { uploadFile } from "../../../systemComponents/microFunctions/uploadFile";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useQuery } from "react-query";
import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";

import TitleBox from "./cmsBoxes/titleBox";
import SubtitleBox from "./cmsBoxes/subtitleBox";
import DescriptionBox from "./cmsBoxes/descriptionBox";
import ImageUpload from "./cmsBoxes/imageUpload";
import ButtonDesign2 from "../../../systemComponents/modules/buttonDesign2";
import CmsDropDown from "./cmsDropDown/cmsDropDown";
import context from "../../../systemComponents/context/context";
import PopUp from "../../../systemComponents/modules/popUp";
import Spinner from "../../../systemComponents/modules/spinner";
import InitialParagraphBox from "./cmsBoxes/initialParagrahBox";

/* 
    Extra vanne field le determine garxa whether this CMS belongs to the event page or the education and other pages
*/

/* 
  test cases 

    event create garda image delete nahune
    ra aru haru mah image delete hune 


    NOTE :: 
    Baru GET URL correct pathayera setTitle setBanner haru sabai yei cmsDisplay mah pathayera, baru fetching yesmai garne. 
*/

import { Dispatch } from "react";

import 'react-quill/dist/quill.snow.css';
import { universalJSONPost } from "../../../systemComponents/apiConnectors/system/POST";

type extra = {
    setTitle: Dispatch<SetStateAction<string>>,
    setImage: Dispatch<SetStateAction<string>>,
    setDateTimeCombo: Dispatch<SetStateAction<{ startDate: string, startTime: string, endDate: string, endTime: string }>>
    setGoogleFormUrl: Dispatch<SetStateAction<string>>
    title: string,
    image: string,
    dateTimeCombo: { startDate: string, startTime: string, endDate: string, endTime: string },
    googleFormUrl: string,
    file: File | undefined,
    location:string,
    setLocation:Dispatch<SetStateAction<string>>
}


const CmsDisplay = ({ updateLink, getLink, fetchQueryName, eventCreate, extra, createLink, noInitialPara }: { updateLink: string, getLink: string, fetchQueryName: string | (string | undefined)[] , eventCreate?: boolean, extra?: extra, createLink?: string, noInitialPara?: boolean }) => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [dataContents, setDataContents] = useState<Array<cmsType>>([]);
    const [initialPara, setInitialPara] = useState<string>("");
    const [noTrimmerOne, setNoTrimmerOne] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [imageTrackRecord, setImageTrackRecord] = useState<Array<{ image: string, index: number }>>([]);

    const contextContainer = useContext(context);

    const { data, status } = useQuery(fetchQueryName, () => universalGet(getLink), { enabled: !eventCreate });

    const { edgestore } = useEdgeStore();

    useEffect(() => {
        if (status === "success") {

            extra?.setTitle(data.data.content.title);
            extra?.setGoogleFormUrl(data.data.content.googleFormUrl);
            extra?.setDateTimeCombo({
                startDate: data.data.content.startDate.split('T')[0],
                startTime: data.data.content.startDate.split('T')[1].split('.')[0],
                endDate: data.data.content.endDate.split('T')[0],
                endTime: data.data.content.endDate.split('T')[1].split('.')[0]
            })
            extra?.setLocation(data.data.content.location);
            extra?.setImage(data.data.content.banner);

            data.data.content.cms.forEach((cnts: any, index: number) => {
                if (typeof cnts.image === 'string') setImageTrackRecord(prevContainer => [...prevContainer, { image: cnts.image, index: index }]);
            });
            setDataContents(data.data.content.cms);
        }
    }, [status])

    const submitForm = async () => {
        let revert = false;
        let index = 0;
        const body: any = {};
        contextContainer.setLoading(0);
        try {
            if (extra) {
                if (extra.file) {
                    const { data: eventBannerData, status: eventBannerUploadStatus } = await uploadFile(extra.file, edgestore);
                    if (eventBannerUploadStatus) {
                        body.banner = eventBannerData;
                    }
                    else {
                        contextContainer.setLoading(3);
                        return;
                    }

                }
                else body.banner = extra.image;
                body.title = extra.title;
                body.googleFormUrl = extra.googleFormUrl;
                body.location=extra.location;
                body.startDate = new Date(extra.dateTimeCombo.startDate + ' ' + extra.dateTimeCombo.startTime);
                body.endDate = new Date(extra.dateTimeCombo.endDate + ' ' + extra.dateTimeCombo.endTime);

            }

            const promises = dataContents.map(async (cnts, index: number) => {
                if (cnts.image && cnts.image instanceof File && typeof cnts === 'object') {

                    if (!eventCreate && imageTrackRecord.some(item => item.index === index)) {
                        const { status: imageDeleteStatus } = await deleteFile(imageTrackRecord[index].image, edgestore);
                        if (!imageDeleteStatus) {
                            revert = true;
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
                if (!noInitialPara) body.initialPara = initialPara;
                body.cms = dataContents;
                const response = (eventCreate && createLink) ? await universalJSONPost({ content: body }, createLink) : await universalPatch({ content: body }, `${updateLink}/${data.data._id}`);
                index++;
                if (response?.ok) contextContainer.setLoading(2);
                else contextContainer.setLoading(3);
            } else {
                contextContainer.setLoading(3);
            }
        } catch (err) {
            console.log(err);
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
    else if (status === "error") return <h5> Error fetching data </h5>
    else if (status === "success" || eventCreate) {
        return (
            <>
                <div className="fixed bg-white left-[17rem] right-0 pl-[2rem] z-1 pr-[3.27rem] pb-5 pt-20 shadow top-0">
                    <div className="flex items-center justify-between">
                        <div className="relative w-1/6 top-0 ml-9">
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
                </div>
                <div className={`${eventCreate ? 'pt-10' : 'pt-20'}`}>
                    {!eventCreate && !noInitialPara && (<>
                        <h5> Initial Paragraph : </h5>
                        <InitialParagraphBox dataContents={data?.data?.content.initialPara} setDataContents={setInitialPara} /> </>)}
                    <h5> CMS contents : </h5>
                    {dataContents.map((cnts, indx: number) => (
                        <div className="flex relative gap-5 items-center" key={indx}>
                            <div className="flex gap-3 items-center">
                                <div className="flex flex-col items-center justify-center">
                                    <FaCaretUp className="cursor-pointer opacity-30 hover:opacity-100" onClick={() => handleMoveUp(indx)} />
                                    <FaCaretDown className=" cursor-pointer opacity-30 hover:opacity-100" onClick={() => handleMoveDown(indx)} />
                                </div>
                            </div>

                            {cnts.title !== undefined && <TitleBox placeholder="Enter the title" index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                            {cnts.subtitle !== undefined && <SubtitleBox index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                            {cnts.description !== undefined && <DescriptionBox index={indx} dataContents={dataContents} setDataContents={setDataContents} />}
                            {cnts.image !== undefined && (
                                <div className="mt-5 flex-1">
                                    <ImageUpload dataContents={dataContents} index={indx} setDataContents={setDataContents} fullWidth={true} noTrimmer={noTrimmerOne} setNoTrimmer={setNoTrimmerOne} />
                                </div>
                            )}
                            <div className={`absolute ${cnts.title ? 'top-[-7px]' : 'top-[5px]'} right-[-15px] opacity-50 hover:opacity-100 cursor-pointer bg-red-400 p-2 text-white rounded-full`} onClick={() => removeFunction(indx)}>
                                <RxCross1 />
                            </div>
                        </div>
                    ))}
                </div>
                <PopUp title="Create/Update pop-up" body={"Do you want to create/update the changes ?"} buttonTexts={["Create/Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The page has been created/updated"} errorMessage={"Error creating/updating the page"} />
            </>
        )
    }
}
export default CmsDisplay;