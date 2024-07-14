import React from 'react';
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration:10,
          ease: "linear",
        },
      },
    },
  };
const Marque = () => {
    return (
      <div>
       <div className="marquee">
       <motion.div 
        className="track"
        variants={marqueeVariants}
        animate="animate"
       > 
          <p className='yarndings-20-regular'>
          Every soul shall taste death al — Quran 3:185.
          </p>
       </motion.div>
        </div>
      </div>    
    );
};

export default Marque;
