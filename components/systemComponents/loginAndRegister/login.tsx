"use client"

import { FormEvent, useState } from "react";
import { universalJSONPost } from "../apiConnectors/system/POST";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import Link from "next/link";

import "./loginAndRegister.css";

type LoginProp = {
    isAdmin: boolean;
}

const Login = (props: LoginProp) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { data: session } = useSession();

    const router = useRouter();

    const sendLoginRequest = async (e: FormEvent) => {
        e.preventDefault();
        await signIn("credentials",{
            email:email,
            password:password,
            redirect:true
        })
    }

    if (session) return <h5> Signed in as</h5>
    else {
        return (
            <>
                <img src="/images/logo.png" className="w-[300px] mb-10"/>
                <form className="loginAndRegisterForm" onSubmit={sendLoginRequest}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><br />
                    <button type="submit"> Login </button>
                </form>
                <h1 className="mt-5"> Don't have an account? <Link href="/register" className="text-red-400"> Register </Link> </h1>
                
            </>
        )
    }
}

export default Login;