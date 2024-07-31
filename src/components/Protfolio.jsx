import { motion } from "framer-motion";
import React from 'react';
// import protImage from "../assets/hero.jpg";
import protImage from "../assets/p31.png";
import Abouts from './Abouts';
import AnimatedTextCharacter from './AnimatedTextCharacter';
// import Artistic from './Artistic';
import Footer from './Footer';
import QuoteArea from './QuoteArea';
import ShortProject from './ShortProject';
import Marque from "./Marque";

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
                    <motion.img 
                        // initial={{ opacity: 0, scale: 0.5 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        // transition={{ duration: 0.5 }}
                        initial={{ y:-100, opacity: 0 }}
                        animate={{ y:0, opacity: 1 }}
                        transition={{ 
                            delay:.2,
                            y:{type:"spring",stiffness:60},
                            ease:"easeIn",
                            opacity:{duration: 1 },
                            duration: 1 
                        }}
                        src={protImage} 
                        alt=''
                    />
                </div>
           </div>
        </motion.div>

        {/* <Artistic /> */}
        <Marque/>
        <Abouts />
        <ShortProject />
        <QuoteArea />
        <Footer />
        </>
    );
};

export default Protfolio;