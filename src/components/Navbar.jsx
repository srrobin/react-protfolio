import React from 'react';
import Srbutton from './srbutton/Srbutton';

const Navbar = () => {
    return (
        <div className='navbar'>
             <ul>
                <li><Srbutton  textTitle="download cv"/></li>
             </ul>
        </div>
    );
};

export default Navbar;