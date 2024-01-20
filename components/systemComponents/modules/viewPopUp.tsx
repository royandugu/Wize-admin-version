"use client" 

import { Dispatch, SetStateAction } from "react";
import { universalIndvGet } from "../apiConnectors/system/GET";
import { useQuery } from "react-query";

import Spinner from "./spinner";

type ViewPopUpType = {
    showPopUp: boolean;
    setShowPopUp: Dispatch<SetStateAction<boolean>>;
    url: string;
    id: string;
}


const ViewPopUp = (props: ViewPopUpType) => {
    const { data, status } = useQuery(['indv-query', props.id], () => universalIndvGet(`/admin/quiz`, props.id), {
        enabled: !!props.id,
    });

    return (
            <>
                <div className={`fixed left-[-12px] right-[-12px] inset-0 bg-[rgba(0,0,0,.6)] ${!props.showPopUp && 'hidden'}`} onClick={() => props.setShowPopUp(false)} />
                <div className={`fixed top-1/3 left-1/2 border-[3px] border-grad-one rounded-lg bg-white p-5 ${!props.showPopUp && 'hidden'}`}>
                    {
                        status === "loading" ? <Spinner button={true}/> : status === "error" ? <h5> Fetching error </h5> : status === "success" && (
                            <div>
                                <h1 className="mt-5"> <span className="font-bold">Industry :</span> {data.industry} </h1>
                                <h1 className="mt-5"> <span className="font-bold">Qualification :</span> {data.qualification} </h1>
                                <h1 className="mt-5"> <span className="font-bold">Year Exp :</span> {data.yearExp} </h1>
                                <h1 className="mt-5"> <span className="font-bold">Place Exp :</span> {data.placeExp} </h1>
                                <h1 className="mt-5"> <span className="font-bold">State : </span>{data.state} </h1>
                                <h1 className="mt-5"> <span className="font-bold">Formal Qualifications :</span> {data.formalQualifications} </h1>
                                <h1 className="mt-5 mb-5"> <span className="font-bold">Question :</span> {data.questionsForUs} </h1>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }

export default ViewPopUp;