"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Home() {
  const [secondSectionClass, setSecondSectionClass] = useState("sticky top-0");

  const [bodyClass, setBodyClass] = useState("");


  useEffect(() => {
    const firstSection = document.getElementById("firstSection");
    const secondSection = document.getElementById("secondSection");

    const handleScroll = () => {
      const firstSectionBottom = firstSection.getBoundingClientRect().bottom;

      if (firstSectionBottom <= 0) {
        setSecondSectionClass("absolute");

        setBodyClass("scroll-locked");
      } else {
        setSecondSectionClass("sticky top-0");
        
        setBodyClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1.06,
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const heading2Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const images = ["hero2.jpeg", "logo.jpeg", "hero1.jpeg"];
  return (
    <>
     <body className={bodyClass}
     style={{ transition:' height 1s ease-in-out'}}>
      {/* First Section */}
      <main
        className=" absolute z-50 w-[100%]"
        id="firstSection"
        style={{
          textAlign: "center",
          padding: "5rem 1rem",
          backgroundColor: "#004d3f",
          color: "white",
          minHeight: "90vh",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <motion.h1
          style={{
            fontSize: "7rem",
            margin: 0,
            zIndex: "1000",
            position: "relative",
            lineHeight: "1.2",
          }}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Unlock the
        </motion.h1>

        <motion.h2
          style={{
            fontSize: "7rem",
            margin: 0,
            zIndex: "1000",
            position: "relative",
            lineHeight: "1.2",
          }}
          initial="hidden"
          animate="visible"
          variants={heading2Variants}
        >
          Path to Student <br /> Success
        </motion.h2>

        <motion.div
          className="imageContainer"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              variants={imageVariants}
              style={{
                position: "absolute",
                width: "33%",
                height: "65%",
                objectFit: "cover",
                borderTopRightRadius: "60px",
                borderBottomLeftRadius: "60px",
              }}
            />
          ))}
        </motion.div>
        <p
          style={{
            fontSize: "0.8rem",
            maxWidth: "600px",
            marginLeft: "40px",
            float: "left",
            textAlign: "left",
          }}
        >
          You're creating better ways for <br /> students to learn. Together
          we’ll build <br /> tuition products and offerings to <br /> better
          support them.
        </p>
      </main>

      {/* Second Section */}
      <section className={secondSectionClass} id="secondSection">
        <div className="grid grid-cols-2 ">
          <div className=" w-[100%] ">
            <img
              src="SecSection1.jpeg"
              className=" rounded-br-[60px] rounded-bl-[60px] w-[100%] h-[600px] object-cover "
            />
          </div>
          <div className=" block p-24  ">
            <h1 className="text-5xl text-[#004536] tracking-[-2px] leading-[1.2]">
              Tuition products that perfectly fit your <br />
              needs
            </h1>
            <p className="mt-10 text-[#004536]">
              Leif partners with schools to provide payment solutions and
              aligned financing that help students unlock their future.
            </p>

            <div className="display flex mt-10">
              <button
                className="border-b-[#009377] text-[#004536] tracking-[-0.25] border-b pt-[0.6rem] pr-[.5rem] pb-[0.6rem] pl-0 font-[300] relative overflow-hidden hover:border-b-black"
                style={{
                  transition: "all .8s",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  transitionDelay: "0s",
                }}
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="ml-5"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section Section */}
      <section className=" mt-[700px] ">
        <div className="grid grid-cols-2 ">
          <div className=" block p-24  ">
            <h1 className="text-5xl text-[#004536] tracking-[-2px] leading-[1.2]">
              Maximize student outcomes through <br />
              Career Services
            </h1>
            <p className="mt-10 text-[#004536]">
              We're here to help support your students through their entire
              journey - from enrollment to placement, and beyond. Enable your
              students to reach their full potential with Leif's full suite of
              Career Service offerings.
            </p>

            <div className="display flex mt-10">
              <button
                className="border-b-[#009377] text-[#004536] tracking-[-0.25] border-b pt-[0.6rem] pr-[.5rem] pb-[0.6rem] pl-0 font-[300] relative overflow-hidden hover:border-b-black"
                style={{
                  transition: "all .8s",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  transitionDelay: "0s",
                }}
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="ml-5"
                />
              </button>
            </div>
          </div>
          <div className=" w-[100%] ">
            <img
              src="ThirdSection.jpg"
              className=" rounded-[60px] w-[100%] h-[600px] object-cover "
            />
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="grid grid-cols-2 ">
          <div className=" block p-24  ">
            <h1 className="text-5xl text-[#004536] tracking-[-2px] leading-[1.2]">
              Maximize student outcomes through <br />
              Career Services
            </h1>
            <p className="mt-10 text-[#004536]">
              We're here to help support your students through their entire
              journey - from enrollment to placement, and beyond. Enable your
              students to reach their full potential with Leif's full suite of
              Career Service offerings.
            </p>

            <div className="display flex mt-10">
              <button
                className="border-b-[#009377] text-[#004536] tracking-[-0.25] border-b pt-[0.6rem] pr-[.5rem] pb-[0.6rem] pl-0 font-[300] relative overflow-hidden hover:border-b-black"
                style={{
                  transition: "all .8s",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  transitionDelay: "0s",
                }}
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="ml-5"
                />
              </button>
            </div>
          </div>
          <div className=" w-[100%] ">
            <img
              src="ThirdSection.jpg"
              className=" rounded-[60px] w-[100%] h-[600px] object-cover "
            />
          </div>
        </div>
      </section>

      <section className=" ">
        <div className="grid grid-cols-2 ">
          <div className=" block p-24  ">
            <h1 className="text-5xl text-[#004536] tracking-[-2px] leading-[1.2]">
              Maximize student outcomes through <br />
              Career Services
            </h1>
            <p className="mt-10 text-[#004536]">
              We're here to help support your students through their entire
              journey - from enrollment to placement, and beyond. Enable your
              students to reach their full potential with Leif's full suite of
              Career Service offerings.
            </p>

            <div className="display flex mt-10">
              <button
                className="border-b-[#009377] text-[#004536] tracking-[-0.25] border-b pt-[0.6rem] pr-[.5rem] pb-[0.6rem] pl-0 font-[300] relative overflow-hidden hover:border-b-black"
                style={{
                  transition: "all .8s",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                  transitionDelay: "0s",
                }}
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="ml-5"
                />
              </button>
            </div>
          </div>
          <div className=" w-[100%] ">
            <img
              src="ThirdSection.jpg"
              className=" rounded-[60px] w-[100%] h-[600px] object-cover "
            />
          </div>
        </div>
      </section>
      </body>
    </>
  );
}
