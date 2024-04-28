import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import protImg from "../assets/r.jpg";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({imgProperty}) => {
    return (
        <div className='home__area'>
          <div className='home__image' 
           style={{
            width: imgProperty.width,
            height: imgProperty.height,
            }}
          >
            <Link to="/robin">
                <div className='link__icon'>
                    <GoArrowUpRight/>
                </div>
             </Link>
               <motion.img 
               src={protImg} 
               alt=''
               exit={{ opacity: 0 }}
               whileHover={{ scale: 1.1 }}
               transition={transition}
               />
          </div>
        </div>
    );
};

export default Home;