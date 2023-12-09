"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MotionValue,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const MotionImage = motion(Image);
const SeparatorComponent = motion(Separator);
const items = [
  {
    slug: "wisom",
    name: "Wisom",
    image: "/project-1.jpg",
  },
  {
    slug: "asmeralda",
    name: "Asmeralda",
    image: "/project-2.jpg",
  },
  {
    slug: "kufra",
    name: "Kufra",
    image: "/project-3.jpg",
  },
  {
    slug: "lance",
    name: "Lance",
    image: "/project-4.jpg",
  },
];

const MotionButton = motion(Button);

const Project = ({
  item,
  translateYProgress,
}: {
  item: (typeof items)[number];
  translateYProgress: MotionValue<string>;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const xTransform = useTransform(xSpring, [-0.5, 0.5], ["-20%", "20%"]);
  const yTransform = useTransform(ySpring, [-0.5, 0.5], ["-20%", "20%"]);

  const [showDetailButton, setSetshowDetailButton] = useState(false);

  function handleOnMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPost = mouseX / width - 0.5;
    const yPost = mouseY / height - 0.5;
    x.set(xPost);
    y.set(yPost);
  }
  function handleOnMouseEnter() {
    setSetshowDetailButton(true);
  }
  function handleOnMouseLeave() {
    x.set(0);
    y.set(0);
    setSetshowDetailButton(false);
  }

  return (
    <li
      key={item.name}
      className="relative overflow-hidden"
      onMouseEnter={handleOnMouseEnter}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      <Link href={`/project/${item.slug}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <MotionButton
            style={{
              x: xTransform,
              y: yTransform,
            }}
            animate={{
              opacity: showDetailButton ? 1 : 0,
              scale: showDetailButton ? 1 : 0,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            className="rounded-full h-28 w-28 bg-red-500 text-white"
          >
            View Project
          </MotionButton>
        </div>

        <div className="aspect-[4/3] overflow-hidden bg-red-200">
          <div className="w-full h-full relative">
            <MotionImage
              style={{ y: translateYProgress, scaleX: 1.1, scaleY: 1.2 }}
              src={item.image}
              alt={item.name}
              fill
              objectFit="cover"
            />
          </div>
          d
        </div>
        <p className="px-6 md:px-8 py-3 uppercase tracking-widest text-white">
          {item.name}
        </p>
      </Link>
    </li>
  );
};
export const RecentProjects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const translateYProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10", "10%"]
  );
  return (
    <div>
      <div className="px-6 md:px-8 mb-6">
        <p className="whitespace-nowrap uppercase text-lg tracking-widest text-white">
          Recent Projects
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
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4" ref={targetRef}>
        {items.map((item) => (
          <Project
            key={item.name}
            item={item}
            translateYProgress={translateYProgress}
          />
        ))}
      </ul>
    </div>
  );
};
