"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import Spinner from "../../../systemComponents/modules/spinner";
import parse from "html-react-parser"

import "./migration.css";

const MainMigrationSection = () => {
    const { data, status } = useQuery("migration-data", () => universalGet("/migration"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h1> Error getting migration data </h1>
    else if (status === "success") {
        console.log(data);
        return (
            <div className="bg-sky-bg pt-10 pb-10 md:pl-[13.4%] md:pr-[13.4%]">
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold text-[20px] mt-5"> Why Choose Us? </h1>
                    <img alt="visa" src={data.migration.whyChooseUsBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.migration.whyChooseUsText)} </div>
                    <h1 className="font-bold text-[20px] mt-5"> Our Migration Services: </h1>
                    <img alt="visa" src={data.migration.ourMigServicesBanner} className="w-full mt-5 mb-5" />
                    <div className="ulContainer"> {parse(data.migration.ourMigServicesText)} </div>
                    <h1 className="font-bold text-[20px] mt-5"> Ready to begin ?  </h1>
                    <div className="ulContainer"> {parse(data.migration.readyToBegin)} </div>
                    <h1 className="font-bold text-[20px] mt-5"> Disclaimer:  </h1>
                    <div className="ulContainer"> {parse(data.migration.disclaimer)} </div>

                </div>
            </div>
        )
    }
}
export default MainMigrationSection;