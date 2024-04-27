import React from 'react';
import { GoArrowUpRight } from "react-icons/go"


const SingleSocial = ({title,icon}) => {
    return (
        <div className='single__social'>
            {icon}
            {title}
             <GoArrowUpRight className=''/>
        </div>
    );
};

export default SingleSocial;