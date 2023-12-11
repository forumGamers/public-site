"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@/components/atom/tabs/material-tailwind";
import "@/components/styles/mollecul/tabs/profileTabs.css";
import { useState, useTransition } from "react";
import LoadingOverlay from "@/components/loader/overlay";
import type { PostDataParams, TimeLine } from "@/interfaces/post";
import InfinityScroll, {
  type InfinityScrollContext,
} from "@/components/organ/utils/infiniteScroll";

export interface ProfileTabsProps {
  tabs: Tabs[];
}

export interface Tabs {
  name: string;
  data: TimeLine[];
  handler: (params: PostDataParams) => Promise<TimeLine[]>;
  context?: InfinityScrollContext;
}

export default function ProfileTabs({ tabs }: ProfileTabsProps) {
  const [isPending, startTransition] = useTransition();
  const [active, setActive] = useState<Tabs>(tabs[0]);

  const activedTransition = (tab: string) => {
    startTransition(async () => {
      const newActive = tabs.find((el) => el.name === tab) as Tabs;
      if (!newActive.data.length)
        newActive.data = await newActive.handler({ ...newActive.context ,page: "1", limit: "20" });

      setActive(newActive);
    });
  };

  return (
    <Tabs
      className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-[34px] w-full"
      id="custom-animation"
      value="html">
      <TabsHeader className="bg-black-900 border-b border-gray-700 border-solid flex flex-row gap-2.5 h-[35px] md:h-auto items-end justify-between md:px-10 sm:px-5 px-[91px] py-[3px] w-100">
        {tabs.map(({ name }) => (
          <Tabs
            key={name}
            value={name}
            className={`border-b border-gray-500 border-solid cursor-pointer font-semibold h-[35px] leading-[normal] text-center text-xs w-[235px] hover:bg-blue-gray-300 hover:transition-colors hover:duration-1000 hover:ease-in-out ${
              name === active.name
                ? " bg-blue-500 rounded-sm transition-colors duration-500 ease-in-out"
                : ""
            } rounded-md items-center`}
            onClick={() => activedTransition(name)}>
            {name}
          </Tabs>
        ))}
      </TabsHeader>
      <TabsBody className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
        <LoadingOverlay spinner active={isPending} text="...loading">
          <TabPanel value={active.name} className="!opacity-100 !static">
            <InfinityScroll
              key={active.name}
              handler={active.handler}
              initialState={active.data}
              context={active.context}
            />
          </TabPanel>
        </LoadingOverlay>
      </TabsBody>
    </Tabs>
  );
}
