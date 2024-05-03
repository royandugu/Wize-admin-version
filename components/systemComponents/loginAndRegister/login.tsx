"use client"

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

import Link from "next/link";

import "./loginAndRegister.css";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const sendLoginRequest = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
            callbackUrl: "/admin/dashboard"
        })
    }

    return (
        <>
            <img src="/images/logo.png" className="w-[300px] mb-10" />
            <form className="loginAndRegisterForm" onSubmit={sendLoginRequest}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit" className={`bg-black opacity-90 hover:opacity-100 ${loading && 'pointer-events-none'}`}> {loading ? 'Logging you in' : 'Login'}  </button>
            </form>
            <h1 className="mt-5"> Don't have an account? <Link href="/register" className="text-red-400"> Register </Link> </h1>
        </>
    )

}

export default Login;