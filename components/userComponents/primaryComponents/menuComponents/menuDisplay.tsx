"use client"

import { useState , useEffect } from "react";
import { HiMiniBars3 } from "react-icons/hi2";

import Link from "next/link";
import NavigationContainer from "./navigationContainer/navigationContainer";
import MiniMenu from "./miniMenu/miniMenu";
import SearchAndContactDropDown from "./dropDownMenu/searchAndContactDropDown";
import SearchBarDesign from "../../../systemComponents/modules/searchBarDesgin";
import ButtonDesign from "../../../systemComponents/modules/buttonDesign";

import "./menuDisplay.css";

const MenuDisplay = () => {

    const [showDropDownOne,setShowDropDownOne]=useState<boolean>(false);
    const [showDropDownTwo,setShowDropDownTwo]=useState<boolean>(false);
    const [moveMenuUp,setMoveMenuUp]=useState<boolean>(false);
    
    const [dispNumberOne,setDispNumberOne]=useState<number>(0);
    const [dispNumberTwo,setDispNumberTwo]=useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setShowDropDownOne(false);
                setShowDropDownTwo(false);
            };

            const handleScroll = () =>{
                if(window.scrollY>=20) setMoveMenuUp(true);
                else setMoveMenuUp(false);
            }

            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); 

    return (
        <div className="menuDisplay">
            <div className={`bg-white fixed ${moveMenuUp ? 'top-10 rounded-md rounded-tl-none rounded-tr-none' : 'top-20 rounded-md'} lg:left-20 lg:right-20 left-5 right-5 p-5 shadow-lg z-30`}>
                <div className="flex flex-row items-center sm-320:justify-between lg+196:justify-evenly">
                    <img src="/images/logo.png" className="w-[85px]"/>
                    <>
                        <div className="navigationContainer md:block hidden px-20">
                            <NavigationContainer dispNumber={dispNumberOne} showDropDown={showDropDownOne} setDispNumber={setDispNumberOne} setShowDropDown={setShowDropDownOne} moveMenuUp={moveMenuUp}/>
                        </div>
                        <div className="searchBar lg+196:block hidden ml-[-50px] xl:ml-10">
                            <SearchBarDesign/>
                        </div>
                        <div className="contactUs lg+196:flex gap-3 hidden ">
                            <Link href="/login"><ButtonDesign text={"Sign up"} noArrow={true}/></Link>
                        </div>
                    </>

                    {/* This part is for displaying the dropdown of contact us and search button */}
                    <div className="lg+196:hidden cursor-pointer smlContactAndSearchContainer">
                        <HiMiniBars3 className="text-lg" onClick={()=>{
                            setDispNumberTwo(0);
                            setShowDropDownTwo(!showDropDownTwo);
                        }}/>
                        <SearchAndContactDropDown dispNumber={dispNumberTwo} setShowDropDown={setShowDropDownTwo} showDropDown={showDropDownTwo} showAllNavs={false} moveMenuUp={moveMenuUp}/>
                    </div>

                    {/* This part is for displaying the dropdown of menu */}
                    <div className="md:hidden cursor-pointer">
                        <HiMiniBars3 className="text-lg" onClick={()=>{
                            setDispNumberTwo(1);
                            setShowDropDownTwo(!showDropDownTwo);
                        }}/>
                        <SearchAndContactDropDown dispNumber={dispNumberTwo} setShowDropDown={setShowDropDownTwo} showDropDown={showDropDownTwo} showAllNavs={true} moveMenuUp={moveMenuUp}/>
                    </div>

                </div>
            </div>
            <MiniMenu moveMenuUp={moveMenuUp}/>
        </div>
    )
}
export default MenuDisplay;