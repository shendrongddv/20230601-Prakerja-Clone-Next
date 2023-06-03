import Image from "next/image";

const FooterCTA = () => {
  return (
    <section
      id="footerCTA"
      className="bg-[url(/last-cta-bg.svg)] bg-cover bg-center bg-no-repeat px-6 py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col content-between items-center gap-8 overflow-hidden sm:flex-row">
        <div className="w-full text-center sm:text-start">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Yuk, persiapkan masa depanmu bersama-sama!
          </h2>
          <button className="btn btn-accent mt-4">Daftar Sekarang</button>
        </div>
        {/* ##### */}
        <Image
          src="/last-cta-img.png"
          alt="image"
          width={584}
          height={369}
          className="z-0 -mb-6 h-auto w-full sm:-mb-8"
        />
      </div>
    </section>
  );
};

export default FooterCTA;
