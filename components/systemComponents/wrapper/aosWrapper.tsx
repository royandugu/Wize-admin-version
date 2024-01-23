"use client"

import { useEffect } from "react";

import Aos from "aos";
import Footer from "../../userComponents/primaryComponents/footerComponents/footer";
import dynamic from "next/dynamic";

const MenuDisplay = dynamic(() => import('../../userComponents/primaryComponents/menuComponents/menuDisplay'), { ssr: false })

import "aos/dist/aos.css";

const AosWrapper = ({ 
    children,
}: {
    children: React.ReactNode;
}) => {

    useEffect(() => {
        Aos.init({ duration: 800, once: true })
    }, []);

    return (
        <>
            <MenuDisplay />
            <div className="overflow-x-hidden">
                {children}
            </div>
            <Footer />
        </>
    )
}
export default AosWrapper;