"use client"

import { useQuery,useQueryClient } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useState, useContext, useEffect } from "react";
import { deleteFile } from "../../../systemComponents/microFunctions/deleteFile";
import { useEdgeStore } from '@/lib/edgestore';
import { EventType } from "../../../systemComponents/types/types";
import { universalDelete } from "../../../systemComponents/apiConnectors/system/DELETE";

import Spinner from "../../../systemComponents/modules/spinner";
import PopUp from "../../../systemComponents/modules/popUp";
import Table from "../../primaryComponents/table";
import context from "../../../systemComponents/context/context";

const EventViewDisplay = () => {
    const [showPopUp,setShowPopUp]=useState(false);
    
    const [selectedEventInfo, setSelectedEventInfo] = useState<EventType>(
        {
            _id: "",
            content: {
                title: "",
                startDate: new Date(),
                endDate: new Date(),
                banner: "",
                body: "",
                location:""
            }
        });

    const queryClient=useQueryClient();

    const contextContainer=useContext(context);
    const { edgestore } = useEdgeStore();


    const { data, status, refetch } = useQuery("all-events", () => universalGet("/events"));

    useEffect(()=>{
        contextContainer.setLoading(1);
        refetch();
    },[])


    const deleteEvent=async (e:any)=>{
        e.preventDefault();
        contextContainer.setLoading(0);
        console.log(selectedEventInfo);
        try{
            if (selectedEventInfo.content.banner) {
                const { status } = await deleteFile(selectedEventInfo.content.banner, edgestore);
                if (status && selectedEventInfo._id) {
                    const res = await universalDelete("/admin/events", selectedEventInfo._id);
                    if (res.ok) {
                        contextContainer.setLoading(2);
                        queryClient.invalidateQueries("all-events")
                    }
                }
            }
            else contextContainer.setLoading(3);         
        }
        catch(err:any){
            console.log(err);
            contextContainer.setLoading(3);
        }
    }

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h1> Data fetch error </h1>
    else if (status === "success") {
        const newData = data.data.length>0 && data.data.map((item: any) => {
            const formattedStartDate = new Date(item.content.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false});
            const formattedEndDate = new Date(item.content.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12:false});
            
            return {
                ...item,
                startDate:formattedStartDate, 
                endDate:formattedEndDate,
            };
        });
        return (
            <>
                <Table title="Your events" tableRows={["Banner", "Title", "Location", "Start date", "End date", "Action"]} dataKeys={["banner", "title", "location", "startDate", "endDate"]} tableCols={newData} hasImage={true} parseOn={5} setShowPopUp={setShowPopUp} setSelectedData={setSelectedEventInfo} updateDestination={"/admin/events/update"}/>
                <PopUp title="Delete event" showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Delete event"]} body="Are you sure you want to delete the selected event?" contextContainer={contextContainer} functionLists={[deleteEvent]} finalMessage="Your event has been sucesfully deleted" errorMessage="Failed to delete the event"/>
            </>
        )
    }
}
export default EventViewDisplay; 