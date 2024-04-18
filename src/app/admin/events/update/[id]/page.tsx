import dynamic from 'next/dynamic';

const EventCreateDisplay = dynamic(() => import('../../../../../../components/adminComponents/secondaryComponents/eventsComponents/eventCreateDisplay'), { ssr: false })

const Page=({params}:{params:{id:string}})=>{
    const {id}=params;
    return <EventCreateDisplay updateId={id}/>
}
export default Page;