import Image from "next/image";
import Link from "next/link";

import { FaWheelchair, FaCheckCircle } from "react-icons/fa";

// Data
const syaratMendaftar = [
  {
    id: 1,
    text: "WNI berusia paling rendah 18 tahun dan paling tinggi 64 tahun.",
  },
  {
    id: 2,
    text: "Tidak sedang menempuh pendidikan formal.",
  },
  {
    id: 3,
    text: "Sedang mencari kerja, pekerja/buruh yang terkena PHK, atau pekerja/buruh yang membutuhkan peningkatan kompetensi kerja, seperti pekerja/buruh yang dirumahkan dan pekerja bukan penerima upah, termasuk pelaku usaha mikro & kecil.",
  },
  {
    id: 4,
    text: "Bukan Pejabat Negara, Pimpinan dan Anggota DPRD, Aparatur Sipil Negara, Prajurit TNI, Anggota Polri, Kepala Desa dan perangkat desa dan Direksi/Komisaris/Dewan Pengawas pada BUMN atau BUMD.",
  },
  {
    id: 5,
    text: "Maksimal 2 NIK dalam 1 KK yang menjadi Penerima Kartu Prakerja.",
  },
];

const SectionIntro = () => {
  const items = syaratMendaftar;

  return (
    <section className="z-50 -mt-10 rounded-tl-3xl rounded-tr-[40px] bg-white py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Right */}
          <div className="w-full space-y-6 max-sm:px-6 sm:w-5/12">
            {/* # */}
            <h2 className="h2">Tentang Kartu Prakerja</h2>
            {/* # */}
            <p className="pb-6">
              Program Kartu Prakerja adalah program pengembangan kompetensi
              kerja yang ditujukan untuk pencari kerja, pekerja terkena PHK,
              dan/atau pekerja yang membutuhkan peningkatan kompetensi.
            </p>
            {/* # */}
            <Link href="/" className="font-medium text-primary-400">
              Pelajari Lebih Lanjut
            </Link>
            {/* # */}
            <Image
              src="/section-image-1.png"
              alt="image"
              width={401}
              height={221}
              className="w-full sm:w-4/5"
            />
            {/* # */}
            <div className="relative rounded-3xl bg-primary-300 p-6 sm:p-8">
              <p className="text-xs text-primary-500 sm:text-sm">
                Program Kartu Prakerja merupakan program ramah difabel. Difabel
                dianjurkan untuk mendaftar dan mengikuti Program Kartu Prakerja.
              </p>
              {/* ## */}
              <div className="absolute -top-3 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
                <FaWheelchair className="text-2xl leading-none text-white" />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 rounded-[40px] bg-slate-100 p-6 sm:w-6/12 sm:px-9 sm:py-10">
            <h3 className="h3 max-w-max border-b-4 border-primary-400">
              Syarat Mendaftar
            </h3>
            <ul className="flex flex-col">
              {items?.map((item) => (
                <li
                  key={item.id}
                  className="relative border-l-2 border-dashed pb-3 pl-6 last-of-type:border-l-0"
                >
                  <FaCheckCircle className="absolute -left-2 mt-1 h-4 w-4 text-secondary-500" />
                  <span className="text-sm sm:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
            <Link href="/" className="btn btn-accent ml-0 sm:ml-auto">
              Daftra Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
