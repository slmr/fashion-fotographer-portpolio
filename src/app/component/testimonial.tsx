"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const SeparatorComponent = motion(Separator);
const items = [
  {
    description: (
      <h2 className="text-white text-4xl md:text-5xl font-medium md:font-bold tracking-wide md:tracking-wider">
        Incredible eye for detail!{" "}
        <span className="text-red-500">Exceeded expectations</span>. Photos are
        a masterpiece.
      </h2>
    ),
    by: "Michaela Glas",
    company: "Gucci",
    position: "Creative Director",
  },
  {
    description: (
      <h2 className="text-white text-4xl md:text-5xl font-medium md:font-bold tracking-wide md:tracking-wider">
        Professional and personable.{" "}
        <span className="text-red-500">Transformed ordinary moments</span>. into
        extraordinary memories. Highly recommend.
      </h2>
    ),
    by: "Michaela Glas",
    company: "Gucci",
    position: "Creative Director",
  },
  {
    description: (
      <h2 className="text-white text-4xl md:text-5xl font-medium md:font-bold tracking-wide md:tracking-wider">
        Captured the essence perfectly! A{" "}
        <span className="text-red-500">true artist</span>. behind the lens.
        Memorable shots, worth every penny.
      </h2>
    ),
    by: "Michaela Glas",
    company: "Gucci",
    position: "Creative Director",
  },
];

const Testimoni = ({ item }: { item: (typeof items)[number] }) => {
  return (
    <div className="flex flex-col justify-between ml-8 md:ml-0">
      <div className="flex flex-col gap-8 md:gap-16 mb-4 relative">
        <span className="absolute -top-4 md:top-6 -left-10 md:-left-16 text-red-500 text-8xl md:text-[10rem]">
          {'"'}
        </span>
        {item.description}
        <div>
          <p className="text-white text-sm md:text-lg leading-relaxed">
            {item.by}
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            {item.company}
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            {item.position}
          </p>
        </div>
      </div>
      <div className="overflow-hidden ">
        <SeparatorComponent
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <div
      className="px-6 md:px-8 py-24 bg-black relative z-10"
      style={{ boxShadow: "0 0 30px 20px rgba(18, 18, 18, .4)" }}
    >
      <div className="mb-6 md:mb-24">
        <p className="whitespace-nowrap uppercase text-lg tracking-widerst text-white">
          WHAT THEY SAY
        </p>
        <div className="overflow-hidden">
          <SeparatorComponent
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] gap-8 md:gap-12 md:px-14">
        <div className="grid grid-cols-1 gap-10 md:gap-20">
          {items.map((item) => (
            <Testimoni key={item.by} item={item} />
          ))}
        </div>
        <div />
        {/* {items.map((item, index) => (
          <div key={item.by}>Person {index + 1}</div>
        ))} */}
      </div>
    </div>
  );
};
