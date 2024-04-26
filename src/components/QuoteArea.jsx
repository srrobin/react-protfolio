import React from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";

const QuoteArea = () => {
    return (
        <div className='quote__area'>
            <div className='quote__text'>
                <span><BiSolidQuoteLeft /></span>    
                When love and skill work together, expect a masterpiece.
            </div>
        </div>
    );
};

export default QuoteArea;