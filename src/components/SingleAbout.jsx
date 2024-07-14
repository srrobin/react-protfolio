import React from 'react';
import LinkRoundLinkBtn from './srbutton/LinkRoundLinkBtn';
import { motion } from "framer-motion";

const SingleAbout = ({text, sub, children,yes, link}) => {
    return (
        <motion.div 
        initial={{ y:10, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ 
            delay:.6,
            y:{type:"spring",stiffness:60},
            ease:"easeIn",
            opacity:{duration: 1 },
            duration: 1 
            }}
        className='line'
        >
            <div className='line__text'>{text} <span>{sub}</span></div>
            <div className='about__desc'>{children}</div>
            {yes &&  <LinkRoundLinkBtn link={link}/>}
           
        </motion.div>
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