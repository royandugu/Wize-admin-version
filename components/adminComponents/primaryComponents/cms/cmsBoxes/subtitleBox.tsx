"use client"

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";
import { cmsType } from "../../../../systemComponents/types/types";
import { useState, useEffect } from "react";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const SubtitleBox = ({ index, dataContents, setDataContents }: { index:number, dataContents:Array<cmsType>, setDataContents:Dispatch<SetStateAction<Array<cmsType>>>}) => {
    const [value,setValue]=useState("Subtitle");
    let arr=[...dataContents];

    useEffect(()=>{
        arr[index]={subtitle:value}
        setDataContents(arr);
    },[value])


    return (
        <div className="mt-5 mb-20 flex-1">
            <ReactQuill theme="snow" className="h-[200px]" value={value} onChange={setValue} />
        </div>
    )
}
export default SubtitleBox;