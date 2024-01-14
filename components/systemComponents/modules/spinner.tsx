"use client"

type SpinnerBtn={
    button?:Boolean
}

const Spinner=(prop:SpinnerBtn)=>{
    return (
        <div className={`flex items-center justify-center ${!prop.button && 'h-[80vh]'}`}>
            <img src="/spinner.svg" className=" margin 0 auto" />
        </div>
    )
}
export default Spinner;