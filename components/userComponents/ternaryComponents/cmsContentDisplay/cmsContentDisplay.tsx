"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../systemComponents/modules/spinner";
import StudyAbroadForm from "../studyAbroadForm";
import { cmsType } from "../../../systemComponents/types/types";
import parse from "html-react-parser"
import SecondaryTitleDesign from "../../../systemComponents/modules/secondaryTitleDesign";


const CmsContentDisplay = ({ url, fetchkey, noStudyAbroadForm, page }: { url: string, fetchkey: string, noStudyAbroadForm?:boolean,page:string }) => {
    const { data, status } = useQuery(fetchkey, () => universalGet(url));
    if (status === "loading") return <Spinner />
    else if (status === "error") return <h5> Error fetching education data </h5>
    return (
        <>
            <SecondaryTitleDesign page={page} changeBg={true} para={data.data.content.initialPara}/>
            <div className="bg-sky-bg pt-10 pb-10">
                <div className="flex flex-col md:flex-row">
                    {!noStudyAbroadForm && <StudyAbroadForm />}
                    <div className="pl-10 pr-10 md:pr-20">
                        {data.data.content.cms.map((cnt: cmsType, int: number) => (
                            <>
                                {cnt.title && <h1 className="text-[2.5rem]"> {cnt.title} </h1>}
                                {cnt.subtitle && <div className="mt-5"> {parse(cnt.subtitle)} </div>}
                                {cnt.description && <div className="mt-5"> {parse(cnt.description)} </div>}
                                {cnt.image && typeof cnt.image === "string" && <img src={cnt.image} className="w-full mt-5"/>}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </> 
    )
}
export default CmsContentDisplay;