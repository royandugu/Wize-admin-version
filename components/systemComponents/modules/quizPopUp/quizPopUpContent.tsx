import { industry, automotive, buildAndCons, buisnessAndFin, civilConstruction, commercialCook } from "../../staticComponents/quizPopUpContents";
import { Dispatch, SetStateAction } from "react";
import { quizProp } from "../../types/types";

type QuizPopUpType = {
    pageNumber?: number,
    pagesData: quizProp,
    setPagesData: Dispatch<SetStateAction<quizProp>>
    labels: quizProp
}

const SquareBox = ({ texts, images, setPagesData, pagesData, keyNumber }: { texts: Array<string>, images?:Array<string>, pagesData:quizProp, setPagesData:Dispatch<SetStateAction<quizProp>>, keyNumber:number }) => {

    return (
        <div className={`flex ${texts.length>4 && 'flex-wrap'} justify-center mt-5 gap-3`}>
            {texts.map((text, i) => (
                <div key={i} className={`${(keyNumber === 0 && pagesData.yearExp === text) && 'bg-grad-one text-white'} ${(keyNumber === 1 && pagesData.placeExp === text) && 'bg-grad-one text-white'} ${(keyNumber === 2 && pagesData.state === text) && 'bg-grad-one text-white'} ${(keyNumber === 3 && pagesData.formalQualifications === text) && 'bg-grad-one text-white'} p-5 border-[3px] border-grad-one flex justify-center items-center cursor-pointer rounded-lg hover:bg-grad-one hover:text-white`} onClick={()=>{
                    if(keyNumber === 0) setPagesData({...pagesData,yearExp:text});
                    else if(keyNumber === 1) setPagesData({...pagesData,placeExp:text});
                    else if(keyNumber === 2) setPagesData({...pagesData,state:text});
                    else if(keyNumber === 3) setPagesData({...pagesData,formalQualifications:text});
                }}> 
                    {images && <img src={images[i]}/>}
                    {text} 
                </div>
            ))}
        </div>
    )
}

const PageNumberOneContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <><h1 className="text-[25px] text-grad-one"> What industry is your experience in ? </h1>
            {labels.industry !== "" && <h5 className="text-red-500"> {labels.industry} </h5>}
            <select value={pagesData.industry} className="w-full mt-2 h-[40px] bg-white border-[3px] text-center text-[rgb(130,130,130)] border-grad-one rounded-lg cursor-pointer" onChange={(e) => setPagesData({ ...pagesData, industry: e.target.value })}>
                <option value=""> Select Industry </option>
                {industry.map((ind, i) => (
                    <option key={i} value={ind}> {ind} </option>
                ))}
            </select>
            <h1 className="text-[25px] text-grad-one mt-5"> What qualification are you looking for ? </h1>
            {labels.qualification !== "" && <h5 className="text-red-500"> {labels.qualification} </h5>}
            <select value={pagesData.qualification} className="w-full mt-2 h-[40px] bg-white border-[3px] text-center text-[rgb(130,130,130)] border-grad-one rounded-lg cursor-pointer" onChange={(e) => setPagesData({ ...pagesData, qualification: e.target.value })}>
                <option value=""> Select Qualification </option>
                <option value="Not sure yet"> Not sure yet ? </option>
                {
                    pagesData.industry === "Automotive" ? automotive.map((ind, i) => (
                        <option key={i} value={ind}> {ind} </option>
                    )) : pagesData.industry === "Building & construction" ? buildAndCons.map((ind, i) => (
                        <option key={i} value={ind}> {ind} </option>
                    )) : pagesData.industry === "Buisness & Finance" ? buisnessAndFin.map((ind, i) => (
                        <option key={i} value={ind}> {ind} </option>
                    )) : pagesData.industry === "Civil Construction" ? civilConstruction.map((ind, i) => (
                        <option key={i} value={ind}> {ind} </option>
                    )) : pagesData.industry === "Commercial cookery & hospitality" && commercialCook.map((ind, i) => (
                        <option key={i} value={ind}> {ind} </option>
                    ))
                }
            </select>
        </>
    )
}

const PageNumberTwoContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one"> How many years of relevant work experience do you have ? </h1>
            {labels.yearExp !== "" && <h5 className="text-red-500"> {labels.yearExp} </h5>}
            <SquareBox texts={["1-2 years", "3-4 years", "5-9 years", "10+ years"]} setPagesData={setPagesData} pagesData={pagesData} keyNumber={0}/>
            <h1 className="text-[25px] text-grad-one mt-5"> Where is your work experience ? </h1>
            {labels.placeExp !== "" && <h5 className="text-red-500"> {labels.placeExp} </h5>}
            <SquareBox texts={["Australia", "Overseas", "Both"]} setPagesData={setPagesData} pagesData={pagesData} keyNumber={1}/>
        </>
    )
}

const PageNumberThreeContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  What state do you live in ? </h1>
            {labels.state !== "" && <h5 className="text-red-500"> {labels.state} </h5>}
            <SquareBox texts={["NSW", "VIC", "QLD", "SA","WA","ACT","NT","TAS"]} setPagesData={setPagesData} pagesData={pagesData} keyNumber={2}/>
        </>
    )
}

const PageNumberFourContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  Do you have any formal qualifications ? </h1>
            {labels.formalQualifications !== "" && <h5 className="text-red-500"> {labels.formalQualifications} </h5>}
            <SquareBox texts={["YES","NO"]} setPagesData={setPagesData} pagesData={pagesData} keyNumber={3}/>
        </>
    )
}

const PageNumberFiveContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  Enter your details </h1>
            {labels.firstName !== "" && <h5 className="text-red-500"> {labels.firstName} </h5>}
            {labels.lastName !== "" && <h5 className="text-red-500"> {labels.lastName} </h5>}
            {labels.email !== "" && <h5 className="text-red-500"> {labels.email} </h5>}
            {labels.contactNumber !== "" && <h5 className="text-red-500"> {labels.contactNumber} </h5>}
            <form className="pt-3 w-full">
                <div className="flex gap-2">
                    <input type="text" placeholder="Enter your first name*" className=" border-[2px] border-grad-one rounded-lg pl-3 pt-2 pb-2 w-full" onChange={(e)=>setPagesData({...pagesData,firstName:e.target.value})}/>
                    <input type="text" placeholder="Enter your last name*" className=" border-[2px] border-grad-one rounded-lg pl-3 pt-2 pb-2 w-full" onChange={(e)=>setPagesData({...pagesData,lastName:e.target.value})}/>
                </div>
                <input type="text" placeholder="Contact number*" className=" border-[2px] border-grad-one rounded-lg pl-3 pt-2 pb-2 mt-2 w-full" onChange={(e)=>setPagesData({...pagesData,contactNumber:e.target.value})}/>
                <input type="text" placeholder="Email*" className=" border-[2px] border-grad-one rounded-lg pl-3 pt-2 pb-2 mt-2 w-full" onChange={(e)=>setPagesData({...pagesData,email:e.target.value})}/>
                <textarea placeholder="Any questions for us?" className=" border-[2px] border-grad-one rounded-lg pl-3 pt-2 pb-2 mt-2 w-full" onChange={(e)=>setPagesData({...pagesData,questionsForUs:e.target.value})}/>   
            </form>
        </>
    )
}


const QuizPopUpContent = ({ pageNumber, pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <div className="text-center w-full">
            <div className="w-full h-[20px] mb-5 bg-[#eae5e5] rounded-xl">
                <div className="w-[50%] h-[20px] bg-grad-one rounded-xl" />
            </div>

            {pageNumber === 1 ? <PageNumberOneContent pagesData={pagesData} setPagesData={setPagesData} labels={labels} /> : pageNumber === 2 ? <PageNumberTwoContent pagesData={pagesData} setPagesData={setPagesData} labels={labels} /> : pageNumber === 3 ? <PageNumberThreeContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>:pageNumber === 4 ? <PageNumberFourContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>:<PageNumberFiveContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>}
        </div>

    )
}
export default QuizPopUpContent;