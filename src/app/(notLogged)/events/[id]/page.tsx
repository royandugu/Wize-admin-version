import IndvEventSection from "../../../../../components/userComponents/secondaryComponents/eventsComponents/indvEventSection/indvEventSection";

const Page=({params}:{params:{id:string}})=>{
    const {id}=params;

    return <IndvEventSection id={id}/>
}
export default Page;