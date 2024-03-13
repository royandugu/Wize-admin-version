"use client"

import { useState } from "react";
import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";

import Table from "../../primaryComponents/table";
import Spinner from "../../../systemComponents/modules/spinner";
import ViewPopUp from "../../../systemComponents/modules/viewPopUp";

const QuizViewDisplay = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedQuizId, setSelectedQuizId] = useState("");

    const { data, status } = useQuery("quiz-data", () => universalGet("/admin/quiz"));

    if(status === "loading") return <Spinner/>
    else if(status === "error") return <h5> Error fetching data </h5>
    else if (status === "success") {
        return (
            <>
                <Table title="Your events" tableRows={["First name", "Last name", "Contact number", "Email", "View"]} dataKeys={["firstName", "lastName", "contactNumber", "email"]} tableCols={data} hasImage={false} parseOn={5} setShowPopUp={setShowPopUp} setSelectedData={setSelectedQuizId} eye={true}/>
                <ViewPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} url={`/admin/quiz`} id={selectedQuizId}/>
            </>
        )
    }
}
export default QuizViewDisplay;