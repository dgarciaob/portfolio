import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Fitter = () => {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 md:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-start mb-2 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <h1 className="font-bold text-3xl hover:text-[#D691D2] transition-all duration-300 ease-in-out">
            Fitter
          </h1>
          <p className="font-medium text-muted-foreground">
            Nutritional Tracking App
          </p>
        </div>
        <p className="max-w-xl mt-8 font-medium">
          Fitter is a nutritional tracking app that helps users to track their
          progress and achieve their fitness goals. It provides users with a way
          to track their meals, calories, and progress. It also provides users
          with a way to plan their meals.
        </p>

        <h2 className="text-xl font-bold mt-20">The Implementation</h2>

        <p className="mt-12">
          Implemented with Expo Router, State Management with useContext,
          useState, useEffect.
        </p>

        <div className="flex flex-row items-start overflow-x-auto mt-5">
          <div className="flex flex-row space-x-8 overflow-x-auto snap-mandatory no-scrollbar">
            <Image
              src="/images/fitter1.png"
              alt="Fitter"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/fitter2.png"
              alt="Fitter"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/fitter3.png"
              alt="Fitter"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/fitter4.png"
              alt="Fitter"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-32">The Goal</h2>
        <p className="max-w-xl mt-12 font-medium">
          Create a seamless solution for calorie tracking, meal planning, and a
          way to track your progress. We aim to help users to achieve their
          fitness goals.
        </p>

        <div className="flex flex-row space-x-4 mt-32">
          <h2 className="text-xl font-bold">The Work</h2>
          <Badge>Work in Progress</Badge>
        </div>

        <p className="max-w-xl mt-12 font-medium">
          You will soon be able to check the App on both iOS and Android. Stay
          tuned!
        </p>
        <p className="max-w-xl mt-4 font-medium">
          The App is currently being built with React Native, Typescript, Expo,
          and Firebase.
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
};

export default Fitter;

const people = [
  {
    id: 1,
    name: "Diego García",
    designation: "Designer & Developer",
    image: "/images/profilePicDiego.png",
    className: "h-8 w-8",
  },
];
