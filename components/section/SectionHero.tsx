import Image from "next/image";
import Link from "next/link";

import { AiOutlineArrowRight } from "react-icons/ai";

const SectionHero = () => {
  return (
    <section className="background-1 px-6 pb-10">
      <div className="container relative z-20 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full flex-col items-center justify-center text-center text-white sm:w-1/2">
          <h1 className="text-3xl font-medium max-sm:pt-28 sm:text-5xl">
            Gali potensi dirimu dengan Kartu Prakerja
          </h1>
          <p className="mt-5">
            Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri tanpa
            pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja dan
            <span className="font-bold"> #SiapDariSekarang</span>
          </p>

          {/* Form */}
          <form className="relative z-20 mt-12 flex w-full flex-col rounded-full bg-white p-1 focus:shadow-lg sm:w-3/4">
            <input
              type="text"
              placeholder="Masukkan e-mail kamu"
              className="w-full rounded-full border-none bg-white/50 text-slate-500 placeholder-gray-500"
            />
            <Link
              href="/"
              role="button"
              aria-label="Button label"
              className="absolute right-0 top-1/2 z-10 mr-2 flex aspect-square -translate-y-1/2 items-center justify-center rounded-full bg-[#4f8fda] p-2 shadow hover:shadow-lg"
            >
              <AiOutlineArrowRight className="text-lg text-white" />
            </Link>
          </form>
          <span className="mt-3 text-sm">
            Masukkan e-mail untuk membuat akun Prakerja
          </span>

          {/* Image Center */}
          <div className="relative mt-8 flex h-[381px] w-[403.52px] overflow-hidden sm:hidden">
            <Image
              src="/hero-image-1.png"
              alt="image"
              width={403.52}
              height={381}
              loading="eager"
              className="absolute -bottom-[40px]"
            />
          </div>
        </div>

        {/* Image Left */}
        <Image
          src="/hero-image-1.png"
          alt="image"
          width={403.52}
          height={381}
          className="absolute -bottom-[40px] left-0 hidden h-[381px] w-auto sm:flex"
        />

        {/* Image Right */}
        <Image
          src="/hero-image-2.png"
          alt="image"
          width={430.92}
          height={381}
          className="absolute -bottom-[40px] right-0 hidden h-[381px] w-auto sm:flex"
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 z-20 h-10 rounded-tl-[40px] rounded-tr-[40px] bg-white"></div> */}
    </section>
  );
};

export default SectionHero;
