import React from 'react';
import { GoArrowUpRight } from "react-icons/go"
import { Link } from 'react-router-dom';


const SingleSocial = ({title, icon, link}) => {
    return (
        <Link to={link} target={"_blank"} style={{ color:"#a6a695"}}>
        <div className='single__social'>
            {icon} {title} <GoArrowUpRight className=''/>
        </div>
        </Link>
    );
};

export default SingleSocial;