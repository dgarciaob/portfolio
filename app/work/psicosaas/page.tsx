import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Contact from "@/components/Contact";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function PsicoSaas() {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 md:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row items-center justify-start mb-2 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <h1 className="font-recoletaAltBold text-3xl hover:text-green-700 transition-all duration-300 ease-in-out">
            Nous
          </h1>
          <p className="font-medium text-muted-foreground">
            Sofware as a Service for Psychologists
          </p>
        </div>
        <p className="max-w-xl mt-8 font-medium">
          Nous aims to be the all-in-one SaaS for psychologists to manage their
          patients and appointments in a more efficient way. The platform also
          provides a way to manage the payments and the history of the patients.
        </p>

        <h2 className="text-xl font-bold mt-20">The Implementation</h2>

        <p className="mt-12">
          Beautifully crafted by Bruno Gardini - UX/UI Designer, aimed to be the
          all-in-one solution for psychologists.
        </p>

        <div className="flex flex-row items-start overflow-x-auto mt-5">
          <div className="flex flex-row space-x-8 overflow-x-auto snap-mandatory no-scrollbar">
            <Image
              src="/images/calendarMonth.png"
              alt="Calendar Month"
              width={1200}
              height={1200}
              className="w-[50rem] rounded-xl snap-start"
            />
            <Image
              src="/images/calendarWeek.png"
              alt="Calendar Week"
              width={1200}
              height={1200}
              className="w-[50rem] rounded-xl snap-start"
            />
            <Image
              src="/images/patientsScreen.png"
              alt="Patients Screen"
              width={1200}
              height={1200}
              className="w-[50rem] rounded-xl snap-start"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-32">The Goal</h2>
        <p className="max-w-xl mt-12 font-medium">
          Our goal is to give back time to psychologists, so they can focus on
          their patients and not on the administrative tasks.
        </p>
        <p className="max-w-xl mt-4 font-medium">
          Mental Health is a growing market and giving a hand to the main actors
          of this market is a priority for us.
        </p>

        <div className="flex flex-row space-x-4 mt-32">
          <h2 className="text-xl font-bold">The Work</h2>
          <Badge>Work in Progress</Badge>
        </div>

        <p className="max-w-xl mt-12 font-medium">
          You will soon be able to check the SaaS. Stay tuned!
        </p>
        <p className="max-w-xl mt-4 font-medium">
          The software is currently being built with Next.js, Typescript,
          TailwindCSS, PostgreSQL, Clerk Auth and will be deployed on Vercel.
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

export default PsicoSaas;

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
  {
    id: 3,
    name: "Bruno Jacobs",
    designation: "Designer & Developer",
    image: "/images/profilePicBJ.png",
    className: "h-8 w-8",
  },
];
