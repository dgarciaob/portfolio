import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltip";
import { DirectionAwareHoverDemo } from "@/components/DirectionHover";
import AppScroll from "@/components/AppScroll";
import Contact from "@/components/Contact";
import Age from "@/components/Age";
import { Quote } from "lucide-react";

function AboutPage() {
  return (
    <MaxWidthWrapper>
      <main className="mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <section className="mx-40 flex flex-col items-start">
          <div>
            <AnimatedTooltipPreview />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-4xl max-w-2xl text-center">
              Diego García Obando
            </h1>
            <p className="font-medium text-muted-foreground">
              Design · Development · Sales · Marketing
            </p>
          </div>
          <p className="max-w-xl mt-8 font-medium">
            Hey! I&apos;m a <Age /> years old Peruvian, self-taught Software
            Developer & Designer. Mainly my career has been sales-focused, and
            last year I decided to start my journey as a developer.
          </p>
          <p className="max-w-xl mt-4 font-medium">
            I&apos;ve been working on really cool projects and I&apos;m always
            looking for new ways to improve my skills.{" "}
            <span className="font-extrabold text-pretty dark:text-cyan-400 text-cyan-600">
              But enough about work.
            </span>
          </p>
          <p className="max-w-xl mt-4 font-medium">
            Here is a little bit about me:
          </p>
        </section>
        <h2 className="text-xl font-bold mx-40 mt-20">Photos</h2>
        <section className="mx-40 flex flex-col items-start overflow-x-auto">
          <div className="flex flex-row space-x-8 overflow-x-auto snap-mandatory">
            <DirectionAwareHoverDemo
              imageUrl="/images/Aqp.jpeg"
              className="snap-start"
              title="Arequipa"
              subtitle="The White City"
            />
            <DirectionAwareHoverDemo
              imageUrl="/images/Csq.jpeg"
              className="snap-start"
              title="Cusco - Home of one of the World Wonders"
              subtitle="With another World Wonder"
            />
            <DirectionAwareHoverDemo
              imageUrl="/images/all.jpeg"
              className="snap-start"
              title="My Everything"
              subtitle="My blood. No description needed"
            />
            <DirectionAwareHoverDemo
              imageUrl="/images/bros1.png"
              className="snap-start"
              title="Day Ones"
              subtitle="Miky & Franco"
            />
            <DirectionAwareHoverDemo
              imageUrl="/images/marianis.jpeg"
              className="snap-start"
              title="Alfajores"
              subtitle="Favourite Dessert. Made by my Sis!"
            />
            <DirectionAwareHoverDemo
              imageUrl="/images/padel.jpeg"
              className="snap-start"
              title="Padel"
              subtitle="Trendy Sport in Peru"
            />
          </div>
        </section>
        <section className="mx-40 flex flex-col items-start mt-20">
          <h2 className="text-xl font-bold">Music</h2>
          <div className="mt-12 flex flex-row space-x-8">
            <iframe
              src="https://open.spotify.com/embed/playlist/1BN25IgobPYxTSRqXH3LIL?utm_source=generator"
              width="100%"
              height="352"
              className="rounded-xl"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/4ANZKZkg74qHyVgd0gwO32?utm_source=generator"
              width="100%"
              className="rounded-xl"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/5QOBT97OmYCZo1W5u7tRrB?utm_source=generator"
              width="100%"
              height="352"
              className="rounded-xl"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </section>{" "}
        <section className="mx-40 flex flex-col items-start mt-20">
          <h2 className="text-xl font-bold">Apps</h2>
          <AppScroll />
        </section>
        <section className="mx-40 flex flex-col items-start mt-20 mb-20">
          <h2 className="text-xl font-bold">Quote</h2>
          <div className="h-[8rem] dark:bg-[#1f1f1f] bg-muted-foreground w-[16rem] p-3 rounded-xl mt-12">
            <Quote size={32} className="dark:text-white text-white" />
            <p className="text-sm font-bold mt-5 dark:text-muted-foreground text-white">
              If a man knows not which port he sails, no wind is favorable.
            </p>
          </div>
        </section>
        <section className="flex gap-4 mx-40 items-center mb-8 mt-32">
          <h2 className="font-medium text-md text-muted-foreground dark:text-zinc-200 flex-shrink-0">
            Let&apos;s Connect
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700"></div>
        </section>
        <div className="mx-40">
          <Contact />
        </div>
      </main>
    </MaxWidthWrapper>
  );
}

export default AboutPage;
