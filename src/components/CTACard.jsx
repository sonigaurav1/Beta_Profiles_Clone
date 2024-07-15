import { avatarEmoji } from "@/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { FaUserPlus, FaBell } from "react-icons/fa6";

const CTACard = () => {
  return (
    <article className="relative mb-14 flex max-w-[660px] items-center gap-6 rounded-xl bg-gray-bg px-6 py-3">
      <div className="relative flex h-14 w-[380px]">
        {avatarEmoji.map((avatar, i) => (
          <img
            key={i}
            src={avatar}
            alt="Avatar"
            className={cn("size-14 rounded-full border-2 border-gray-bg", {
              absolute: i > 0,
            })}
            style={{ top: 0, left: i * 36 }}
          />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-1">7000+ People</h3>
        <p className="news-small-text text-gray-text">
          have joined our Telegram group and are discussing beta updates.
        </p>
      </div>

      <div className="space-y-2">
        <button className="blue-btn flex w-full items-center justify-center gap-2">
          <FaUserPlus />
          Join
        </button>
        <button className="blue-btn flex w-full items-center justify-center gap-2 !bg-gray-border">
          <FaBell />
          Subscribe
        </button>
      </div>
    </article>
  );
};

export default CTACard;
