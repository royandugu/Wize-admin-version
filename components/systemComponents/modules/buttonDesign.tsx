import { AiOutlineArrowRight } from "react-icons/ai"

interface ButtonDesignProps{
    text:string,
    noArrow?:boolean;
}

const ButtonDesign = ({text,noArrow}:ButtonDesignProps) => {
    return (
        <button className={`mainGradient ${noArrow? 'pl-7 pr-7 pt-2 pb-2' : 'pl-10 pr-3 pt-1 pb-1'} text-white rounded-md flex align-center justify-between`}>
            {(text) && text.split(' ').map((word, index) => (
                <span key={index}>
                    {word}
                    {index < text.split(' ').length - 1 && <>&nbsp;</>}
                </span>
            ))}
            
            {!noArrow && <div className="bg-grad-two p-1 ml-3"> <AiOutlineArrowRight /> </div>}
        </button>
    )
}

export default ButtonDesign;