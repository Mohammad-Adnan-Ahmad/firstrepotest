"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "./header.module.css";
import Link from "next/link";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isNavVisible, setNavVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };
  
  const navVariants = {
    hidden: { opacity: 0, x: "-100%", transition: { duration: 0.5 } },
    visible: { opacity: 1, x: "0%", transition: { duration: 0.5 } },
  };

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <>
      <header className={`rounded-b-[50px] flex justify-between p-[1rem] sticky top-0 z-50 text-white items-center transition-colors duration-700  ${isScrolled ? 'bg-[#f2eee8]' : 'bg-[#004d3f]'}`}>
        <div className={`flex items-center justify-between w-full ${isScrolled ? 'text-black' : 'text-white'}`}>
          <div className="font-bold text-2xl pl-8">Leif</div>
          <div className="block md:hidden pr-8">
            <button onClick={toggleNav} className="focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex ml-8">
            <ul className="flex list-none gap-16">
              <li
                className="relative"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                Solutions
                <motion.div
                  initial="hidden"
                  animate={isDropdownVisible ? "visible" : "hidden"}
                  variants={dropdownVariants}
                  className="absolute bg-[#009377]  mt-4 p-4 text-white  rounded-tr-[30px] rounded-bl-[30px] rounded-none"
                >
                  <ul className="list-none m-0 p-5 w-[200px]">
                    <li className="py-1">Tuition Products</li>
                    <li className="py-1">Career Services</li>
                    <li className="py-1">Advisory Insights</li>
                  </ul>
                </motion.div>
              </li>
              <li>Use Cases</li>
              <li>Company</li>
            </ul>
          </nav>
          <div className="pr-8 hidden md:block">
            <button className="bg-[#b4ddc0] text-[#004536] py-2 px-4 rounded-md">
              Login
            </button>
          </div>
        </div>
        <motion.nav
          initial="hidden"
          animate={isNavVisible ? "visible" : "hidden"}
          variants={navVariants}
          className="fixed top-0 left-0 w-full  h-full bg-[#004d3f] flex flex-col items-center justify-center "
        >
          <button onClick={toggleNav} className="">
                <img src="close.png" width='5%'/>
              </button>
          <ul className="list-none text-center ">
          
            <li className="py-4">Solutions</li>
            <li className="py-4">Use Cases</li>
            <li className="py-4">Company</li>
            <li className="py-4">
              <button className="bg-[#b4ddc0] text-[#004536] py-2 px-4 rounded-md">
                Login
              </button>
            </li>
          </ul>
        </motion.nav>
      </header>
    </>
  );
}

export default Header;
