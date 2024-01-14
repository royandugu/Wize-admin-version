"use client"

import ImageUpload from "../../../systemComponents/modules/imageUpload";
import ButtonDesign from "../../../systemComponents/modules/buttonDesign";

import dynamic from "next/dynamic";
import context from "../../../systemComponents/context/context";
import Spinner from "../../../systemComponents/modules/spinner";

import { useEffect, useState } from "react";
import { useEdgeStore } from '@/lib/edgestore';
import { useContext } from "react";
import { uploadImage } from "../../../systemComponents/microFunctions/uploadImage";
import { EventType } from "../../../systemComponents/types/types";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css';
import { universalJSONPost } from "../../../systemComponents/apiConnectors/system/POST";
import { universalIndvGet } from "../../../systemComponents/apiConnectors/system/GET";

import PopUp from "../../../systemComponents/modules/popUp";
import { deleteImage } from "../../../systemComponents/microFunctions/deleteImage";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";

type EventCreateDisplay = {
    updateId?: string
}

const EventCreateDisplay = (prop: EventCreateDisplay) => {
    const [eventBody, setEventBody] = useState("");
    const [file, setFile] = useState<File | undefined>();
    const [showPopUp, setShowPopUp] = useState(false);
    const [image,setImage]=useState("");
    const [noTrimmer,setNoTrimmer]=useState(true);
    const [prevImage,setPrevImage]=useState("");
    const [formBody, setFormBody] = useState<EventType>({
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        banner: "",
        body: ""
    })
    const [dateTimeCombo, setDateTimeCombo] = useState({
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
    })
    const [dateTimeLabel, setDateTitleLabel]=useState({
        startLabel: "",
        endLabel: ""
    
    })

    const { data, status, refetch } = useQuery(['indv-query', prop.updateId], () => universalIndvGet("/events", prop.updateId), {
        enabled: !!prop.updateId, 
    });

    const { edgestore } = useEdgeStore();

    const contextContainer = useContext(context);

    useEffect(() => {
        contextContainer.setLoading(1);
        refetch();
    }, [])

    const commonSubmitter = async (func:(body:any,url:string)=>Promise<any>,url:string,data:string) => {
        const concatenatedStartDate = dateTimeCombo.startDate + ' ' + dateTimeCombo.startTime;
        const concatenatedEndDate = dateTimeCombo.endDate + ' ' + dateTimeCombo.endTime;

        const staticFormBody = {
            ...formBody,
            startDate: new Date(concatenatedStartDate),
            endDate: new Date(concatenatedEndDate),
            banner:data,
            body: eventBody
        } 

        const response = await func(staticFormBody, url);
        return response;
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        try {
            const { data, status } = await uploadImage(file, edgestore);
            if (status) {
                const response=await commonSubmitter(universalJSONPost,"/admin/events",data);
                if (response) {
                    if (response.ok) {
                        contextContainer.setLoading(2);
                        discardForm(e);
                    }
                    else contextContainer.setLoading(3);
                }
            }
            else if (status === false) {
                contextContainer.setLoading(3);
            }
        }
        catch (err) {
            contextContainer.setLoading(3);
        }
    }

    const updateForm = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        const url=`/admin/events/${prop.updateId}`;
        try{
            if(file){
                console.log(prevImage);
                const {status:deletionStatus} = await deleteImage(prevImage,edgestore);
                console.log(deletionStatus);
                if(deletionStatus){
                    const {data,status}=await uploadImage(file,edgestore);
                    if(status) {
                        const response=await commonSubmitter(universalPatch,url,data);
                        if(response.ok){
                            contextContainer.setLoading(2);
                            discardForm(e);    
                        }
                        else contextContainer.setLoading(3);
                    }
                    else contextContainer.setLoading(3);
                }
                else contextContainer.setLoading(3)
            }
            else {
                const response=await commonSubmitter(universalPatch,url,image);
                console.log(response);
                if(response.ok){
                    contextContainer.setLoading(2);
                    discardForm(e);    
                }
                else contextContainer.setLoading(3);
            }
        }
        catch(err){
            contextContainer.setLoading(3);
        }
    }

    const discardForm = async (e: any) => {
        e.preventDefault();
        setFormBody({
            title: "",
            startDate: new Date(),
            endDate: new Date(),
            banner: "",
            body: ""
        })
        setFile(undefined);
        setEventBody("");
        setDateTimeCombo({
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: ""
        })
    }

    useEffect(()=>{
        if(status==="success"){
            formBody.title=data.title;
            setImage(data.banner);
            setEventBody(data.body);
            setPrevImage(data.banner);

            const formattedStartDate = new Date(data.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false});

            const formattedEndDate = new Date(data.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12:false});

            setDateTimeCombo(
                {...dateTimeCombo,
                    startDate:formattedStartDate.split(",")[0],
                    startTime:formattedStartDate.split(",")[1],
                    endDate:formattedEndDate.split(",")[0], 
                    endTime:formattedEndDate.split(",")[1]
                }
            )
            setDateTitleLabel({startLabel:formattedStartDate, endLabel:formattedEndDate})
        }
    },[status])

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error while fetching </h5>
    else {
        return (
            <>
                <form>
                    <input type="text" value={formBody.title} placeholder="Event title" className="p-2 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setFormBody({ ...formBody, title: e.target.value })} />
                    <div className="grid grid-cols-2 grid-rows-1 gap-2">
                        <div>
                            <div className="mt-8"> Start date & time (24-hr-format)</div>
                            {dateTimeLabel.startLabel.length > 0 && <h1 className="text-green-500"> Initially set as {dateTimeLabel.startLabel} </h1>}
                        </div>
                        <div>
                            <div className="mt-8">End date & time (24-hr-format)</div>
                            {dateTimeLabel.endLabel.length > 0 && <h1 className="text-green-500"> Initially set as {dateTimeLabel.endLabel} </h1>}
                        </div>
                        <div className="flex gap-5"> <input type="date" value={dateTimeCombo.startDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startDate: e.target.value })} /> <input type="time" value={dateTimeCombo.startTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startTime: e.target.value })} /></div>
                        <div className="flex gap-5"> <input type="date" value={dateTimeCombo.endDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endDate: e.target.value })} /> <input type="time" value={dateTimeCombo.endTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endTime: e.target.value })} /></div>
                    </div>
                    <h1 className="mt-8 mb-2"> Event banner : </h1>
                    <ImageUpload setFile={setFile} fullWidth={true} image={image} setImage={setImage} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer}/>
                    <h1 className="mt-8"> Event details : </h1>
                    <ReactQuill theme="snow" className="h-[400px]" value={eventBody} onChange={setEventBody} />
                    <div className="mt-20 flex gap-5">
                        <button onClick={(e) => {
                            e.preventDefault();
                            //form validation
                            setShowPopUp(true)
                        }}><ButtonDesign text={prop.updateId ? "Update event" : "Create event"} noArrow={true} /></button>
                        <button onClick={discardForm}><ButtonDesign text="Discard event" noArrow={true} /></button>
                    </div>

                </form>
                <PopUp title="Event Publishment" body={prop.updateId ? "Do you want to update this event ?" :"Do you want to publish this event ?"} buttonTexts={prop.updateId?["Update event"]:["Publish event"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={prop.updateId?[updateForm]:[submitForm]} contextContainer={contextContainer} finalMessage={prop.updateId ?"Your event has been updated" :"Your event has been published"} errorMessage={prop.updateId?"Error updating the event":"Error publishing your event"} finalNavigation={"/admin/events/view"} />

            </>
        )
    }
}
export default EventCreateDisplay;