import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const HomeBoard = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-600vh -680vh", "end -20vh"],
  });
  const bgTransform = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["#ef4444", "#121212"]
  );
  const scrollY = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });
  const videoScale = useTransform(scrollY, [0, 1], [1.3, 1]);
  const scaleTransform = useTransform(scrollY, [0, 1], [1, 3]);
  const xTransform = useTransform(scrollY, [0, 1], [0, -300]);
  const yTransform = useTransform(scrollY, [0, 1], [0, -300]);
  const xRightTransform = useTransform(scrollY, [0, 1], [0, 300]);
  const yRightTransform = useTransform(scrollY, [0, 1], [0, 300]);

  return (
    <>
      <div
        className="hidden md:block h-[600vh] -mt-[100vh] -mb-[100vh] static"
        ref={targetRef}
      >
        <motion.div className="sticky top-0 overflow-hidden">
          <motion.div
            className="grid grid-cols-[0.5fr_1fr_0.5fr] gap-12 h-[100svh]"
            style={{ scale: scaleTransform, background: bgTransform }}
          >
            <motion.div
              className="grid grid-cols-1 gap-12"
              style={{ x: xTransform, y: yTransform }}
            >
              <div className="relative">
                <Image
                  alt="image1"
                  src="/project-1.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative">
                <Image
                  alt="image2"
                  src="/project-2.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-10 grid-rows-[auto_auto_auto]">
              <div className="relative h-full">
                <Image
                  alt="image1"
                  src="/project-1.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative overflow-hidden ">
                <motion.video
                  style={{ scale: videoScale }}
                  autoPlay
                  muted
                  loop
                  className="object-cover h-full w-full"
                >
                  <source src="/video.mp4" type="video/mp4" />
                </motion.video>
              </div>
              <div className="relative h-full">
                <Image
                  alt="image1"
                  src="/project-1.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-12"
              style={{ x: xRightTransform, y: yRightTransform }}
            >
              <div className="relative">
                <Image
                  alt="image1"
                  src="/project-1.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative">
                <Image
                  alt="image2"
                  src="/project-2.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <video
        autoPlay
        muted
        loop
        className="md:hidden object-cover h-full w-full aspect-[3/4]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default HomeBoard;
