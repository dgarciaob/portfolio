import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Bewell = () => {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 md:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-start mb-2 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <h1 className="font-bold text-3xl hover:text-green-700 transition-all duration-300 ease-in-out">
            Be Well
          </h1>
          <p className="font-medium text-muted-foreground">
            Healthcare Experience all-in-one App
          </p>
        </div>
        <p className="max-w-xl mt-8 font-medium">
          Be Well is an all-in-one app for healthcare professionals. It is
          designed to help them manage their appointments, patients, and
          payments. It also provides patients with resources, a journal for
          thoughts, video analysis of their mood and tests.
        </p>

        <h2 className="text-xl font-bold mt-20">The Implementation</h2>

        <p className="mt-12">
          Implemented <strong>new</strong> Expo Router, State Management with
          useContext, useState, useEffect. Made use of Camera, Media and Video
          Permissions and Components
        </p>

        <div className="flex flex-row items-start overflow-x-auto mt-5">
          <div className="flex flex-row space-x-8 overflow-x-auto snap-mandatory no-scrollbar">
            <Image
              src="/images/bewellHome.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellAppointment.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellAppointment2.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellJournal.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellResources.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellVideo.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
            <Image
              src="/images/bewellVideo2.jpeg"
              alt="Bewell Home"
              width={1200}
              height={1200}
              className="w-52 rounded-xl snap-start"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-32">The Goal</h2>
        <p className="max-w-xl mt-12 font-medium">
          Provide a seamless solution for healthcare professionals to manage
          their practice. Dual purpose: to help the patient
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

export default Bewell;

const people = [
  {
    id: 1,
    name: "Diego García",
    designation: "Front End Developer",
    image: "/images/profilePicDiego.png",
    className: "h-8 w-8",
  },
  {
    id: 2,
    name: "Fahad Ishaq",
    designation: "Designer & Back End Developer",
    image: "/images/fahad.png",
    className: "h-8 w-8",
  },
];
