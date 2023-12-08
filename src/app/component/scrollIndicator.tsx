"use client";

import React from "react";
import { motion } from "framer-motion";
const ScrollIndicator = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div className="h-24 w-[1px] bg-zinc-800"></motion.div>
      <motion.div
        animate={{ y: [-100, 0, 100] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1, repeatDelay: 2 }}
        className="absolute z-10 inset-0 h-24 w-[2px] bg-white"
      ></motion.div>
    </div>
  );
};

export default ScrollIndicator;
