'use client';

import { useState } from 'react';
import { useContext } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { universalJSONPost } from '../apiConnectors/system/POST';
import { useRouter } from 'next/navigation';
import Spinner from '../modules/spinner';

import context from '../context/context';

import "./loginAndRegister.css";

import { uploadImage } from '../microFunctions/uploadImage';


export default function Register() {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router=useRouter();

  const contextContainer = useContext(context);

  const { edgestore } = useEdgeStore();

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    contextContainer.setLoading(0);
    try {
      const {data,status}=await uploadImage(file,edgestore);
      if(status){
        const body = {
          profilePicture: data,
          name: name,
          email: email,
          password: password
        }
        const response = await universalJSONPost(body, "/register");
        if (response?.ok) router.push("/user/dashboard");
      }
      else if(status === false){ 
        contextContainer.setLoading(3);
      }
    }
    catch (err) {
      contextContainer.setLoading(3);
    }
  }

  if (contextContainer.loading === 0) return <Spinner/>
  else if (contextContainer.loading === 3) return <h5> Error while registering user </h5>
  else if(contextContainer.loading === 1){
    return (
      <form className='loginAndRegisterForm' onSubmit={registerUser}>


        <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type='submit'>
          Register
        </button>
      </form>
    );
  }
}