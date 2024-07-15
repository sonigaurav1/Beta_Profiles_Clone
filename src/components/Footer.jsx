import { Logo } from "@/utils";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="common-padding mt-14 bg-gray-bg py-14">
      <div className="flex w-full">
        <div className="w-1/2 px-3 pb-2">
          <img src={Logo} alt="beta profile logo" className="mb-2" />
          <p className="text-sm text-gray-text">
            A free website to download beta profiles for iOS, iPadOS, watchOS,
            tvOS and macOS.
          </p>
        </div>

        <div className="ml-10 flex w-1/2">
          <div className="w-1/2 space-y-2">
            <p className="text-sm font-bold">Explore</p>
            {["FAQs", "Supported Devices", "Contact"].map((item) => (
              <p key={item} className="text-[.8rem] text-gray-text">
                {item}
              </p>
            ))}
          </div>
          <div className="w-1/2 space-y-2">
            <p className="text-sm font-bold">Learn</p>
            {[
              "Feedback",
              "Delete Profile",
              "Restore",
              "Switch Dev → Public",
            ].map((item) => (
              <p key={item} className="text-[.8rem] text-gray-text">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Separator className="m-3 bg-gray-border" />

      <div className="mx-3 flex justify-between px-3 pt-4">
        <div className="space-y-1">
          <p className="text-sm leading-none text-gray-text">
            © 2024 — Beta Profiles.
          </p>
          <p className="text-[.8rem] leading-none text-gray-text">
            This website is not affiliated with Apple Inc.
          </p>
        </div>

        <div className="mb-2.5 flex items-center justify-center gap-2 py-1">
          <p className="pr-2 text-[.8rem] leading-none text-gray-text">
            Legal Info
          </p>
          <p className="pl-2 text-[.8rem] leading-none text-gray-text">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
