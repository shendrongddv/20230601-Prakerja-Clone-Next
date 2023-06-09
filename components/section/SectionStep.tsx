import Image from "next/image.js";
import Link from "next/link";

// Data
const tahapanProsedur = [
  {
    id: 1,
    title: "Daftar",
    text: "Buat akun Prakerja dengan data diri kamu. Siapkan e-mail, NIK, nomor KK, nomor HP yang masih aktif dan selesaikan tes kemampuan dasar untuk menyelesaikan proses pendaftaran.",
    img: "/step/img-home-step-01.svg",
  },
  {
    id: 2,
    title: "Gabung Gelombang",
    text: "Ikut Seleksi dengan gabung gelombang. Tunggu pengumuman hasil seleksinya.",
    img: "/step/img-home-step-02.svg",
  },
  {
    id: 3,
    title: "Pilih Pelatihan",
    text: "Gunakan saldo pelatihan sebesar Rp 3,5 juta, pilih yang kamu butuhkan di Mitra Platform Digital dan bayar dengan nomor Kartu Prakerjamu. Pastikan rekening bank/e-wallet kamu sudah tersambung sebelum membeli pelatihan.",
    img: "/step/img-home-step-03.svg",
  },
  {
    id: 4,
    title: "Ikuti Pelatihan",
    text: "Kerjakan pre-test dan post-test selesaikan pelatihan dan dapatkan sertifikat.",
    img: "/step/img-home-step-04.svg",
  },
  {
    id: 5,
    title: "Beri Rating dan Ulasan",
    text: "Berikan rating dan ulasan terhadap pelatihan yang telah kamu selesaikan di dashboard Prakerjamu.",
    img: "/step/img-home-step-05.svg",
  },
  {
    id: 6,
    title: "Dapatkan Insentif",
    text: "Tunggu beberapa hari, kamu akan menerima insentif Rp.600.000 di rekening bank/e-walletmu.",
    img: "/step/img-home-step-06.svg",
  },
  {
    id: 7,
    title: "Isi Survey Evaluasi",
    text: "Jawab 2 survei evaluasi di dashboard Prakerjamu dan dapatkan insentif Rp.50.000 untuk setiap survei.",
    img: "/step/img-home-step-07.svg",
  },
];

const SectionStep = () => {
  const items = tahapanProsedur;

  return (
    <section className="px-6 py-20">
      <div className="container">
        <h2 className="h2">Langkah Mudah Kartu Prakerja</h2>

        {/* Grid */}
        <div className="mt-8 grid grid-flow-dense grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-3">
          {/* Grid Item */}
          {items?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl bg-[#f7f7f7] p-8"
            >
              <h3 className="h3 mt-6">{item.title}</h3>
              <p className="mt-4 text-sm text-primary-700 sm:text-[15px]">
                {item.text}
              </p>

              {/* Icon */}
              <div className="absolute -top-[15px] left-[10px] flex">
                <div className="z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary-500">
                  <span className="text-sm leading-none text-white">
                    {item.id}
                  </span>
                </div>
                <div className="-ml-[10px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={30}
                    width={30}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Static Grid Item */}
          <div className="bg-image-1 relative flex items-center justify-start rounded-3xl p-8 max-sm:overflow-hidden sm:col-span-2">
            <div className="z-20 flex w-2/3 flex-col items-start justify-center">
              <h2 className="text-xl font-medium text-primary-700 sm:text-4xl">
                Tunggu apa lagi?
              </h2>
              <p className="mt-4 text-sm text-primary-700 sm:text-base">
                Belajar gratis, dapat sertifikat dan insentif pula. Dengan Kartu
                Prakerja, raih masa depan lebih cerah!
              </p>
              <Link href="/" className="btn btn-accent mt-10 max-sm:mb-10">
                Daftar Sekarang
              </Link>
            </div>
            <Image
              src="/home-step-cta-img.webp"
              alt="Image"
              width={260}
              height={276.69}
              className="absolute -right-5 bottom-0 z-10 max-sm:h-[218.36px] max-sm:w-[205.19px] sm:right-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStep;
