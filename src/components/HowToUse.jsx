/* eslint-disable react/prop-types */
import { howToUseCardContent } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";

const HowToUse = () => {
  return (
    <section className="w-full bg-gray-bg px-16 pb-16 pt-24">
      <h1 className="mb-16 text-center text-6xl font-semibold">
        How to use a <span className="text-blue-heading">Beta Profile</span>
      </h1>

      <div className="flex">
        {howToUseCardContent.map(({ image, subject, description }) => (
          <HowToUseCard key={subject} image={image} subject={subject} />
        ))}
      </div>
    </section>
  );
};

export default HowToUse;

const HowToUseCard = ({ image, subject }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="mx-3 flex max-w-max flex-col rounded-2xl bg-black">
      {!isOpen && (
        <img
          src={image}
          alt="update image"
          className="w-[400px] select-none p-8"
        />
      )}

      {isOpen && (
        <div className="flex w-[400px] flex-1 flex-col justify-center gap-2 py-8 pl-8 pr-16">
          <h3 className="text-2xl font-semibold">1. Archive a backup</h3>
          <p className="text-gray-text">
            Always back up your data and files before installing beta versions.
            For iPhone and iPad, we recommend that you do a backup using Finder.
          </p>

          <a href="" className="text-blue-400">
            Learn how to backup your iPhone and iPad →
          </a>

          <a href="" className="text-blue-400">
            Learn how to backup your Mac →
          </a>
        </div>
      )}

      <div className="flex justify-between px-8 pb-8">
        {!isOpen && <h3 className="text-2xl font-semibold">{subject}</h3>}

        <BsPlusCircleFill
          className={cn(
            "ml-auto cursor-pointer text-3xl transition-all",
            isOpen && "rotate-45",
          )}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </article>
  );
};
