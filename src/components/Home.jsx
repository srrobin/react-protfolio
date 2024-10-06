import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import protImg from "../assets/home.webp";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home__area'>
          <div className='home__image'>
            <Link to="/robin">
                <div className='link__icon'>
                    <GoArrowUpRight/>
                </div>
             </Link>
               <img  src={protImg} alt='' />
          </div>
        </div>
    );
};

export default Home;