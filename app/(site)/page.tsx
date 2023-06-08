import Artikel from "@/components/section/Artikel";
import FAQ from "@/components/section/FAQ";
import HeroB from "@/components/section/HeroB";
import IntroVideo from "@/components/section/IntroVideo";
import Mitra from "@/components/section/Mitra";
import Pakar from "@/components/section/Pakar";
import Prosedur from "@/components/section/Prosedur";
import ShortInfoB from "@/components/section/ShortInfoB";

export default function Home() {
  return (
    <main>
      <HeroB />
      <ShortInfoB />
      <IntroVideo />
      <Prosedur />
      <Mitra />
      <Pakar />
      <Artikel />
      <FAQ />
    </main>
  );
}
