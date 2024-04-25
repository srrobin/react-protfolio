import React from 'react';
import protImage from "../assets/p3.jpg"
import Artistic from './Artistic';
import Line from './Line';

const Protfolio = () => {
    return (
        <> 
        <div className='prot__area'>
           <div className='top__area'>
            <div className='prot__gretting'> Hey you, I'm</div>
                <div className='prot__name'>Sayam Rahman Robin</div>
                <div className='prot__image'>
                    <img src={protImage} alt=''/>
            </div>
           </div>
        </div>
        <Artistic />
        <Line text="education" sub="edu" /> 
        </>
    );
};

export default Protfolio;