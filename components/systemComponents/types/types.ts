import { Dispatch, SetStateAction } from "react";

export type EventType = {
    _id?:string;
    title: string;
    startDate: Date;
    endDate: Date;
    banner: string;
    body: string;
}

export type defaultApiResponse={
    message:string;
    status:number;
    bodyData?:any;
}

export type login={
    email:string,
    password:string
}

export type educationProp = {
    isAdmin?: boolean,
    textSection: any,
    setTextSection?: Dispatch<SetStateAction<any>>,
    pictureOne?: File | undefined,
    setPictureOne?: Dispatch<SetStateAction<File | undefined>>,
    pictureTwo?: File | undefined,
    setPictureTwo?: Dispatch<SetStateAction<File | undefined>>,
    imageOne: string
    setImageOne?: Dispatch<SetStateAction<string>>,
    imageTwo: string
    setImageTwo?: Dispatch<SetStateAction<string>>
}

export type quizProp={
    industry:string,
    qualification:string,
    yearExp:string,
    placeExp:string,
    state:string, 
    formalQualifications:string,
    firstName:string,
    lastName:string,
    contactNumber:string,
    email:string,
    questionsForUs?:string,
    qualificationText?:String,
    resumeLocation?:String
}

export type cmsType={
    title?:string,
    subtitle?:string,
    image?:File | string,
    description?:string
}

