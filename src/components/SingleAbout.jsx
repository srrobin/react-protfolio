import React from 'react';
import Line from './Line';
import RoundLinkBtn from './srbutton/RoundLinkBtn';

const SingleAbout = ({text,sub,desc}) => {
    return (
        <div className='single__about'>
            <Line text={text} sub={sub} />
            <div className='single__desc'>
                <div className='desc__text'>{desc}</div>
                <div className='desc__btn'><RoundLinkBtn /></div>
            </div>
        </div>
    );
};

export default SingleAbout;