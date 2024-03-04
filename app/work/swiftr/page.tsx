import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";

function Swiftr() {
  return (
    <MaxWidthWrapper>
      <main className="mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-start mb-2 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <h1 className="text-3xl font-bold">
            <Link
              href="https://www.swiftr.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition-all duration-300 ease-in-out"
            >
              Swiftr
            </Link>
          </h1>
          <p className="font-medium text-muted-foreground">
            Real Estate Automation Agency
          </p>
        </div>
        <p className="max-w-xl mt-8 font-medium">
          Swiftr is a real estate automation agency that helps real estate
          businesses save hours of manual work and earn more money by automating
          their lead management processes.
        </p>

        <h2 className="text-xl font-bold mt-20">The Brand</h2>
        <div className="mt-12 rounded-lg flex flex-col md:flex md:flex-row md:justify-between">
          <Image
            src="/images/swiftrBg.png"
            alt="Swiftr Background"
            width={1000}
            height={1000}
            className="rounded-lg h-[20rem] w-[40rem] object-fit"
          />
          <p className="font-semibold">
            We believe in adding value by automating:
          </p>
          <ul className="space-y-4">
            <li>Lead Acquisition</li>
            <li>Lead Management</li>
            <li>Reports & Data</li>
            <li>Marketing</li>
            <li>Communication</li>
          </ul>
        </div>

        <h2 className="text-xl font-bold mt-32">The Goal</h2>
        <p className="max-w-xl mt-12 font-medium">
          Our goal is to help real estate businesses manage their leads and
          automate their processes, so they can focus on what they do best:
          selling properties.
        </p>
        <p className="max-w-xl mt-4 font-medium">
          Promptly Design & Development of a beautiful, responsive, and fast
          website to showcase the service.
        </p>

        <h2 className="text-xl font-bold mt-32">The Work</h2>
        <p className="max-w-xl mt-12 font-medium">
          Check the website{" "}
          <Link
            href="https://www.swiftr.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-500 hover:no-underline transition-all duration-300 ease-in-out underline underline-offset-4"
          >
            right here.
          </Link>
        </p>
        <p className="max-w-xl mt-4 font-medium">
          The website was built with Next.js, TailwindCSS, Framer Motion and
          deployed on Vercel. Shout out to{" "}
          <Link
            href="https://ui.aceternity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 hover:no-underline transition-all duration-300 ease-in-out underline underline-offset-4"
          >
            Aceternity UI
          </Link>{" "}
          for the amazing UI Components.
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

export default Swiftr;

const people = [
  {
    id: 1,
    name: "Diego García",
    designation: "Designer & Developer",
    image: "/images/profilePicDiego.png",
    className: "h-8 w-8",
  },
];
