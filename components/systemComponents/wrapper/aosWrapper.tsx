"use client"

import { useEffect } from "react";

import Aos from "aos";
import MenuDisplay from "../../userComponents/primaryComponents/menuComponents/menuDisplay";
import Footer from "../../userComponents/primaryComponents/footerComponents/footer";

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