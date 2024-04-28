import React from 'react';
import quoteImage from "../assets/quote.png"
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import SingleSocial from './SingleSocial';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Srbutton from "./srbutton/Srbutton";
import qrCode from "../assets/qr.png";



const Footer = () => {
    return (
        <> 
        <div className='footer'>
            <span>let's talk</span>
            <div className='footer__contact'>
              <div className='contact__section'>
                <div className='contact__quote'>
                    <div className='quote__text' style={{  fontFamily: "Philosopher"}}>
                     <div className='footer__quote'><BiSolidQuoteLeft /></div>
                     I feel very honored that the Hawaiian spirits chose to contact me.
                    </div>
                    <div className='quote__image'> 
                     <img  src={quoteImage} alt='' /> 
                    </div>
                </div>
              </div>
              <div className='info__section'>
                <dl>
                    <dt>Phone Number:</dt>
                    <dd class="small"><BsTelephoneInboundFill style={{ color: "2FA150"}}/> +880 1302 700 760 </dd>
                    <dt>Email Number:</dt>
                    <dd class="small"> <MdEmail style={{ color: "F7B400"}}/> srrobin07@gmail.com</dd>
                    <dt> Skype Number: </dt>
                    <dd class="small"> <FaSkype  style={{ color: "#108ee9"}} /> srrobin07</dd>
                </dl>
            </div>
              <div className='cvdownload__section'>
                <Srbutton  textTitle="download cv"/>
                    <div className='qr__code'>
                        <img src={qrCode} alt=''/>
                    </div>
                </div>
              <div className='social__section'> 
              <SingleSocial title="what's app" icon={<IoLogoWhatsapp />} />
               <SingleSocial title="facebook" icon={<FaFacebook />} />
               <SingleSocial title="Linkedin" icon={<FaLinkedin />} />
               <SingleSocial title="github" icon={<FaGithub />} />
               </div>
            </div>
        </div>
        <div className='footer__copyright'> 
            protfolio ©{new Date().getFullYear()} Created by SRROBIN
        </div>
        </>
    );
};

export default Footer;