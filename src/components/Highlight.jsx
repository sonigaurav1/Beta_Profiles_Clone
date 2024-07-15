import { heroBaseImg, heroMiddleImg, heroTopImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);
const Highlight = () => {
  useGSAP(() => {
    gsap.to("#image-container", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#image-container",
        start: "top 50%",
        ease: "point1.inOut",
      },
    });

    gsap.fromTo(
      "#baseImg",
      { y: -100 },
      {
        y: 0,
        scrollTrigger: {
          trigger: "#baseImg",
          start: "top 90%",
          end: "top -50%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      "#midImg",
      { y: 100 },
      {
        y: 0,
        scrollTrigger: {
          trigger: "#baseImg",
          start: "top 90%",
          end: " top -50%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      ".scale-1",
      { scale: 0 },
      { scale: 1, duration: 1, stagger: 0.5, scrollTrigger: { scale: 1 } },
    );
  });
  return (
    <div id="image-container" className="relative h-dvh w-full opacity-0">
      <img
        id="baseImg"
        src={heroBaseImg}
        alt="base image"
        className="scale-1 absolute size-full"
      />
      <img
        id="midImg"
        src={heroMiddleImg}
        alt="middle image"
        className="scale-1 absolute size-full"
      />
      <img src={heroTopImg} alt="hero image" className="absolute size-full" />
    </div>
  );
};

export default Highlight;
