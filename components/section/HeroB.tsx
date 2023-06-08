import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";

const HeroB = () => {
  return (
    <section className="isolate bg-[url(/bg-1.svg)] bg-cover bg-center bg-no-repeat px-6 max-sm:pt-10">
      <div className="container relative flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col items-center text-center sm:w-2/4">
          <h1 className="h1 text-4xl font-semibold text-white sm:text-5xl">
            Gali potensi dirimu dengan Kartu Prakerja
          </h1>
          <p className="mt-6 text-white">
            Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri tanpa
            pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja dan
            <span className="font-bold">#SiapDariSekarang</span>
          </p>

          {/* Form */}
          <form className="relative z-20 mt-12 flex w-full flex-col rounded-full bg-white p-1 focus:shadow-lg sm:w-3/5">
            <input
              type="text"
              placeholder="Masukkan e-mail kamu"
              className="w-full rounded-full border-none bg-white/50 text-slate-500 placeholder-gray-500"
            />
            <button className="absolute right-0 top-1/2 z-10 mr-2 flex aspect-square -translate-y-1/2 items-center justify-center rounded-full bg-[#4f8fda] p-2 shadow hover:shadow-lg">
              <AiOutlineArrowRight className="text-lg text-white" />
            </button>
          </form>
          <span className="mb-6 mt-4 text-xs text-white sm:text-sm">
            Masukkan e-mail untuk membuat akun Prakerja
          </span>

          {/* Image Center */}
          <Image
            src="/hero-female-img.png"
            alt="image"
            width={360}
            height={360}
            className="mb-8 flex h-auto w-full sm:hidden"
          />

          {/* Image Right */}
          <Image
            src="/hero-female-img.png"
            alt="image"
            width={360}
            height={360}
            className="absolute bottom-8 left-0 z-10 hidden h-auto w-1/3 sm:flex"
          />

          {/* Image Left */}
          <Image
            src="/hero-male-img.png"
            alt="image"
            width={360}
            height={360}
            className="absolute bottom-8 right-0 z-10 hidden h-auto w-1/3 sm:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroB;
