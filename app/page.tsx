import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";
import Contact from "@/components/Contact";
import FechaCompleta from "@/components/FechaCompleta";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="mt-32 selection:bg-green-200 dark:selection:bg-purple-300">
        <section className="flex items-center justify-center">
          <h1 className="font-bold text-4xl max-w-2xl text-center">
            <span className="text-muted-foreground">Diego García. </span>{" "}
            Diseñador y Desarrollador de productos digitales.
          </h1>
        </section>

        <FechaCompleta />

        <section className="flex gap-4 items-center mb-8 mt-32">
          <h2 className="font-medium text-md text-muted-foreground dark:text-zinc-200 flex-shrink-0">
            Mis Proyectos
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700"></div>
        </section>

        <section className="flex flex-col gap-60">
          <WorkCard
            src="/images/magnetSocialsLogo.png"
            alt="Magnet Logo"
            title="Magnet"
            description="Agencia de Diseño y Desarrollo Web - Diseño y Desarrollo"
            date="2023 Q4"
            exactDate="12 / 2023"
            extLink="https://www.magnetperu.com/"
            insLink="/work/magnet"
            bigImage="/images/mockup-magnet.png"
            bigImageAlt="Magnet Mockup"
          />
          <WorkCard
            src="/images/logosaas.png"
            alt="SaaS Logo"
            title="Nous"
            description="Software de gestión para psicólogos - Diseño y Desarrollo"
            date="2024 Q1"
            exactDate="02 / 2024"
            extLink="https://www.magnetperu.com/"
            insLink="/work/psicosaas"
            bigImage="/images/calendarNous.png"
            bigImageAlt="SaaS Mockup"
          />
          <WorkCard
            src="/images/fitterLogoBg.png"
            alt="Fitter Logo"
            title="Fitter"
            description="Aplicación de seguimiento nutricional - Diseño y Desarrollo"
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
            description="Aplicación para revolucionar la experiencia Healthcare - Desarrollo"
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
            Conectemos
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700"></div>
        </section>

        <Contact />
      </main>
    </MaxWidthWrapper>
  );
}
