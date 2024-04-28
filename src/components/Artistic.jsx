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
        //   ease: "linear",
        },
      },
    },
  };

const Artistic = () => {
    return (
        <motion.div 
        className='artistic__area'
        variants={marqueeVariants}
        animate="animate"
        >
            <p className='yarndings-20-regular'>Every soul shall taste death al — Quran 3:185</p>
        </motion.div>
    );
};

export default Artistic;