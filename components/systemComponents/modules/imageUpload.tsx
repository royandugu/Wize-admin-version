"use client"

import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRef } from "react";

type ImageUploadProp={
    setFile:Dispatch<SetStateAction<File | undefined>>
    fullWidth?:boolean
    image:string;
    setImage:Dispatch<SetStateAction<string>>
    noTrimmer:boolean;
    setNoTrimmer:Dispatch<SetStateAction<boolean>>
}

const ImageUpload=(props:ImageUploadProp)=>{
  
    const imgBackgroundRef=useRef<any>(null);

    useEffect(() => {
        if (imgBackgroundRef.current) {
          imgBackgroundRef.current.style.backgroundSize = 'cover';
        }
    }, [props.image,imgBackgroundRef]);
    
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
          props.setFile(event.target.files[0]);
          props.setImage(URL.createObjectURL(event.target.files[0]));
          props.setNoTrimmer(false)
        }
    }

    const trimmer = () => {
        if(props.noTrimmer) return props.image;
        else return props.image.replace('../public', '');
    }
    
    return(
        <label className="fileType mb-20 h-[300px] w-[200px]">
          <div ref={imgBackgroundRef} className={`currentImgBackground h-[300px] w-[200px] flex justify-center items-center border border-[rgb(200,200,200)] ${props.fullWidth ? 'w-full' : 'w-[200px]'}`} style={{background:`url(${trimmer()})`}}>
            <div className="text-black">
              <AiOutlinePlusCircle className="plusIcon" style={{ fontSize: 100 }} />
            </div>
          </div>
          <input type="file" className="noBorder" onChange={(e) => onImageChange(e)} />
        </label>
    )
}
export default ImageUpload;