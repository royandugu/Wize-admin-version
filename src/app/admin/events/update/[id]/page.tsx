import EventCreateDisplay from "../../../../../../components/adminComponents/secondaryComponents/eventsComponents/eventCreateDisplay";

const Page=({params}:{params:{id:string}})=>{
    const {id}=params;
    return <EventCreateDisplay updateId={id}/>
}
export default Page;