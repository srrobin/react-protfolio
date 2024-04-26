import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
// import { FaFacebook } from "react-icons/fa";
// <FaFacebook />
// import { FaGithub } from "react-icons/fa6";
// <FaGithub />
// import { FaLinkedin } from "react-icons/fa";
// <FaLinkedin />
import { RiExternalLinkLine } from "react-icons/ri";


const SingleSocial = ({title,icon}) => {
    return (
        <div className='single__social'>
            {icon}
            {title}
             <RiExternalLinkLine />
        </div>
    );
};

export default SingleSocial;