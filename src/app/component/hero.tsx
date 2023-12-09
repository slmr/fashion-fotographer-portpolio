"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ScrollIndicator from "./scrollIndicator";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateYProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", "30vh"]
  );
  return (
    <div ref={containerRef} className="relative h-[80vh] md:h-screen w-full">
      <div className="absolute left-1/2 md:left-8 top-[15%] md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 md:-translate-x-0 z-40">
        <motion.div
          style={{ opacity: opacityProgress, y: translateYProgress }}
          className="text-6xl text-center md:text-left md:text-9xl font-bold leading-snug"
        >
          <span className="text-white">Revaldi</span>
          <br />
          <span className="text-red-500">Basak</span>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: opacityProgress, y: translateYProgress }}
        className="hidden md:block h-full w-full"
      >
        <Image
          src={"/main-profile.webp"}
          fill
          alt="main profile image"
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        className="absolute h-3/4 w-full left-0 right-0 top-auto bottom-0 block md:hidden"
        style={{ opacity: opacityProgress, y: translateYProgress }}
      >
        <Image
          src={"/main-profile-mobile.webp"}
          fill
          alt="main profile image"
          objectFit="cover"
        />
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-40">
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
