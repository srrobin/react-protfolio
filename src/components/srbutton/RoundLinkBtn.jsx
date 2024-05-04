import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const RoundLinkBtn = ({link}) => {
    return (
        <Link to={link} target={"_blank"}>
           <div className='link__icon'>
            <GoArrowUpRight/>
            </div>
        </Link>
    );
};

export default RoundLinkBtn;