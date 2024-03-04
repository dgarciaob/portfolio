import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AppScroll = () => {
  return (
    <div className="w-full mt-12">
      <ul className="flex flex-row space-x-4 flex-wrap">
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center bg-white rounded-lg">
                <Image
                  src="/images/notionLogo2.png"
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </TooltipTrigger>
              <TooltipContent className="font-bold py-1 rounded-3xl text-black dark:text-white dark:bg-[#1f1f1f] bg-white border border-solid border-muted-foreground dark:border-muted-foreground">
                Notion
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center bg-white rounded-lg">
                <Image
                  src="/images/figmaLogo.png"
                  alt="Figma Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </TooltipTrigger>
              <TooltipContent className="font-bold py-1 rounded-3xl text-black dark:text-white dark:bg-[#1f1f1f] bg-white border border-solid border-muted-foreground dark:border-muted-foreground">
                Figma
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center bg-white rounded-lg">
                <Image
                  src="/images/gmailLogo.png"
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </TooltipTrigger>
              <TooltipContent className="font-bold py-1 rounded-3xl text-black dark:text-white dark:bg-[#1f1f1f] bg-white border border-solid border-muted-foreground dark:border-muted-foreground">
                Gmail
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center bg-white rounded-lg">
                <Image
                  src="/images/spotifyLogo.png"
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </TooltipTrigger>
              <TooltipContent className="font-bold py-1 rounded-3xl text-black dark:text-white dark:bg-[#1f1f1f] bg-white border border-solid border-muted-foreground dark:border-muted-foreground">
                Spotify
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center bg-white rounded-lg">
                <Image
                  src="/images/xLogo.png"
                  alt="Notion Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </TooltipTrigger>
              <TooltipContent className="font-bold py-1 rounded-3xl text-black dark:text-white dark:bg-[#1f1f1f] bg-white border border-solid border-muted-foreground dark:border-muted-foreground">
                Twitter (X)
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      </ul>
    </div>
  );
};

export default AppScroll;
