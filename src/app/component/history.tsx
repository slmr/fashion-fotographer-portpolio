"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const SeparatorComponent = motion(Separator);
const items = [
  {
    yaer: "Now",
    at: "Freelance",
    position: "Photo & Videographer",
  },
  {
    yaer: "2022",
    at: "Belitung Creative.co",
    position: "Content Creator",
  },
  {
    yaer: "2021",
    at: "Gerubak Ikhram",
    position: "Photo & Videographer",
  },
  {
    yaer: "2020",
    at: "Locca Loco",
    position: "Social Media Marketing",
  },
  {
    yaer: "2019",
    at: "Freelance",
    position: "Photo & Videographer",
  },
  {
    yaer: "2018",
    at: "belitungku.co.id",
    position: "Photo & Videographer",
  },
];

const History = ({ item }: { item: (typeof items)[number] }) => {
  return (
    <div className="flex md:gap-10 min-w-full">
      <div className="hidden md:block overflow-hidden mb-10">
        <SeparatorComponent
          initial={{ y: "-100%" }}
          whileInView={{ y: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          orientation="vertical"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-between">
        <div className="flex flex-col gap-20 mb-4">
          <h3 className="text-white text-4xl md:text-5xl font-bold">
            {item.yaer}
          </h3>
          <div>
            <p className="text-white text-sm md:text-lg leading-relaxed">
              {item.at}
            </p>
            <p className="text-red-500 text-sm md:text-lg  leading-relaxed">
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
    </div>
  );
};

export const Histories = () => {
  return (
    <div
      className="px-6 md:px-8 py-24 bg-black relative z-10"
      style={{ boxShadow: "0 0 30px 20px rgba(18, 18, 18, .4)" }}
    >
      <div className="mb-6 md:mb-12">
        <p className="whitespace-nowrap uppercase text-lg tracking-widest text-white">
          HISTORY
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
      <div className="grid grid-cols-[1fr_1fr] md:grid-cols-3 gap-8 md:gap-12 md:px-14">
        {items.map((item) => (
          <History key={item.yaer} item={item} />
        ))}
      </div>
    </div>
  );
};
