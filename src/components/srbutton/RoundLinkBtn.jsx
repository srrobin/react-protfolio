import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const RoundLinkBtn = () => {
    return (
        <Link to="/robin">
           <div className='link__icon'>
            <GoArrowUpRight/>
            </div>
           
        </Link>
    );
};

export default RoundLinkBtn;