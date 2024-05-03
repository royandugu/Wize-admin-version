"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Spinner from "../../../../components/systemComponents/modules/spinner";

import Login from "../../../../components/systemComponents/loginAndRegister/login";
import { useEffect } from "react";

const Page=()=>{
    const { data: session } = useSession();

    const router = useRouter();

    useEffect(()=>{
        if(session && session.user.role === "admin") router.push("/admin/dashboard");
    },[session])

    if(session === undefined) return <Spinner/>
    else if (session === null) {
        return <Login/> 
    }   
}
 
export default Page;