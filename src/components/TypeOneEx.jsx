import React from 'react';
const TypeOneEx = ({item}) => {
    return (
        <div className='optional__area'>
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
          
        </div>
    );
};

export default TypeOneEx;