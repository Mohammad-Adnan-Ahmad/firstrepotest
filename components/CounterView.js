
"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Counter from "./counter";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

function CounterView() {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
    const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};
  return (
    <>
    
<div
className="flex flex-col z-40 items-center justify-center min-h-[100vh] bg-[#c3f7d5] rounded-[60px] absolute " >
    <p className="text-[1.5rem] text-[#004536] text-left w-[85%]  border-b border-[#004536] pb-6">Why choose Leif</p>
    
    <motion.div 
     ref={ref1}
     initial="hidden"
     animate={inView1 ? "visible" : "hidden"}
     variants={sectionVariants}
     transition={{ duration: 1 }}
    className="grid grid-cols-4 mt-16 w-full">
            
            <div
                className=" text-center flex flex-col justify-center items-center "
            >
               <div className="flex justify-center text-[3rem] text-[#004536] font-light">
               <Counter end={350} /><p>+</p></div> 
                <p className="text-[#009377] text-[1.2rem] font-medium leading-6">partner schools</p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center "
            >

                <div className="flex justify-center text-[3rem] text-[#004536] font-light">
               <Counter end={35000} /><p>+</p></div> 
                <p className="text-[#009377] text-[1.2rem] font-medium leading-6">students enrolled</p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center "
            >
                
                <div className="flex justify-center text-[3rem] text-[#004536] font-light">$
               <Counter end={800} /><p>M+</p></div> 
                <p className="text-[#009377] text-[1.2rem] font-medium leading-6">committed financing<br/> capital</p>
            </div>
            <div className=" text-center flex flex-col justify-center items-center "
            >
                
                <div className="flex justify-center text-[3rem] text-[#004536] font-light">
               <Counter end={3000} /><p>+</p></div> 
                <p className="text-[#009377] text-[1.2rem] font-medium leading-6">monthly payments<br/> processed</p>
            </div>
            </motion.div>

            <div className=" grid grid-cols-2 w-[65%] gap-16 mt-32">
            <motion.div className=" flex justify-center items-center"
            >
                <p className="text-[1.8rem] font-normal text-center text-[#004536] leading-9">In-House, US-based Customer Success Team</p>
            </motion.div>
            <motion.div className=" flex justify-center items-center g">
                <p className="text-[1.8rem] font-normal text-center text-[#004536] leading-9">No Student-Facing Fees (e.g., Late Fees)</p>
            </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                style={{ textAlign: 'center', margin: '20px 0' }}
            >
                   <div className="display flex mt-10">
              <button 
              className="border-b-[#009377] text-[#004536] tracking-[-0.25] border-b pt-[0.6rem] 
              pr-[.5rem] pb-[0.6rem] pl-0 font-[300] relative overflow-hidden hover:border-b-black"
               style={{transition:'all .8s', transitionTimingFunction:'cubic-bezier(0.23, 1, 0.32, 1)', 
               transitionDelay:'0s',}} >Learn why our partners chose Leif
              <FontAwesomeIcon icon={faArrowAltCircleRight}  className="ml-5"/></button>
            </div>
            </motion.div>
        </div>
    </>
  )
}

export default CounterView
