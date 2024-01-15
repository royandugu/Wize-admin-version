import parse from "html-react-parser";
import "../../migrationComponents/migration.css";

type mainIndvEventSectionProps={
    image:string,
    body:string,
    startDate:Date,
    endDate:Date
}

const MainIndvEventSection=({image,body,startDate,endDate}:mainIndvEventSectionProps)=>{    
    return(
        <div className="bg-sky-bg p-20 pt-10">
            <div className="h-[500px] rounded-xl" style={{background:`url(${image})`,backgroundSize:'cover'}}/>
            <h1 className="text-[20px] mt-10"> <span className="font-bold">Start Date : </span> <span className="text-grad-one">{new Date(startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })}</span></h1>
            <h1 className="text-[20px] mt-10"> <span className="font-bold">End Date : </span> <span className="text-grad-one">{new Date(endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false })}</span></h1>
            <div className="ulContainer">{parse(body)}</div>
        </div>
    )
}
export default MainIndvEventSection;