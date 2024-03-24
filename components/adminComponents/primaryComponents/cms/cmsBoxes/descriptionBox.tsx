"use client"

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { cmsType } from "../../../../systemComponents/types/types";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const DescriptionBox = ({ index, dataContents, setDataContents }: { index:number, dataContents:Array<cmsType>, setDataContents:Dispatch<SetStateAction<Array<cmsType>>>}) => {
    const [value,setValue]=useState<string | undefined>("Description");
    let arr=[...dataContents];

    useEffect(() => {
        if (dataContents[index] && dataContents[index].description !== undefined) {
            setValue(dataContents[index].description);
        }
    }, []);

    useEffect(()=>{
        arr[index]={description:value}
        setDataContents(arr);
    },[value])

    return (
        <div className="mt-5 mb-20 flex-1">
            <ReactQuill theme="snow" className="h-[400px]" value={value} onChange={setValue} />
        </div>
    )
}
export default DescriptionBox;