import React from 'react';
import Srbutton from './srbutton/Srbutton';
import LinkButton from './srbutton/LinkButton';

const Navbar = () => {
    return (
        <div className='navbar'>
             <ul>
                <li><LinkButton url={"/"}>Set Meeting</LinkButton></li>
                <li><Srbutton  textTitle="download cv"/></li>
             </ul>
        </div>
    );
};

export default Navbar;