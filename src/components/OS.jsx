import { chooseABetaLogo } from "@/utils";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContent from "./TabContent";
import { tabContent } from "@/constants";

const OS = () => {
  return (
    <section className="w-full mb-28">
      <img src={chooseABetaLogo} alt="choose beta logo" className="mx-auto" />

      <Tabs defaultValue="latest" className="flex flex-col items-center">
        <TabsList className="my-8 max-w-max rounded-full border border-gray-border bg-gray-bg">
          {["latest", "developer", "public"].map((val) => (
            <TabsTrigger
              key={val}
              value={val}
              className="w-32 rounded-full text-base font-semibold"
            >
              {val}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex w-full flex-col items-center">
          {tabContent.map(({ title, type, info }) => (
            <TabsContent key={type} value={type}>
              <TabContent title={title} type={type} info={info} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default OS;
