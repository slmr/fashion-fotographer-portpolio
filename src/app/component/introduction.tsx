import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
const SeparatorComponent = motion(Separator);

const Social = () => {
  return (
    <>
      <Button asChild variant="outline" size="icon">
        <Link href={"https://www.instagram.com/affri_i"} target="_blank">
          <Instagram />
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href={"https://www.facebook.com/affrislmr"} target="_blank">
          <Facebook />
        </Link>
      </Button>
      <Button variant="outline" size="icon">
        <Link href={"https://www.linkedin.com/in/affri"} target="_blank">
          <Linkedin />
        </Link>
      </Button>
    </>
  );
};
export const Introduction = () => {
  return (
    <div className="px-6 md:px-8 py-24 md:py-32 md:flex md:flex-row-reverse bg-black z-50 relative">
      <div className="flex w-full flex-col justify-between">
        <p className="whitespace-nowrap uppercase text-lg tracking-widest text-white">
          WHAT I DO
        </p>
        <div className="hidden md:flex space-x-4 mb-3">
          <Social />
        </div>
      </div>
      <div className="md:hidden flex space-x-4 my-6">
        <Social />
      </div>
      <div className="my-3 flex shrink-0 md:my-0 md:mx-10 overflow-hidden">
        <SeparatorComponent
          initial={{ y: "-100%" }}
          whileInView={{ y: "0" }}
          transition={{ ease: "easeIn", duration: 1 }}
          viewport={{ once: true }}
          className="md:h-full md:w-[2px]"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mr-auto text-white leading-snug md:leading-tight tracking-wide">
        As a <span className="text-red-500">photographer</span> I am dedicated
        to transforming ordinary moments into extraordinary{" "}
        <span className="text-red-500">memories.</span>
      </h1>
    </div>
  );
};
