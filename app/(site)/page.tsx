import SectionBlog from "@/components/section/SectionBlog";
import SectionHero from "@/components/section/SectionHero";
import SectionIntro from "@/components/section/SectionIntro";
import SectionMitra from "@/components/section/SectionMitra";
import SectionReview from "@/components/section/SectionReview";
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
      <SectionReview />
      <SectionBlog />
    </>
  );
}
