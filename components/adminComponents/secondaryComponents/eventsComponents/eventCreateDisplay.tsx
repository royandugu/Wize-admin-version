"use client"

import ImageUpload from "../../../systemComponents/modules/imageUpload";

import { useState } from "react";

import 'react-quill/dist/quill.snow.css';

import CmsDisplay from "../../primaryComponents/cms/cmsDisplay";

type EventCreateDisplay = {
    updateId?: string
}


const EventCreateDisplay = (prop: EventCreateDisplay) => {
    const [file, setFile] = useState<File | undefined>();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [location,setLocation]=useState("");
    const [googleFormUrl, setGoogleFormUrl] = useState("");
    const [noTrimmer, setNoTrimmer] = useState(true);
    const [dateTimeCombo, setDateTimeCombo] = useState({
        startDate: " ",
        startTime: " ",
        endDate: " ",
        endTime: " "
    })

    const fetchQueryName=["indv-event", prop.updateId]

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
                <input type="text" value={location} placeholder="Event location" className="p-2 mt-10 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e) => setLocation(e.target.value)} />

                <h1 className="mt-8"> Event banner : </h1>
                <ImageUpload setFile={setFile} fullWidth={true} image={image} setImage={setImage} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer} />
                <CmsDisplay fetchQueryName={fetchQueryName} updateLink="/admin/events" getLink={`/events/${prop.updateId}`} createLink="/admin/events" eventCreate={prop.updateId ? false : true} extra={{
                    setTitle,
                    setDateTimeCombo,
                    setGoogleFormUrl,
                    setImage,
                    title,
                    dateTimeCombo,
                    googleFormUrl,
                    image,
                    file,
                    location,
                    setLocation
                }} noInitialPara={true} />
            </form>
        </>
    )
}

export default EventCreateDisplay;