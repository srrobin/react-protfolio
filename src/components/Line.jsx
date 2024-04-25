import React from 'react';

const Line = ({text, sub}) => {
    return (
        <div className='line'>
            <div className='line__text'>{text} <span>{sub}</span></div>
            <div className='line__line'></div>
        </div>
    );
};

export default Line;