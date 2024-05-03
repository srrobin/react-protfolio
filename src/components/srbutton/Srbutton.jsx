import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go"
import { Link } from 'react-router-dom';

const  Srbutton = ({textTitle,link}) =>  {
  const [clicked, setClicked] = useState(false);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const rippleEffect = (event) => {
    const newPosX = (event.pageX - event.target.offsetLeft) - 50;
    const newPosY = (event.pageY / event.target.offsetHeight) - 25;
    setPosX(newPosX);
    setPosY(newPosY);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 600);
  };

  return (
      <Link to={link} target={"_blank"}> 
        <div style={{ padding: '10px 10px 10px 0px' }}>
          <button onClick={rippleEffect} className={`btn`}>
          {textTitle}  <GoArrowUpRight style={{fontSize: "20px"}}/>
            { clicked &&
              <span className="ink" style={{ top: `${posY}px`, left: `${posX}px` }} />
            }
          </button>
        </div>
      </Link>
  );
}


export default Srbutton;