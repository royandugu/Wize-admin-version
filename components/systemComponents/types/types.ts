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
