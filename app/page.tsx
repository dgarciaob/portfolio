import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";
import Contact from "@/components/Contact";
import FechaCompleta from "@/components/FechaCompleta";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltip";
import "@/components/css/Navbar.css";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 md:mt-32 selection:bg-green-200 dark:selection:bg-purple-300">
        <section className="flex flex-col items-center justify-center animate-navbar-slide-down transition">
          <AnimatedTooltipPreview />
          <h1 className="font-bold text-4xl max-w-2xl text-center">
            <span className="text-muted-foreground">Diego García. </span>{" "}
            Designer & Developer of digital products.
          </h1>
        </section>

        <FechaCompleta />

        <section className="flex gap-4 items-center mb-8 mt-32">
          <h2 className="font-medium text-md text-muted-foreground dark:text-zinc-200 flex-shrink-0">
            My Projects
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700"></div>
        </section>

        <section className="flex flex-col gap-32 md:gap-60">
          <WorkCard
            src="/images/magnetSocialsLogo.png"
            alt="Magnet Logo"
            title="Magnet"
            description="Design & Development Agency - Design & Development"
            date="2023 Q4"
            exactDate="12 / 2023"
            extLink="https://www.magnetperu.com/"
            insLink="/work/magnet"
            bigImage="/images/mockup-magnet.png"
            bigImageAlt="Magnet Mockup"
          />
          <WorkCard
            src="/images/swiftrLogoWeb2.png"
            alt="Swiftr Logo"
            title="Swiftr"
            description="Real Estate Automation Agency - Design & Development"
            date="2024 Q1"
            exactDate="03 / 2024"
            extLink="https://www.swiftr.agency"
            insLink="/work/swiftr"
            bigImage="/images/swiftrMain.png"
            bigImageAlt="Swiftr Mockup"
          />
          <WorkCard
            src="/images/logosaas.png"
            alt="SaaS Logo"
            title="Nous"
            description="Software as a Service for Psychologists - Design & Development"
            date="2024 Q1"
            exactDate="02 / 2024"
            extLink="https://www.magnetperu.com/"
            insLink="/work/psicosaas"
            bigImage="/images/nousWeb.png"
            bigImageAlt="SaaS Mockup"
          />
          <WorkCard
            src="/images/fitterLogoBg.png"
            alt="Fitter Logo"
            title="Fitter"
            description="Nutritional Tracking App - Design & Development"
            date="2023 Q3"
            exactDate="09 / 2023"
            extLink="https://www.magnetperu.com/"
            insLink="/work/fitter"
            bigImage="/images/fitter.png"
            bigImageAlt="Fitter Mockup"
          />
          <WorkCard
            src="/images/bewellLogo.png"
            alt="Be Well Logo"
            title="Be Well"
            description="Healthcare Experience all-in-one App - Development"
            date="2024 Q1"
            exactDate="02 / 2024"
            extLink="https://www.magnetperu.com/"
            insLink="/work/bewell"
            bigImage="/images/bewellApp.png"
            bigImageAlt="Bewell Mockup"
          />
        </section>

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

const people = [
  {
    id: 1,
    name: "Diego García",
    designation: "Designer & Developer",
    image: "/images/profilePicDiego.png",
  },
];
