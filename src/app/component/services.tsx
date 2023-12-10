"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const SeparatorComponent = motion(Separator);
const items = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="68"
        fill="none"
        viewBox="0 0 71 68"
      >
        <path
          stroke="currentColor"
          d="m50.6013 16.4568.3759-.3591-.3734-.3617L36.0472 1.6408l-.3454-.3345-.3478.3321-14.7559 14.0953-.3811.364.3835.3614 14.756 13.9048.3452.3253.3431-.3276 14.5565-13.9048Zm18.7465 17.9024.3735-.3617-.3759-.3591-14.5566-13.9047-.3453-.3299-.3454.3299-14.5566 13.9047-.3759.3591.3735.3617 14.5565 14.0952.3479.3368.3478-.3368 14.5565-14.0952Zm-37.4905.0024.3811-.3641-.3836-.3614-14.7559-13.9048-.3429-.3231-.3429.3231-14.756 13.9048-.3836.3614.3811.3641 14.756 14.0952.3454.3299.3453-.3299 14.756-14.0952Zm18.744 18.0952.3759-.3591-.3734-.3617-14.5566-14.0952-.3454-.3345-.3478.3321-14.7559 14.0953-.3811.364.3835.3614 14.756 13.9048.3452.3253.3431-.3276 14.5565-13.9048Z"
        />
      </svg>
    ),
    title: "Foto Productions",
    description:
      "I contributed to diverse projects, collaborating closely with clients to create high-quality visual content. My role involved using cutting-edge technology to capture and produce compelling imagery, meeting client expectations across events, portraits, and commercial campaigns.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="67"
        fill="none"
        viewBox="0 0 50 67"
      >
        <path
          stroke="currentColor"
          d="M14.7857 22.1871V1.7096l13.2857 20.77v22.0408l-13.2857 20.77V44.8129l7.0641-11.0435.1723-.2694-.1723-.2694-7.0641-11.0435ZM49.4065 33.5 29.0714 65.2904V44.8129l7.0641-11.0435.1723-.2694-.1723-.2694-7.0641-11.0435V1.7096L49.4065 33.5ZM13.7857 22.4796v22.0408L.5 65.2904V1.7096l13.2857 20.77Z"
        />
      </svg>
    ),
    title: "Photo Retouching",
    description:
      "I possess a keen eye for detail and a strong command of editing software. My expertise lies in enhancing images to achieve a polished and professional look. I excel in color correction, blemish removal, skin tone adjustments, and overall enhancement, ensuring images meet or exceed the desired aesthetic standards. ",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="65"
        fill="none"
        viewBox="0 0 44 65"
      >
        <path
          stroke="currentColor"
          d="M1.5932 35.7093 1.028 36.5H26.5821L7.2114 63.71l-.5624.79h10.8607l.1494-.2113 24.7491-35 .5577-.7887H17.6854L37.0562 1.29l.5623-.79H26.7595L26.61.7093l-25.0168 35Z"
        />
      </svg>
    ),
    title: "Film Editing",
    description:
      "I bring a creative approach and technical proficiency to craft compelling visual narratives. Proficient in industry-standard editing software, I excel in assembling raw footage, refining sequences, and integrating audio and visual elements to produce seamless and impactful storytelling. ",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="67"
        fill="none"
        viewBox="0 0 57 67"
      >
        <path
          stroke="currentColor"
          d="M25.4375 10.6899V9.816l-.7533.4428L7.0598 20.617l-.2467.145V46.2381l.2467.1449 17.6244 10.3582.7533.4428V10.6899Zm6.125 45.6203v.8738l.7533-.4428L49.9402 46.383l.2467-.1449V20.762l-.2467-.145-17.6244-10.3582-.7533-.4428v46.4942ZM.5 17.0361 28.5.58l28 16.4561v32.9278L28.5 66.42.5 49.9639V17.0361Z"
        />
      </svg>
    ),
    title: "Content Creator",
    description:
      "Proficient in content creation, I possess a versatile skill set aimed at engaging and captivating audiences across various platforms. Through a strategic blend of creativity and market insight, I conceptualize, produce, and curate compelling content tailored to specific audiences and brand objectives.",
  },
];

const Service = ({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) => {
  return (
    <li className="relative overflow-hidden">
      {index === 0 ? null : (
        <SeparatorComponent
          initial={{ x: "-100%" }}
          whileInView={{ x: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12"
        />
      )}
      <div className="md:grid md:grid-cols-[.25fr_1fr]">
        <div className="mb-8 md:mb-0 text-red-500">{item.icon}</div>
        <div className="">
          <h3 className="text-white text-3xl mb-2 md:text-4xl md:font-medium">
            {item.title}
          </h3>
          <p className="text-stone-400 font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </li>
  );
};

export const Services = () => {
  return (
    <div
      className="px-6 md:px-8 py-24 bg-black relative z-10"
      style={{ boxShadow: "0 0 30px 20px rgba(18, 18, 18, .4)" }}
    >
      <div className="mb-6 md:mb-12">
        <p className="whitespace-nowrap uppercase text-lg tracking-widest text-white">
          Services
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
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr]">
        <h2 className="text-4xl md:text-6xl font-bold max-w-5xl mr-auto text-white leading-snug tracking-wide md:leading-tight mb-12">
          Elevate your <span className="text-red-500">brand</span>
          {" with my diverse "}
          <span className="text-red-500">photo and video services</span>
        </h2>
        <div className="overflow-hidden hidden md:block">
          <SeparatorComponent
            initial={{ y: "-100%" }}
            whileInView={{ y: "0" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mt-2"
            orientation="vertical"
          />
        </div>
        <ul className="grid grid-cols-1 gap-y-12 md:px-14">
          {items.map((item, index) => (
            <Service key={item.title} item={item} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
