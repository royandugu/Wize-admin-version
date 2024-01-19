import { industry, automotive, buildAndCons, buisnessAndFin, civilConstruction, commercialCook } from "../../staticComponents/quizPopUpContents";
import { Dispatch, SetStateAction } from "react";

type QuizPopUpType = {
    pageNumber?: number,
    pagesData: { industry: string, qualification: string }
    setPagesData: Dispatch<SetStateAction<{ industry: string, qualification: string }>>
    labels: { industry: string, qualification: string }
}

const SquareBox = ({ texts, images }: { texts: Array<string>, images?:Array<string> }) => {
    return (
        <div className={`flex ${texts.length>4 && 'flex-wrap'} justify-center mt-5 gap-3`}>
            {texts.map((text, i) => (
                <div key={i} className="bg-white p-5 border-[3px] border-grad-one flex justify-center items-center cursor-pointer rounded-lg hover:bg-grad-one hover:text-white"> 
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
            <SquareBox texts={["1-2 years", "3-4 years", "5-9 years", "10+ years"]} />
            <h1 className="text-[25px] text-grad-one mt-5"> Where is your work experience ? </h1>
            <SquareBox texts={["Australia", "Overseas", "Both"]} />
        </>
    )
}

const PageNumberThreeContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  What state do you live in ? </h1>
            <SquareBox texts={["NSW", "VIC", "QLD", "SA","WA","ACT","NT","TAS"]} />
        </>
    )
}

const PageNumberFourContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  Do you have any formal qualifications ? </h1>
            <SquareBox texts={["YES","NO"]} />
        </>
    )
}

const PageNumberFiveContent = ({ pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <>
            <h1 className="text-[25px] text-grad-one">  Enter your details </h1>
            <form>
                <input type="text" placeholder=""/>
            </form>
            <SquareBox texts={["YES","NO"]} />
        </>
    )
}


const QuizPopUpContent = ({ pageNumber, pagesData, setPagesData, labels }: QuizPopUpType) => {
    return (
        <div className="text-center w-full">
            <div className="w-full h-[20px] mb-5 bg-[#eae5e5] rounded-xl">
                <div className="w-[50%] h-[20px] bg-grad-one rounded-xl" />
            </div>

            {pageNumber === 1 ?
                <PageNumberOneContent pagesData={pagesData} setPagesData={setPagesData} labels={labels} /> : pageNumber === 2 ? <PageNumberTwoContent pagesData={pagesData} setPagesData={setPagesData} labels={labels} /> : pageNumber === 3 ? <PageNumberThreeContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>:pageNumber === 4 ? <PageNumberFourContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>:<PageNumberFiveContent pagesData={pagesData} setPagesData={setPagesData} labels={labels}/>}
        </div>

    )
}
export default QuizPopUpContent;