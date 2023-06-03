import Artikel from "@/components/section/Artikel";
import Hero from "@/components/section/Hero";
import IntroVideo from "@/components/section/IntroVideo";
import Prosedur from "@/components/section/Prosedur";
import ShortInfo from "@/components/section/ShortInfo";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShortInfo />
      <IntroVideo />
      <Prosedur />
      <Artikel />
    </main>
  );
}
