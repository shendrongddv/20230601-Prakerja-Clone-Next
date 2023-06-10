import Image from "next/image";

import { IoMdQuote } from "react-icons/io";

import { TestimoniPakar } from "../../dummydata.js";

const SectionReview = () => {
  const experts = TestimoniPakar;

  return (
    <section className="overflow-hidden bg-[#f8f8f8] py-10">
      <div className="container max-sm:px-6">
        <h2 className="h2">Menurut Para Pakar</h2>

        {/* Review Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex items-start justify-start gap-4">
              <Image
                src="/testimoni/pakar/1.png"
                alt="Image"
                height={72}
                width={72}
                className=""
              />

              <div className="flex flex-col gap-2">
                <h3 className="h3 text-primary-500">H.M Queen Maxima</h3>
                <span className="border-b pb-2 text-xs text-primary-700">
                  Penasihat Khusus Sekjen PBB untuk Pengembangan Inklusi
                  Keuangan bagi Pembangunan
                </span>
                <Image
                  src="/testimoni/organisasi/1.png"
                  alt="Image"
                  height={32}
                  width={206}
                />
              </div>
            </div>
            <div className="mt-6 flex">
              <IoMdQuote className="mr-2 hidden h-6 w-6 flex-none text-primary-300 sm:block" />
              <p className="flex-1 text-sm text-primary-700 sm:text-lg">
                Kemitraan pemerintah dan swasta adalah kunci kesuksesan program
                inovatif berskala besar. Program Kartu Prakerja dari Indonesia
                menunjukkan bagaimana kemitraan dengan lembaga pelatihan
                digital, platform pekerjaan, online marketplace, dan fintech
                telah membantu lebih dari 11 juta penerima.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex items-start justify-start gap-4">
              <Image
                src="/testimoni/pakar/1.png"
                alt="Image"
                height={72}
                width={72}
                className=""
              />

              <div className="flex flex-col gap-2">
                <h3 className="h3 text-primary-500">H.M Queen Maxima</h3>
                <span className="border-b pb-2 text-xs text-primary-700">
                  Penasihat Khusus Sekjen PBB untuk Pengembangan Inklusi
                  Keuangan bagi Pembangunan
                </span>
                <Image
                  src="/testimoni/organisasi/1.png"
                  alt="Image"
                  height={32}
                  width={206}
                />
              </div>
            </div>
            <div className="mt-6 flex">
              <IoMdQuote className="mr-2 hidden h-6 w-6 flex-none text-primary-300 sm:block" />
              <p className="flex-1 text-sm text-primary-700 sm:text-lg">
                Kemitraan pemerintah dan swasta adalah kunci kesuksesan program
                inovatif berskala besar. Program Kartu Prakerja dari Indonesia
                menunjukkan bagaimana kemitraan dengan lembaga pelatihan
                digital, platform pekerjaan, online marketplace, dan fintech
                telah membantu lebih dari 11 juta penerima.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex items-start justify-start gap-4">
              <Image
                src="/testimoni/pakar/1.png"
                alt="Image"
                height={72}
                width={72}
                className=""
              />

              <div className="flex flex-col gap-2">
                <h3 className="h3 text-primary-500">H.M Queen Maxima</h3>
                <span className="border-b pb-2 text-xs text-primary-700">
                  Penasihat Khusus Sekjen PBB untuk Pengembangan Inklusi
                  Keuangan bagi Pembangunan
                </span>
                <Image
                  src="/testimoni/organisasi/1.png"
                  alt="Image"
                  height={32}
                  width={206}
                />
              </div>
            </div>
            <div className="mt-6 flex">
              <IoMdQuote className="mr-2 hidden h-6 w-6 flex-none text-primary-300 sm:block" />
              <p className="flex-1 text-sm text-primary-700 sm:text-lg">
                Kemitraan pemerintah dan swasta adalah kunci kesuksesan program
                inovatif berskala besar. Program Kartu Prakerja dari Indonesia
                menunjukkan bagaimana kemitraan dengan lembaga pelatihan
                digital, platform pekerjaan, online marketplace, dan fintech
                telah membantu lebih dari 11 juta penerima.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 h-36 w-screen bg-[url(/Vector.svg)] bg-cover bg-top bg-no-repeat"></div>
    </section>
  );
};

export default SectionReview;
