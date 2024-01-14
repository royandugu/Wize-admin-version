import React from "react";

import { primaryRoute } from "../../../../systemComponents/staticComponents/dropDownMenus";

import Link from "next/link";
import EducationAndMigrationDropDown from "../dropDownMenu/educationAndMigrationDropdown";

import "./navigationContainer.css";

interface NavigationContainerProps{
    dispNumber:number,
    setDispNumber:React.Dispatch<React.SetStateAction<number>>,
    showDropDown:boolean,
    setShowDropDown:React.Dispatch<React.SetStateAction<boolean>>,
    moveMenuUp:boolean
}

const NavigationContainer=({dispNumber,showDropDown,setDispNumber,setShowDropDown,moveMenuUp}:NavigationContainerProps)=>{
    return (
        <ul className="flex navigationContainer">
            <li className="navigationContainer--noDropDowns">
                {primaryRoute.map((route,i)=>(
                    <Link href={route.url} className="mr-12" key={i}> {route.text} </Link>
                ))}
            </li>
            <li>
                <Link href="/education" className="mr-12 relative" onMouseEnter={()=>{
                    setDispNumber(0);
                    setShowDropDown(true);
                }} onMouseLeave={()=>setShowDropDown(false)}> <label className="navigationContainer--dropDowns">Education</label> </Link>
                <EducationAndMigrationDropDown dispNumber={dispNumber} showDropDown={showDropDown} setShowDropDown={setShowDropDown} showEducationPage={true} moveMenuUp={moveMenuUp}/>
            </li>
            <li>
                <Link href="/migration" onMouseEnter={()=>{
                        setDispNumber(1);
                        setShowDropDown(true);    
                }} onMouseLeave={()=>setShowDropDown(false)}> <label className="navigationContainer--dropDowns"> Migration </label></Link>
                <EducationAndMigrationDropDown  dispNumber={dispNumber} showDropDown={showDropDown} setShowDropDown={setShowDropDown} showEducationPage={false} moveMenuUp={moveMenuUp}/>
            </li>
        </ul>
    )
}
export default NavigationContainer;