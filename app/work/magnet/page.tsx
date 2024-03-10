import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import Scroller from "@/components/Scroller";
import Link from "next/link";
import Image from "next/image";

function Magnet() {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 md:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-start mb-2 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <h1 className="font-lufgaBold text-3xl">
            <Link
              href="https://www.magnetperu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5746F4] transition-all duration-300 ease-in-out"
            >
              Magnet
            </Link>
          </h1>
          <p className="font-medium text-muted-foreground">
            Design & Development Agency for Startups
          </p>
        </div>
        <p className="max-w-xl mt-8 font-medium">
          Magnet is focused on helping founders and startups transform their
          vision into reality. We are passionate about building products that
          people love.
        </p>

        <h2 className="text-xl font-bold mt-20">The Implementation</h2>

        <p className="mt-12">
          Implemented custom hooks, animations leveraging Framer Motion and its
          hooks, and more! Basic DB with Supabase for Contact Form.
        </p>

        <div className="flex flex-row items-start overflow-x-auto mt-5">
          <div className="flex flex-row space-x-8 overflow-x-auto snap-mandatory no-scrollbar">
            <div className="w-[30rem] md:w-[50rem] rounded-xl snap-start bg-muted dark:bg-[#FEFEFE] dark:selection:bg-green-200 flex justify-center items-center">
              <div className="overflow-x-hidden">
                <Scroller />
              </div>
            </div>
            <Image
              src="/images/mainMagnet.png"
              alt="Magnet Home"
              width={1200}
              height={1200}
              className="w-[30rem] md:w-[50rem] rounded-xl snap-start"
            />
            <Image
              src="/images/projectsMagnet.png"
              alt="Magnet Projects"
              width={1200}
              height={1200}
              className="w-[30rem] md:w-[50rem] rounded-xl snap-start"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-32">The Goal</h2>
        <p className="max-w-xl mt-12 font-medium">
          Our goal is to help founders get to the market as soon and as
          efficient as possible by building products that fit into the market
          and, most importantly, that users love.
        </p>
        <p className="max-w-xl mt-4 font-medium">
          Being in the digital world, is imperative to have a strong online
          presence. We are here to help you with that.
        </p>

        <h2 className="text-xl font-bold mt-32">The Work</h2>
        <p className="max-w-xl mt-12 font-medium">
          Check the website{" "}
          <Link
            href="https://www.magnetperu.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5746F4] hover:no-underline transition-all duration-300 ease-in-out underline underline-offset-4"
          >
            right here.
          </Link>
        </p>
        <p className="max-w-xl mt-4 font-medium">
          The website was built with Next.js, Typescript, TailwindCSS, Framer
          Motion and deployed on Vercel.
        </p>

        <section className="flex gap-4 items-center mb-8 mt-32">
          <h2 className="font-medium text-md text-muted-foreground dark:text-zinc-200 flex-shrink-0">
            Let&apos;s Connect
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700"></div>
        </section>
        <Contact />
      </main>
    </MaxWidthWrapper>
  );
}

export default Magnet;

const people = [
  {
    id: 1,
    name: "Diego García",
    designation: "Designer & Developer",
    image: "/images/profilePicDiego.png",
    className: "h-8 w-8",
  },
  {
    id: 2,
    name: "Bruno Gardini",
    designation: "Designer",
    image: "/images/380.png",
    className: "h-8 w-8",
  },
];
