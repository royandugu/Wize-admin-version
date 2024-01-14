"use client"

import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import Spinner from "./spinner";
import ButtonDesign from "./buttonDesign";

type OneArgFunction = (arg1: any) => Promise<void>;

type PopUp = {
    showPopUp: boolean;
    setShowPopUp: Dispatch<SetStateAction<boolean>>;
    buttonTexts: Array<string>;
    title: string;
    body: string;
    functionLists: Array<OneArgFunction> 
    contextContainer:any;
    finalNavigation?:string
    finalMessage?:string
    errorMessage?:string
}

const PopUp = (props: PopUp) => {
    const router=useRouter();

    return (
        <>
            <div className={`absolute left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.6)] ${!props.showPopUp && 'hidden'}`} onClick={() => {
                if(props.contextContainer.loading!==0) {
                    if(props.contextContainer.loading === 2 && props.finalNavigation) {
                        console.log("Here I am");
                        console.log(props.finalNavigation);
                        return router.push(props.finalNavigation);
                    }
                    else {
                        props.contextContainer.setLoading(1);
                        props.setShowPopUp(false)
                    }
                }
            }} />
            
            <div className={`fixed top-[100px] left-1/2 bg-white border border-[rgb(200,200,200)] ${!props.showPopUp && 'hidden'}`}>
                <div className="flex justify-center items-center bg-[rgb(220,220,220)] p-2">
                    <h1 className="text-[20px]"> {props.title} </h1>
                </div>
                {props.contextContainer.loading === 1?
                <div className="p-5 flex flex-col items-center">
                    <p> {props.body} </p>
                    <div className="flex gap-2 pt-5">
                        {props.buttonTexts.map((bt: string, id: number) => (
                            <button key={id} onClick={props.functionLists[id]}>
                                <ButtonDesign noArrow={true} text={bt} />
                            </button> 
                        ))}
                    </div>
                </div>
                :props.contextContainer.loading === 0 ? <Spinner button={true}/> : props.contextContainer.loading===2?<div className="p-5"><h5 className="text-green-400"> {props.finalMessage?props.finalMessage:'Success'} </h5></div> :props.contextContainer.loading===3 && <div className="p-5"><h5 className="text-red-400"> {props.errorMessage ? props.errorMessage : 'Error'}</h5></div>}
                
            </div>
        </>
    )
}
export default PopUp;