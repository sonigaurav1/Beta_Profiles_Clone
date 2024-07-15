import { iOS17Logo, iphoneiOS17 } from "@/utils";
import React from "react";
import { FiDownload } from "react-icons/fi";

const OSCard = () => {
  return (
    <article className="flex flex-col items-center rounded-2xl border border-gray-border bg-gray-bg pt-10">
      <div>
        <img src={iOS17Logo} alt="iOS 17" className="size-14" />
      </div>

      <h2 className="my-7 text-center text-3xl font-semibold">
        iOS 17 Public Beta
      </h2>

      <span className="flex items-center overflow-hidden rounded-lg border border-gray-border">
        <p className="bg-[#5151516B] p-1.5 text-sm font-bold">iOS 17.5</p>
        <p className="p-1">RC</p>
      </span>

      <p className="my-4 w-[230px] text-center">
        Get beta updates on your iPhone automatically.
      </p>

      <button className="blue-btn mb-10 flex items-center gap-3">
        <FiDownload />
        Install Profile
      </button>

      <div className="w-[350px]">
        <img src={iphoneiOS17} alt="iPhone 17 update" className="" />
      </div>
    </article>
  );
};

export default OSCard;
