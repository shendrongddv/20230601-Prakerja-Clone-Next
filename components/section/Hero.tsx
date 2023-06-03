import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <section
      className="bg-[url(/hero-img.svg)] bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative flex min-h-screen items-center justify-center px-6 pt-16 text-white sm:px-0 sm:pt-0">
          <div className="flex w-full flex-col items-center text-center sm:w-2/4">
            <h1 className="text-3xl font-semibold sm:text-5xl">
              Gali potensi dirimu dengan Kartu Prakerja
            </h1>
            <p className="mt-6">
              Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri
              tanpa pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja
              dan <span className="font-bold">#SiapDariSekarang</span>
            </p>
            {/* ##### */}
            <form className="relative mt-12 flex w-full flex-col rounded-full bg-white p-1 focus:shadow-lg sm:w-4/5">
              <input
                type="text"
                placeholder="Masukkan e-mail kamu"
                className="w-full rounded-full border-none bg-white/50 text-slate-500 placeholder-gray-500"
              />
              <button className="absolute right-0 top-1/2 z-10 mr-2 flex aspect-square -translate-y-1/2 items-center justify-center rounded-full bg-[#4f8fda] p-2 shadow hover:shadow-lg">
                <AiOutlineArrowRight className="text-lg text-white" />
              </button>
            </form>
            <span className="mb-6 mt-4 text-xs sm:text-sm">
              Masukkan e-mail untuk membuat akun Prakerja
            </span>
            <Image
              src="/img_girl4.png"
              width={400}
              height={400}
              alt="image"
              className="mt-4 block h-auto w-full select-none sm:hidden"
            />
          </div>
          {/* ##### */}
          <Image
            src="/img_girl4.png"
            width={400}
            height={400}
            alt="image"
            className="absolute bottom-0 left-0 hidden h-auto w-2/6 select-none sm:block"
          />
          {/* ##### */}
          <Image
            src="/img_boy_new.png"
            width={400}
            height={400}
            alt="image"
            className="absolute bottom-0 right-0 hidden h-auto w-2/6 select-none sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
