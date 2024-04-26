import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const RoundLinkBtn = ({roundText}) => {
    return (
        <Link to="/robin">
           <div className='link__icon'>
            <GoArrowUpRight/>
            </div>
            {roundText &&  <small>{roundText }</small>}
           
        </Link>
    );
};

export default RoundLinkBtn;