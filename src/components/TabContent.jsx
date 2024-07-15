/* eslint-disable react/prop-types */
import React from "react";
import OSCard from "./OSCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TabContent = ({ title, type, info }) => {
  useGSAP(() => {
    gsap.to("#latest-content", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section
      id="latest-content"
      className="flex w-full translate-y-20 flex-col items-center opacity-0"
    >
      <h2
        className={`mb-2 text-center text-4xl font-semibold ${type === "latest" ? "text-blue-primary" : type === "developer" ? "text-yellow-600" : "text-purple-500"}`}
      >
        {title}
      </h2>

      <p className="w-[770px] pb-5 text-center">{info}</p>

      <div className="grid grid-cols-3 gap-6">
        <OSCard />
        <OSCard />
        <OSCard />
        <OSCard />
        <OSCard />
        <OSCard />
      </div>
    </section>
  );
};

export default TabContent;
