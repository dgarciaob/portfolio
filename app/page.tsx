import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main className="mt-32 selection:bg-green-200">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-4xl max-w-2xl text-center">
            <span className="text-muted-foreground">Diego García. </span>{" "}
            Diseñador y Desarrollador de productos digitales.
          </h1>
        </div>

        <div className="flex gap-4 items-center mb-8 mt-32">
          <h2 className="font-medium text-lg text-muted-foreground dark:text-zinc-700 flex-shrink-0">
            Mis Proyectos
          </h2>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900"></div>
        </div>

        <div className="flex flex-col gap-60">
          <WorkCard
            src="/images/magnetSocialsLogo.png"
            alt="Magnet Logo"
            title="Magnet"
            description="Agencia de Diseño y Desarrollo Web"
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
            title="SabiaMente"
            description="Software de gestión para psicólogos"
            date="2024 Q1"
            exactDate="02 / 2024"
            extLink="https://www.magnetperu.com/"
            insLink="/work/psicosaas"
            bigImage="/images/dashboard1.png"
            bigImageAlt="SaaS Mockup"
          />
          <WorkCard
            src="/images/magnetSocialsLogo.png"
            alt="Magnet Logo"
            title="Magnet"
            description="Agencia de Diseño y Desarrollo Web"
            date="2023 Q4"
            exactDate="12 / 2023"
            extLink="https://www.magnetperu.com/"
            insLink="/work/magnet"
            bigImage="/images/mockup-magnet.png"
            bigImageAlt="Magnet Mockup"
          />
          <WorkCard
            src="/images/magnetSocialsLogo.png"
            alt="Magnet Logo"
            title="Magnet"
            description="Agencia de Diseño y Desarrollo Web"
            date="2023 Q4"
            exactDate="12 / 2023"
            extLink="https://www.magnetperu.com/"
            insLink="/work/magnet"
            bigImage="/images/mockup-magnet.png"
            bigImageAlt="Magnet Mockup"
          />
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
