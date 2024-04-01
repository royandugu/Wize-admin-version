import dynamic from 'next/dynamic';

const EventCreateDisplay = dynamic(() => import('../../../../../components/adminComponents/secondaryComponents/eventsComponents/eventCreateDisplay'), { ssr: false })

const Page=()=>{
    return <EventCreateDisplay/>
}
export default Page;