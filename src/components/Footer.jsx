import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import SingleSocial from './SingleSocial';
import Srbutton from "./srbutton/Srbutton";
import { Link } from 'react-router-dom';
import {footerSection} from "../utils/data"
import { GoArrowUpRight } from "react-icons/go"
import { motion } from "framer-motion";

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
                     {footerSection.fist_col_quote}
                    </div>
                    <Link className='footer__cv' to={footerSection.third_col_cvlink} target={"_blank"}><img src={footerSection.fist_col_cvImage} alt=""/></Link>
                    <div className='quote__image'> 
                     <img  src={footerSection.fist_col_quoteImage} alt='' /> 
                    </div>
                </div>
              </div>
              <div className='info__section'>
                <dl>
                    <dt>Phone Number:</dt>
                    <dd class="small"><BsTelephoneInboundFill style={{ color: "2FA150"}}/>{footerSection.second_col_number} </dd>
                    <dt>Email Number:</dt>
                    <dd class="small"> <MdEmail style={{ color: "F7B400"}}/> {footerSection.second_col_email}</dd>
                    <dt> Skype Number: </dt>
                    <dd class="small"> <FaSkype  style={{ color: "#108ee9"}} /> {footerSection.second_col_skype}</dd>
                </dl>
            </div>
              <div className='cvdownload__section'>
                {/* <Srbutton  textTitle="download cv" link={footerSection.third_col_cvlink}/> */}
                {/* <Link to={footerSection.third_col_cvlink} target={"_blank"}>Download Cv <GoArrowUpRight/></Link> */}
                    <div className='qr__code'>
                        <motion.img 
                        initial={{  opacity: 0 }}
                        whileInView={{  opacity: 1 }}
                        transition={{ 
                            delay:.40,
                            ease:"easeIn",
                            opacity:{duration: 1 },
                            duration: 3 
                            }}
                        src={footerSection.third_col_qr} alt=''
                        />
                    </div>
                </div>
              <div className='social__section'>
                {footerSection?.fourth_col.map((item)=>(
               <SingleSocial title={item.title} icon={item.icon} link={item.link}/>
                ))} 
               </div>
            </div>
        </div>
        <div className='footer__copyright'> 
            protfolio ©{new Date().getFullYear()} Created by <Link to="/" style={{color:"#a6a695",textDecoration: "underline"}}><i>SRROBIN</i></Link>
        </div>
        </>
    );
};

export default Footer;