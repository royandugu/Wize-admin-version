"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Spinner from "../../../../components/systemComponents/modules/spinner";

import Login from "../../../../components/systemComponents/loginAndRegister/login";

const Page=()=>{
    const { data: session } = useSession();

    const router = useRouter();


    if(session === undefined) return <Spinner/>
    if (session) {
        if (session.user.role === "admin") router.push("/admin/dashboard");
    }
    else if (session === null) return <Login/>    
}
 
export default Page;