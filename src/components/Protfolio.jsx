import React from 'react';
import Artistic from './Artistic';
import Abouts from './Abouts';
import ShortProject from './ShortProject';
import QuoteArea from './QuoteArea';
import Footer from './Footer';
import protImage from "../assets/r.jpg"
import { motion } from "framer-motion";
import AnimatedTextWord from './AnimatedTextWord';
import AnimatedTextCharacter from './AnimatedTextCharacter';

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
                <AnimatedTextWord text="Sayam Rahman Robin" />
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