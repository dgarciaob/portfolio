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
        <Link
          className="flex lg:gap-4 gap-2 flex-col md:flex-row items-start relative group/link"
          href={props.insLink}
        >
          <div className="lg:sticky lg:top-14 md:py-2.5 flex-shrink-0 top-0">
            <Image
              alt={props.alt}
              className="w-7 h-7 outline-1 -outline-offset-1 outline outline-transparent rounded-lg dark:outline-zinc-900"
              src={props.src}
              width={28}
              height={28}
            />
          </div>
          <div className="w-full">
            <div className="flex gap-4 md:gap-8 justify-between items-center sticky top-0 lg:top-14 z-40 py-2">
              <div className="w-full h-full absolute left-1/2 -translate-x-1/2 bg-light-zinc/95 backdrop-blur-xl dark:bg-black/90" />
              <div className="flex md:gap-3 gap-2 items-center relative">
                <h3
                  className={cn(
                    "text-2xl font-semibold",
                    props.title === "Magnet"
                      ? "font-lufgaBold"
                      : props.title === "SabiaMente"
                      ? "font-recoletaAltBold"
                      : ""
                  )}
                >
                  {props.title}
                </h3>
                <div className="group relative">
                  <p className="text-sm truncate hidden md:block">
                    <span className="px-2 py-0.5 group bg-zinc-200 relative rounded-full text-zinc-600 inline-block cursor-help transition-colors hover:bg-zinc-200 hover:text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300">
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
              <button className="flex items-center gap-1 outline-transparent focus:outline-2 focus:outline-blue-50 disabled:cursor-not-allowed relative group-hover/link:underline truncate text-zinc-800 hover:underline underline-offset-2 font-medium rounded-md px-1.5 dark:text-zinc-200 pr-0">
                Leer más
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
            </div>
            <p className="mb-6 text-zinc-500 dark:text-zinc-400">
              {props.description}
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900/70 overflow-hidden lg:h-[512px] flex items-center justify-center">
              <Image
                className="relative lg:top-8 md:left-0 md:h-auto h-96 md:object-scale-down md:object-center object-cover object-left md:px-12 pl-4"
                src={props.bigImage}
                alt={props.bigImageAlt}
                width={512}
                height={384}
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default WorkCard;
