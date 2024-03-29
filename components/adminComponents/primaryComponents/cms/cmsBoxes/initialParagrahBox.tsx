"use client"

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const InitialParagraphBox = ({ dataContents, setDataContents }: { dataContents:string, setDataContents:Dispatch<SetStateAction<string>>}) => {
    const [value,setValue]=useState<string>(dataContents);
    
    useEffect(() => {
        setDataContents(value);
    }, [value]);

    return (
        <div className="mt-5 mb-20 flex-1">
            <ReactQuill theme="snow" className="h-[400px]" value={value} onChange={setValue} />
        </div>
    )
}
export default InitialParagraphBox;