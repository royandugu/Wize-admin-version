interface SecondaryTitleDesignProps {
    page: string,
    changeBg?:boolean,
    para?:string
}
const SecondaryTitleDesign = (props: SecondaryTitleDesignProps) => {
    return (
        <div className={props.changeBg ? 'backgroundTwo' : 'backgroundOne'}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-24 pt-48 md:pt-72 pb-20 pr-[20%]">
                <div className="pl-[20%]" data-aos="fade-left">
                    <h1 className="uppercase text-[25px] xl+70:text-[45px] md:leading-3 mt-5 font-bold"> {props.page === "about" ? 'About us': props.page==="events" ? 'EVENTS' : props.page === "ielts" ? 'IELTS CLASSES IN NEPAL' : props.page === "py" ? "PY CLASSES IN NEPAL" : props.page === "pte" ? 'PTE CLASSESS IN NEPAL' : props.page === "Student" ? "STUDENT VISA" : props.page==="Partner" ? 'PARTNER VISA' : props.page === "TR" ? 'TEMPORARY RESIDENCE' : props.page === "Visitor" ? "VISITOR VISA" : props.page === "Occupation" ? "OCCUPATION VISA" : props.page}</h1>
                    <p className=" mt-10 uppercase text-[15px]"> {props.para} </p>
                </div>
                <div className="flex gap-5" data-aos="fade-right">
                    <h5 className="xl+70:text-[20px] text-[15px]"> Home </h5>
                    <h5 className="xl+70:text-[20px] text-[15px]"> | </h5>
                    <h5 className="xl+70:text-[20px] text-[15px] capitalize text-grad-one"> {props.page} </h5>
                </div>
            </div>
        </div>
    )
}
export default SecondaryTitleDesign;