import React from 'react';
import LinkRoundLinkBtn from './srbutton/LinkRoundLinkBtn';

const SingleAbout = ({text, sub, children,yes, link}) => {
    return (
        <div className='line'>
            <div className='line__text'>{text} <span>{sub}</span></div>
            <div className='about__desc'>{children}</div>
            {yes &&  <LinkRoundLinkBtn link={link}/>}
           
        </div>
    );
};

export default SingleAbout;


// import React from 'react';
// import Line from './Line';
// import RoundLinkBtn from './srbutton/RoundLinkBtn';

// const SingleAbout = ({text,sub,children, link}) => {
//     return (
//         <div className='single__about'>
//             <Line text={text} sub={sub} />
//             <div className='single__desc'>
//                 <div className='desc__text'>{children}</div>
//                 {link && 
//                 <div className='desc__btn'><RoundLinkBtn /></div>}
//             </div>
//         </div>
//     );
// };

// export default SingleAbout;