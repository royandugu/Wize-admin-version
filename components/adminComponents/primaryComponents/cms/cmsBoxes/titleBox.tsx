import { Dispatch, SetStateAction } from "react";
import { cmsType } from "../../../../systemComponents/types/types";

const TitleBox=({placeholder, index, dataContents, setDataContents}:{placeholder:string, index:number, dataContents:Array<cmsType>, setDataContents:Dispatch<SetStateAction<Array<cmsType>>>})=>{
    return(
        <input type="text" value={dataContents[index] ? dataContents[index].title : ""} placeholder={placeholder} className="p-2 mt-2 border border-[rgb(200,200,200)] w-full h-[40px]" onChange={(e)=>{
            const newArray=[...dataContents];
            newArray[index]={title:e.target.value}
            setDataContents(newArray);
        }}/>
    )
}
export default TitleBox;