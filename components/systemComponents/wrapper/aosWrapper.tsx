"use client"

import { useEffect } from "react";

import Aos from "aos";
import Footer from "../../userComponents/primaryComponents/footerComponents/footer";
import MenuDisplay from "../../userComponents/primaryComponents/menuComponents/menuDisplay";

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