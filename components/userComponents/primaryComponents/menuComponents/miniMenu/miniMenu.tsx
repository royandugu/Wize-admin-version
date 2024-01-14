import {AiOutlineMail,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
import {BsFillTelephoneFill,BsWhatsapp,BsInstagram} from "react-icons/bs";
import {BiLogoFacebook,BiLogoLinkedin} from "react-icons/bi";

import "./miniMenu.css";

interface MiniMenuProp{
    moveMenuUp:boolean
}
const MiniMenu=(props:MiniMenuProp)=>{
    return(
        <div className={`miniMenu fixed ${props.moveMenuUp ? 'lg:left-20 lg:right-20 left-5 right-5 pt-2' : 'lg:left-32 lg:right-32 left-12 right-12 mt-10 pt-2'} rounded-md pb-10 z-20 mainGradient`}>
            <div className="flex pl-10 justify-end sm:justify-between">
                <div className="flex items-center">
                    <AiOutlineMail className="icon"/>
                    <h5 className="sm:mr-9 sm:block hidden"> Email@email.com </h5>
                    <BsFillTelephoneFill className="icon"/>
                    <h5 className="sm:block hidden"> 01-4123456 </h5>
                </div>
                <div className="flex items-center">
                    <BsWhatsapp className="socialIcon"/>
                    <BiLogoFacebook className="socialIcon"/>
                    <BsInstagram className="socialIcon"/>
                    <BiLogoLinkedin className="socialIcon"/>
                    <AiOutlineTwitter className="socialIcon"/>
                    <AiFillYoutube className="socialIcon"/>
                </div>
            </div>
        </div>
    )
}
export default MiniMenu;