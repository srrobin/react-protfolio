import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
const TypeTwoEx = ({item}) => {
  console.log("🚀 ~ TypeTwoEx ~ item:", item)

  return (
    <div className='optional__area'>
    <div className='single__post'> 
    <div className='single__post__title'>
            {item.title}
            </div>
            <div className='single__post__date'>
            Last Updated :  {item.createDate}
            </div>
           <Fade {...properties} canSwipe slidesToScroll={1} slidesToShow={1}   responsive={[{
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }, {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]}>
            {item?.visitedArea?.map((singleArea,index) =>(
            <div className="each-slide" key={index}>
            <div>
                <img src={singleArea.url} alt=''/>
            </div>
            <p>{singleArea.description}</p>
            </div>
            ))}
        </Fade>
    </div>
    </div>
  );
};

export default TypeTwoEx;