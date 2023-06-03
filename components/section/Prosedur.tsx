import Image from "next/image.js";

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

const Prosedur = () => {
  const items = tahapanProsedur;

  return (
    <section className="px-6 py-16">
      <div className="container">
        <h2 className="h2">Langkah Mudah Kartu Prakerja</h2>
        <div className="mt-12 grid grid-flow-dense gap-8 sm:grid-cols-3">
          {items?.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl bg-[#f7f7f7]/80 p-8"
            >
              <span className="absolute -top-4 left-4 z-10 flex aspect-square h-6 items-center justify-center rounded-full bg-blue-600 leading-none text-white">
                {item.id}
              </span>
              <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <Image src={item.img} alt={item.title} height={40} width={40} />
              </div>
              <h3 className="h3 mt-4">{item.title}</h3>
              <p className="mt-4 text-sm opacity-80 sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
          {/* ##### */}
          <div className="bg-image-1 rounded-3xl sm:col-span-2">
            <div className="relative p-8">
              {/*  */}
              <div className="z-10 sm:w-3/5">
                <h2 className="h2">Tunggu apa lagi?</h2>
                <p>
                  Belajar gratis, dapat sertifikat dan insentif pula. Dengan
                  Kartu Prakerja, raih masa depan lebih cerah!
                </p>
                <button className="btn btn-accent mt-24 sm:ml-auto sm:mt-6">
                  Daftar Sekarang
                </button>
              </div>
              {/*  */}
              <Image
                src="/home-step-cta-img.webp"
                alt="image"
                width={872}
                height={928}
                className="absolute bottom-0 right-0 z-0 h-auto w-3/5 rounded-br-3xl sm:right-8 sm:h-[250px] sm:w-auto sm:rounded-br-none"
              />
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prosedur;
