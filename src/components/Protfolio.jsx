import { motion } from "framer-motion";
import React from 'react';
import protImage from "../assets/r1.jpg";
import Abouts from './Abouts';
import AnimatedTextCharacter from './AnimatedTextCharacter';
import Artistic from './Artistic';
import Footer from './Footer';
import QuoteArea from './QuoteArea';
import ShortProject from './ShortProject';

const Protfolio = () => {
    return (
        <> 
        <motion.div 
        className='prot__area'
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
           <div className='top__area'>
                <div className='prot__gretting'> 
                <AnimatedTextCharacter text="Hey you, I'm" />
                </div>
                <div className='prot__name'>
                <AnimatedTextCharacter text="Sayam  Rahman  Robin" />
                </div>
                <div className='prot__image'>
                    <img src={protImage} alt=''/>
                </div>
           </div>
        </motion.div>

        <Artistic />
        <Abouts />
        <ShortProject />
        <QuoteArea />
        <Footer />
        </>
    );
};

export default Protfolio;