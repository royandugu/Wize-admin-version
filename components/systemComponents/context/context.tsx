import {createContext} from "react";

type ContextType={
    loading:number,
    setLoading:React.Dispatch<React.SetStateAction<number>>,
    message:string,
    setMessage:React.Dispatch<React.SetStateAction<string>>
}

const defaultValue:ContextType={
    loading: 1,
    setLoading: () => {},
    message:"",
    setMessage:()=>{}
};

const context=createContext(defaultValue);

export default context;
