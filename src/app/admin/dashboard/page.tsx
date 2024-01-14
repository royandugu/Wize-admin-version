import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import DashboardDisplay from "../../../../components/adminComponents/secondaryComponents/dashboardDisplay";

const Page=async ()=>{
    const sessionData=await getServerSession(options);

    if(sessionData) return <DashboardDisplay/>
    else return redirect('api/auth/signin?callbackUrl=/server');
}
export default Page;