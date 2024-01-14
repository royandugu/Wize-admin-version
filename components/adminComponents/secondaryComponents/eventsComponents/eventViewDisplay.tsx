"use client"

import { useQuery,useQueryClient } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import { useState, useContext, useEffect } from "react";
import { deleteImage } from "../../../systemComponents/microFunctions/deleteImage";
import { useEdgeStore } from '@/lib/edgestore';
import { EventType } from "../../../systemComponents/types/types";

import parse from "html-react-parser"
import Spinner from "../../../systemComponents/modules/spinner";
import PopUp from "../../../systemComponents/modules/popUp";
import Table from "../../primaryComponents/table";
import context from "../../../systemComponents/context/context";
import { universalDelete } from "../../../systemComponents/apiConnectors/system/DELETE";

const EventViewDisplay = () => {
    const [showPopUp,setShowPopUp]=useState(false);
    
    const [selectedEventInfo,setSelectedEventInfo]=useState<EventType>({
        _id:"",
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        banner: "",
        body: ""
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
        try{
            const {status}=await deleteImage(selectedEventInfo.banner,edgestore);
            if(status && selectedEventInfo._id){
                const res=await universalDelete("/admin/events",selectedEventInfo._id);
                if(res.ok) {
                    contextContainer.setLoading(2);
                    queryClient.invalidateQueries("all-events")
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
        const newData = data.map((item: any) => {
            const formattedStartDate = new Date(item.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false});

            const formattedEndDate = new Date(item.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12:false});

            return {
                ...item,
                startDate:formattedStartDate,
                endDate:formattedEndDate,
                body: parse(item.body.slice(0, 100))
            };
        });
        return (
            <>
                <Table title="Your events" tableRows={["Banner", "Title", "Start date", "End date", "Body", "Action"]} dataKeys={["banner", "title", "startDate", "endDate", "body"]} tableCols={newData} hasImage={true} parseOn={5} setShowPopUp={setShowPopUp} setSelectedData={setSelectedEventInfo} updateDestination={"/admin/events/update"}/>
                <PopUp title="Delete event" showPopUp={showPopUp} setShowPopUp={setShowPopUp} buttonTexts={["Delete event"]} body="Are you sure you want to delete the selected event?" contextContainer={contextContainer} functionLists={[deleteEvent]} finalMessage="Your event has been sucesfully deleted" errorMessage="Failed to delete the event"/>
            </>
        )
    }
}
export default EventViewDisplay; 