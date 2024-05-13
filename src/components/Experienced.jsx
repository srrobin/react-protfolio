import React from 'react';
import { ideasSection } from "../utils/data"
const Experienced = () => {
    return (
        <div className='optional__area'>
           {ideasSection?.map((item) => (
           <div className='single__post'>
            <div className='single__post__title'>
            {item.title}
            </div>
            <div className='single__post__img'>
                <img src={item.ideaImage} alt='' />
            </div>
            <div className='single__post__date'>
            Last Updated :  {item.createDate}
            </div>
            <div className='single__post__desc'>
            {item.desc}
            </div>
            <hr className='single__pos__hr'/>
           </div>
           ))}
           
        </div>
    );
};

export default Experienced;