'use client';

import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { universalJSONPost } from '../apiConnectors/system/POST';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

import context from '../context/context';

import "./loginAndRegister.css";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const [label,setLabel]=useState("");

  const router = useRouter();

  const contextContainer = useContext(context);

  useEffect(() => {
    contextContainer.setLoading(1);
  }, [])

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLabel("");

    const emailRegEx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegEx=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if(name === "") {
      setLabel("Enter your proper full name");
      contextContainer.setLoading(1);
      return;
    }
    if(!emailRegEx.test(email)) {
      setLabel("Enter your proper email");
      contextContainer.setLoading(1);
      return;
    }
    if(!passwordRegEx.test(password)) {
      setLabel("Your password must contain a capital letter, a small letter, a number and special symbol");
      contextContainer.setLoading(1);
      return;
    }
    if(password!==reEnterPassword){
      setLabel("Your password and re-entered password does not match");
      contextContainer.setLoading(1);
      return;
    }
    
    contextContainer.setLoading(0);

    try {
      const body = {
        name: name,
        email: email,
        password: password
      }
      const response = await universalJSONPost(body, "/register");
      if (response?.ok) router.push("/user/dashboard");
      else contextContainer.setLoading(3);
    }
    catch (err) {
      contextContainer.setLoading(3);
    }
  }

  return (
    <>
      <img src="/images/logo.png" className="w-[300px] mb-10" />

      <form className='loginAndRegisterForm' onSubmit={registerUser}>
        <input type="text" placeholder='Enter your full Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <input type="password" placeholder="Re-enter your Password" onChange={(e) => setReEnterPassword(e.target.value)} /><br />
        {label!=="" && <h5 className='text-red-500 mt-5 text-center'> {label} </h5>}
        <button type='submit' className={`bg-[rgb(50,50,50)] ${contextContainer.loading === 0 && "opacity-50 pointer-events-none"}`}>
          {contextContainer.loading === 0 ? 'Registering you...' : contextContainer.loading === 1 ? 'Register' : contextContainer.loading === 3 && 'Error registering you'}
        </button>
      </form>
      <h1 className="mt-5"> Already have an account? <Link href="/login" className="text-red-400"> Login </Link> </h1>
    </>
  );
}