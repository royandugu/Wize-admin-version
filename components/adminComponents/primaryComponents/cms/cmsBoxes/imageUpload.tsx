"use client"

import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRef } from "react";
import { cmsType } from "../../../../systemComponents/types/types";

type ImageUploadProp={
    dataContents:Array<cmsType>;
    index:number
    setDataContents:Dispatch<SetStateAction<Array<cmsType>>>
    fullWidth?:boolean
    noTrimmer:boolean;
    setNoTrimmer:Dispatch<SetStateAction<boolean>>
}

const ImageUpload=(props:ImageUploadProp)=>{

    const [image,setImage]=useState("");
  
    const imgBackgroundRef=useRef<any>(null);

    useEffect(() => {
        if (imgBackgroundRef.current) {
          imgBackgroundRef.current.style.backgroundSize = 'cover';
        }
    }, [image,imgBackgroundRef]);

    useEffect(() => {
      if (props.dataContents[props.index]) {
        const image = props.dataContents[props.index].image;
        if (typeof image === "string") {
          setImage(image);
        }
      }
    }, []);
    
    
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
          const newArray=[...props.dataContents];
          newArray[props.index]={image:event.target.files[0]};
          props.setDataContents(newArray);
          setImage(URL.createObjectURL(event.target.files[0]));
          props.setNoTrimmer(false)
        }
    }

    const trimmer = () => {
        if(props.noTrimmer) return image;
        else return image.replace('../public', '');
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