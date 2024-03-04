import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  title: string;
  description: string;
  date: string;
  exactDate: string;
  extLink: string;
  insLink: string;
  src: string;
  alt: string;
  bigImage: string;
  bigImageAlt: string;
  className?: string;
}

function WorkCard(props: WorkCardProps) {
  return (
    <section>
      <div className="w-full group/project">
        <div className="flex lg:gap-4 gap-2 flex-col md:flex-row items-start relative group/link">
          <div className=" lg:top-14 md:py-2.5 flex-shrink-0 top-0">
            {" "}
            {/* lg:sticky */}
            <Link href={props.insLink}>
              <Image
                alt={props.alt}
                className="w-7 h-7 rounded-lg"
                src={props.src}
                width={28}
                height={28}
              />
            </Link>
          </div>
          <div className="w-full">
            <div className="flex gap-4 md:gap-8 justify-between items-center  z-40 py-2">
              <div className="w-full absolute left-1/2 -translate-x-1/2 bg-light-zinc/95 backdrop-blur-xl dark:bg-black/90" />
              <div className="flex md:gap-3 gap-2 items-center relative">
                <h3
                  className={cn(
                    "text-2xl font-semibold",
                    props.title === "Magnet"
                      ? "font-lufgaBold"
                      : props.title === "Nous"
                      ? "font-recoletaAltBold"
                      : props.title === "Fitter"
                      ? "font-lufgaBold"
                      : "font"
                  )}
                >
                  {props.title}
                </h3>
                <div className="group relative">
                  <p className="text-sm truncate hidden md:block">
                    <span className="px-2 py-0.5 group bg-zinc-200 relative rounded-full text-zinc-600 inline-block cursor-help transition-colors hover:bg-zinc-200 hover:text-zinc-700 dark:bg-[#1f1f1f] dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300">
                      {props.date}
                    </span>
                  </p>
                  <span className="opacity-0 font-normal group-hover:opacity-100 delay-75 scale-90 group-hover:scale-100 pointer-events-none transition-all duration-150 ease-out absolute text-sm px-2 py-1 rounded-full bg-black z-[99] text-white dark:bg-white dark:text-black -bottom-5 group-hover:-bottom-6 left-[50%] translate-x-[-50%] translate-y-3">
                    <span className="w-2.5 h-2.5 rounded-sm bg-black absolute scale-75 group-hover:scale-100 transition-transform duration-200 z-30 transform rotate-45 dark:bg-white -top-1 left-[50%] translate-x-[-50%]"></span>
                    <span className="z-50 relative truncate">
                      {props.exactDate}
                    </span>
                  </span>
                </div>
              </div>
              <Link href={props.insLink}>
                <button className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed relative group-hover/link:underline truncate text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 dark:text-zinc-200 pr-0">
                  Read More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="flex-shrink-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4L17 12L9 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
            <p className="mb-6 text-zinc-500 dark:text-zinc-400">
              {props.description}
            </p>
            <Link href={props.insLink}>
              <div className="bg-muted dark:bg-[#1f1f1f]/70 overflow-hidden lg:h-[512px] flex flex-row items-center justify-center rounded-md">
                <Image
                  className="rounded-sm hover:scale-105 transition-transform duration-200 ease-out"
                  src={props.bigImage}
                  alt={props.bigImageAlt}
                  width={700}
                  height={525}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkCard;
