import React from 'react';
import Srbutton from './srbutton/Srbutton';
import signature from '../assets/signature1.png';
import cv from "./pdf/cvf.pdf"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
             <ul>
                <li>
                    <Link to="/">
                      <img src={signature} alt='' />
                    </Link>
                </li>
                <li><Srbutton  textTitle="download cv" link={cv}/></li>
             </ul>
        </div>
    );
};

export default Navbar;