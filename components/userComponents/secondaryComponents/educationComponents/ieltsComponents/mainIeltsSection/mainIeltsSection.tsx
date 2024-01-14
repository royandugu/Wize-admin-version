"use client"

import { useState } from "react";

import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";
import ButtonDesign from "../../../../../systemComponents/modules/buttonDesign";
import ImageUpload from "../../../../../systemComponents/modules/imageUpload";
import { educationProp } from "../../../../../systemComponents/types/types";


const MainIeltsSection = ({ isAdmin, textSection, setTextSection, setPictureOne, setPictureTwo, imageOne, setImageOne, imageTwo, setImageTwo }: educationProp) => {


    const [noTrimmer, setNoTrimmer] = useState(false);
    const [noTrimmer2, setNoTrimmer2] = useState(false);

    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm />
                <div className={`pl-10 pr-10 md:pr-20 ${isAdmin && 'w-full'}`}>
                    {isAdmin && <h1> Title one: </h1>}
                    {isAdmin ? <input type="text" className="p-5 bg-transparent border border-[rgb(200,200,200)]" value={textSection.titleOne} onChange={(e) => setTextSection && setTextSection({ ...textSection, titleOne: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {textSection.titleOne} </h1>}

                    {(isAdmin && setPictureOne && setImageOne) ? <><div className="mt-5" /><ImageUpload setFile={setPictureOne} fullWidth={true} image={imageOne} setImage={setImageOne} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer} /></> :
                        <img alt="girl-reading-book" src={imageOne} className="w-full mt-5 mb-5" />
                    }


                    <ul className="list-disc list-inside pt-2">
                        {isAdmin && <h1 className="mt-10"> Paragraph one: </h1>}
                        {isAdmin ? <input type="text" className="p-5 w-full bg-transparent border border-[rgb(200,200,200)]" value={textSection.paraOne} onChange={(e) => setTextSection && setTextSection({ ...textSection, paraOne: e.target.value })} /> : <h1>{textSection.paraOne}</h1>}
                        {isAdmin && <h1 className="mt-10"> Point and paragraph list: </h1>}
                        {textSection.pointParas.map((pp: any, id: number) => (
                            <div key={id}>
                                {isAdmin ? <input type="text" className="p-5 w-full mt-2 mb-3 bg-transparent border border-[rgb(200,200,200)]" value={pp.point} onChange={(e) => {
                                    const updatedPointParas = [...textSection.pointParas];
                                    updatedPointParas[id].point = e.target.value;
                                    setTextSection && setTextSection({ ...textSection, pointParas: updatedPointParas });
                                }} /> : <li className="mb-2 mt-3">{pp.point} </li>}
                                <div className="pl-4 mt-[-5px]">
                                    {isAdmin ? <textarea className="p-5 w-full" value={pp.para} onChange={(e) => {
                                        const updatedPointParas = [...textSection.pointParas];
                                        updatedPointParas[id].para = e.target.value;
                                        setTextSection && setTextSection({ ...textSection, pointParas: updatedPointParas });
                                    }} /> : <span className="text-[rgb(90,90,90)]">{pp.para}</span>}
                                </div>
                            </div>
                        ))}
                        <div className="mt-5" />
                        {isAdmin && (
                            <>
                                <button onClick={() => setTextSection && setTextSection({ ...textSection, pointParas: [...textSection.pointParas, { point: "", para: "" }] })}><ButtonDesign text="Add points" noArrow={true} /></button>
                                <button className="ml-5" onClick={() => {
                                    const updatedpointParas = [...textSection.pointParas];
                                    updatedpointParas.pop(); // Removes the last section, you can adjust this based on your requirements
                                    setTextSection && setTextSection({ ...textSection, pointParas: updatedpointParas });
                                }}><ButtonDesign text="Remove points" noArrow={true} /></button>
                            </>
                        )}
                    </ul>
                    {isAdmin && <h1 className="mt-10"> Title three: </h1>}
                    {isAdmin ? <input type="text" className="p-5 w-full bg-transparent border border-[rgb(200,200,200)]" value={textSection.paraTwo} onChange={(e) => setTextSection && setTextSection({ ...textSection, paraTwo: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {textSection.paraTwo}  </h1>}

                    {(isAdmin && setPictureTwo && setImageTwo) ? <><div className="mt-5" /><ImageUpload setFile={setPictureTwo} fullWidth={true} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmer2} setNoTrimmer={setNoTrimmer2} /></> :
                        <img alt="girl-reading-book" src={imageTwo} className="w-full mt-5 mb-5" />
                    }
                    <ul className="list-disc list-inside pt-2">
                        {isAdmin && <h1 className="mt-10"> Paragraph two: </h1>}

                        {isAdmin ? <input type="text" className="p-5 w-full bg-transparent border border-[rgb(200,200,200)]" value={textSection.paraTwo} onChange={(e) => setTextSection && setTextSection({ ...textSection, paraTwo: e.target.value })} /> : <h1>{textSection.paraTwo}</h1>}
                        {isAdmin && <h1 className="mt-10"> Point and paragraph section: </h1>}

                        {textSection.pointParas2.map((pp: any, id: number) => (
                            <div key={id}>
                                {isAdmin ? <input type="text" className="p-5 w-full mt-2 mb-3 bg-transparent border border-[rgb(200,200,200)]" value={pp.point} onChange={(e) => {
                                    const updatedPointParas = [...textSection.pointParas2];
                                    updatedPointParas[id].point = e.target.value;
                                    setTextSection && setTextSection({ ...textSection, pointParas2: updatedPointParas });
                                }} /> : <li className="mb-2 mt-3">{pp.point} </li>}
                                <div className="pl-4 mt-[-5px]">
                                    {isAdmin ? <textarea className="p-5 w-full" value={pp.para} onChange={(e) => {
                                        const updatedPointParas = [...textSection.pointParas2];
                                        updatedPointParas[id].para = e.target.value;
                                        setTextSection && setTextSection({ ...textSection, pointParas2: updatedPointParas });
                                    }} /> : <span className="text-[rgb(90,90,90)]">{pp.para}</span>}
                                </div>
                            </div>
                        ))}
                        <div className="mt-5" />
                        {isAdmin &&
                            <>
                                <button onClick={() => setTextSection && setTextSection({ ...textSection, pointParas2: [...textSection.pointParas2, { point: "", para: "" }] })}><ButtonDesign text="Add points" noArrow={true} /></button>

                                <button className="ml-5" onClick={() => {
                                    const updatedPointParas2 = [...textSection.pointParas2];
                                    updatedPointParas2.pop(); // Removes the last section, you can adjust this based on your requirements
                                    setTextSection && setTextSection({ ...textSection, pointParas2: updatedPointParas2 });
                                }}><ButtonDesign text="Remove points" noArrow={true} /></button>
                            </>
                        }
                    </ul>
                    {isAdmin && <h1 className="mt-10"> Title four: </h1>}
                    {isAdmin ? <input type="text" className="p-5 w-full bg-transparent border border-[rgb(200,200,200)]" value={textSection.titleThree} onChange={(e) => setTextSection && setTextSection({ ...textSection, titleThree: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {textSection.titleThree}  </h1>}

                    {isAdmin && <h1 className="mt-10"> Paragraph three: </h1>}
                    {isAdmin ? <textarea className="w-full h-[100px] p-5" value={textSection.paraThree} onChange={(e) => setTextSection && setTextSection({ ...textSection, paraThree: e.target.value })} /> : <p className="mt-2"> {textSection.paraThree} </p>}

                </div>
            </div>
        </div>
    )
}
export default MainIeltsSection;