import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const LinkRoundLinkBtn = ({link}) => {
    return (
        <Link to={link} target={"_blank"}>
           <div className='simple__link__icon'>
            <GoArrowUpRight/>
            </div>
           
        </Link>
    );
};

export default LinkRoundLinkBtn;