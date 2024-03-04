import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";

function Magnet() {
  return (
    <MaxWidthWrapper>
      <main className="mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
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

        <h2 className="text-xl font-bold mt-20">The Brand</h2>
        <div className="mt-12 rounded-lg flex flex-col md:flex md:flex-row md:justify-between">
          <Image
            src="/images/magnetBrand.png"
            alt="Magnet Background"
            width={1000}
            height={1000}
            className="rounded-lg h-[20rem] w-[40rem] object-cover"
          />
          <p className="font-semibold">As a team, we preach 6 main values:</p>
          <ul className="space-y-4">
            <li>We move fast</li>
            <li>Approachable</li>
            <li>Magnet Empowerment</li>
            <li>Transparency</li>
            <li>Lifelong Learners</li>
            <li>Optimism</li>
          </ul>
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
          The website was built with Next.js, TailwindCSS, Framer Motion and
          deployed on Vercel.
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
