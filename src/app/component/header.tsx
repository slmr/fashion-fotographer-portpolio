"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion, useCycle } from "framer-motion";
import React from "react";

const SeparatorComponent = motion(Separator);

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      staggerDirection: -1,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.li
      className="uppercase tracking-widest py-4 mt-6 font-bold text-3xl sm:text-8xl text-white overflow-hidden"
      variants={menuItemVariants}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1 }}
    >
      {children}
      <SeparatorComponent
        className="h-[2px]"
        variants={{
          open: {
            x: 0,
            transition: {
              x: { stiffness: 100, velocity: 100 },
            },
          },
          closed: {
            x: "-100%",
            transition: {
              x: { stiffness: 1000 },
            },
          },
        }}
      />
    </motion.li>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div animate={isOpen ? "open" : "closed"}>
      <motion.nav
        className="fixed bottom-auto top-0 left-0 right-0 z-30 px-6 py-8 sm:px-8 sm:py-8"
        variants={{
          open: { y: "100vh", transition: { ease: "easeIn" } },
          closed: { y: "0vh", transition: { delay: 1.25, ease: "easeOut" } },
        }}
      >
        <div className="relative z-20 flex items-center justify-between leading-none">
          <h1 className="text-white text-xl sm:text-2xl tracking-widest">
            REVALDI
          </h1>
          <Button
            className="text-white text-xl sm:text-2xl tracking-widest p-0 h-auto"
            variant={"link"}
            size="lg"
            onClick={() => toggleOpen()}
          >
            MENU
          </Button>
        </div>
        <div className="absolute z-10 top-0 right-0 left-0 bottom-auto bg-navbar h-20" />
      </motion.nav>
      <motion.div
        variants={{
          open: { display: "flex", y: 0, transition: { ease: "easeIn" } },
          closed: {
            y: "-100%",
            display: "none",
            transition: {
              delay: 1.25,
              ease: "easeOut",
              display: {
                delay: 1.75,
              },
            },
          },
        }}
        className="fixed hidden inset-0 px-6 py-8 sm:p-16 bg-red-500  w-full z-50  justify-between flex-col"
      >
        <div className="flex justify-between">
          <h1 className="text-white text-xl sm:text-2xl tracking-widest">
            REVALDI
          </h1>
          <Button
            variant={"link"}
            className="text-white text-xl sm:text-2xl tracking-widest p-0"
            onClick={() => toggleOpen()}
          >
            CLOSE
          </Button>
        </div>
        <nav>
          <motion.ul
            variants={{
              open: {
                transition: { staggerChildren: 0.15, delayChildren: 0.5 },
              },
              closed: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                  staggerDirection: -1,
                },
              },
            }}
          >
            <MenuItem>01 - Home</MenuItem>
            <MenuItem>02 - Projects</MenuItem>
            <MenuItem>03 - My Story</MenuItem>
            <MenuItem>04 - Articles</MenuItem>
          </motion.ul>
        </nav>
        <nav>
          <motion.div
            variants={{
              open: {
                transition: { staggerChildren: 0.15, delayChildren: 0.5 },
              },
              closed: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                  staggerDirection: -1,
                },
              },
            }}
            className="flex justify-center sm:justify-between items-center flex-wrap space-x-4"
          >
            <motion.div className="uppercase" variants={menuItemVariants}>
              <span className="text-white font-medium">{"MADE BY "}</span>
              <Button
                asChild
                variant="link"
                className="text-base tracking-widest sm:text-lg font-medium text-white p-0"
              >
                <a href="#">{"AFFRI"}</a>
              </Button>
            </motion.div>
            <div className="uppercase flex flex-wrap items-center justify-center">
              <Button
                asChild
                variant="link"
                className="text-base tracking-widest sm:text-lg font-medium text-white"
              >
                <motion.a variants={menuItemVariants} href="#">
                  Linked In
                </motion.a>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-base tracking-widest sm:text-lg font-medium text-white"
              >
                <motion.a variants={menuItemVariants} href="#">
                  Instagram
                </motion.a>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-base tracking-widest sm:text-lg font-medium text-white"
              >
                <motion.a variants={menuItemVariants} href="#">
                  Facebook
                </motion.a>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-base tracking-widest sm:text-lg font-medium text-white"
              >
                <motion.a variants={menuItemVariants} href="#">
                  Tiktok
                </motion.a>
              </Button>
            </div>
          </motion.div>
        </nav>
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { y: "100vh" },
          closed: { y: "0vh", transition: { delay: 1.25, ease: "easeOut" } },
        }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Header;
