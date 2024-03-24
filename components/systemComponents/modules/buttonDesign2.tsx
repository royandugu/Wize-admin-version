import { FaPlus } from "react-icons/fa6";

const ButtonDesign2=({text, booleanTrigger, showNoIcon}:{text:string, booleanTrigger?:boolean, showNoIcon?:boolean})=>{
    return(
        <div className={`flex items-center gap-5 px-5 py-3 hover:bg-primary cursor-pointer text-white ${booleanTrigger ? 'bg-primary' : "bg-secondary"}`}>
            {!showNoIcon && <FaPlus/>}
            {text}
        </div>
    )
}
export default ButtonDesign2;