"use client"

import ImageUpload from "../../../systemComponents/modules/imageUpload";
import context from "../../../systemComponents/context/context";
import Spinner from "../../../systemComponents/modules/spinner";

import { useEffect, useState } from "react";
import { useEdgeStore } from '@/lib/edgestore';
import { useContext } from "react";
import { uploadFile } from "../../../systemComponents/microFunctions/uploadFile";
import { EventType } from "../../../systemComponents/types/types";
import { useQuery } from "react-query";

import 'react-quill/dist/quill.snow.css';
import { universalIndvGet } from "../../../systemComponents/apiConnectors/system/GET";

import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";
import { universalPatch } from "../../../systemComponents/apiConnectors/system/PATCH";

import CmsDisplay from "../../primaryComponents/cms/cmsDisplay";

type EventCreateDisplay = {
    updateId?: string
}


const EventCreateDisplay = (prop: EventCreateDisplay) => {
    const [eventBody, setEventBody] = useState("");
    const [file, setFile] = useState<File | undefined>();
    const [image,setImage]=useState("");
    const [title,setTitle]=useState("");
    const [googleFormUrl,setGoogleFormUrl]=useState("");
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
        startDate: " ",
        startTime: " ",
        endDate: " ",
        endTime: " "
    })

    const { data, status, refetch } = useQuery(['indv-query', prop.updateId], () => universalIndvGet("/events", prop.updateId), {
        enabled: !!prop.updateId, 
    });

    console.log(data);

    const { edgestore } = useEdgeStore();
 
    const contextContainer = useContext(context);

    useEffect(()=>{
        if(prop.updateId && status === "success"){
            setTitle(data.content.title);
            setGoogleFormUrl(data.content.googleFormUrl);
            setDateTimeCombo({
                startDate:data.content.startDate.split('T')[0],
                startTime:data.content.startDate.split('T')[1].split('.')[0],
                endDate:data.content.endDate.split('T')[0],
                endTime:data.content.endDate.split('T')[1].split('.')[0]
            })
            setImage(data.content.banner);
        }
    },[prop.updateId, status])

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


    const updateForm = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        const url=`/admin/events/${prop.updateId}`;
        try{
            if(file){
                console.log(prevImage);
                const {status:deletionStatus} = await deleteFile(prevImage,edgestore);
                console.log(deletionStatus);
                if(deletionStatus){
                    const {data,status}=await uploadFile(file,edgestore);
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


    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error while fetching </h5>
    else {
        return (
            <>
                <form className="mt-20">
                    <input type="text" value={title} placeholder="Event title" className="p-2 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setTitle(e.target.value)} />
                    <div className="grid grid-cols-2 grid-rows-1 gap-2">
                        <div className="mt-8"> Start date & time</div>
                        <div className="mt-8">End date & time</div>    
                        <div className="flex gap-5"> <input type="date" value={dateTimeCombo.startDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startDate: e.target.value })} /> <input type="time" value={dateTimeCombo.startTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, startTime: e.target.value })} /></div>
                        <div className="flex gap-5"> <input type="date" value={dateTimeCombo.endDate} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endDate: e.target.value })} /> <input type="time" value={dateTimeCombo.endTime} className="p-2 border border-[rgb(200,200,200)]" onChange={(e) => setDateTimeCombo({ ...dateTimeCombo, endTime: e.target.value })} /></div>
                    </div>
                    <input type="text" value={googleFormUrl} placeholder="Google form url" className="p-2 mt-10 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setGoogleFormUrl(e.target.value)} />
                    
                    <h1 className="mt-8"> Event banner : </h1>
                    <ImageUpload setFile={setFile} fullWidth={true} image={image} setImage={setImage} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer}/>
                    <CmsDisplay fetchQueryName="some" updateLink="some" getLink={`/events/${prop.updateId}`} createLink="/admin/events" eventCreate={true} extra={{
                        dateTimeCombo,
                        file,
                        title
                    }}/>
                </form>        
            </>
        )
    }
}
export default EventCreateDisplay;