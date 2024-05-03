import React from 'react';
import Srbutton from './srbutton/Srbutton';
import cv from "./pdf/cv1.pdf"

const Navbar = () => {
    return (
        <div className='navbar'>
             <ul>
                <li><Srbutton  textTitle="download cv" link={cv}/></li>
             </ul>
        </div>
    );
};

export default Navbar;