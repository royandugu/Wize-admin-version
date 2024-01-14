import React from "react";

import { educationRoutes, migrationRoutes } from "../../../../systemComponents/staticComponents/dropDownMenus";

import Link from "next/link";

import "./dropDownMenu.css";

interface DropDownMenuProps {
    dispNumber: number,
    showDropDown: boolean,
    setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>,
    showEducationPage: boolean,
    moveMenuUp:boolean
}

const EducationAndMigrationDropDown = ({ dispNumber, showDropDown, setShowDropDown, showEducationPage, moveMenuUp }: DropDownMenuProps) => {

    return (
        <ul className={`bg-white rounded-md fixed ${moveMenuUp? 'top-[110px]' : 'top-[150px]'} z-20 transform origin-top dropDownMenu shadow-lg ${showDropDown ? "scrollDown" : "scrollUp"} `} onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
            {(dispNumber === 0 && showEducationPage) ? (
                educationRoutes.map((route, i) => (
                    <li key={i} className="border-b border-[rgb(230,230,230)] px-10 p-5">
                        <Link href={route.url}> {route.text} </Link>
                    </li>
                ))
            ) : (dispNumber === 1 && !showEducationPage) && (
                migrationRoutes.map((route, i) => (
                    <li key={i} className="border-b border-[rgb(230,230,230)] px-10 p-5">
                        <Link href={route.url}> {route.text} </Link>
                    </li>
                ))
            )}

        </ul>
    );
}

export default EducationAndMigrationDropDown;