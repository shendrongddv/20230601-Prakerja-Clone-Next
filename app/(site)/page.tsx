import SectionHero from "@/components/section/SectionHero";
import SectionIntro from "@/components/section/SectionIntro";
import SectionMitra from "@/components/section/SectionMitra";
import SectionStep from "@/components/section/SectionStep";
import SectionVideo from "@/components/section/SectionVideo";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionIntro />
      <SectionVideo />
      <SectionStep />
      <SectionMitra />
    </>
  );
}
