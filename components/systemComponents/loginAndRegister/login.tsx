"use client"

import { useEffect, useState } from "react";
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

    const sendLoginRequest = async (e: any) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        const url = `${props.isAdmin ? '/admin/login' : '/login'}`

        const res = await universalJSONPost(data, url);
        if (res?.ok) router.push("/user/dashboard");
    }

    if (session) return <h5> Signed in as</h5>
    else {
        return (
            <form className="loginAndRegisterForm" onSubmit={(e) => sendLoginRequest(e)}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit" onClick={() => signIn()}> Login </button>
                <h1> Don't have an account? <Link href="/register" className="text-red-400"> Register </Link> </h1>
            </form>
        )
    }
}

export default Login;