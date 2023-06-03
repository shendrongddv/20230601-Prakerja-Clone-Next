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

const ShortInfo = () => {
  const data = syaratMendaftar;

  return (
    <section
      id="shortInfo"
      className="rounded-tl-3xl rounded-tr-3xl bg-white px-6 py-20
    "
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:flex-row sm:justify-between">
        <div className="w-full flex-col space-y-4 sm:w-6/12">
          <h2 className="text-4xl font-semibold">Tentang Kartu Prakerja</h2>
          <p>
            Program Kartu Prakerja adalah program pengembangan kompetensi kerja
            yang ditujukan untuk pencari kerja, pekerja terkena PHK, dan/atau
            pekerja yang membutuhkan peningkatan kompetensi.
          </p>
          <Link href="/">Pelajari Lebih Lanjut</Link>
          <Image
            src="/img_tentang_prakerja_home.png"
            alt="image"
            width={462}
            height={273}
            className="h-auto w-full"
          />
          <div className="relative rounded-3xl bg-[#c5dff3] p-8">
            <FaWheelchair className="absolute -top-3 right-2 rounded-full bg-[#142b72] p-2 text-[40px] text-white" />
            <p className="text-sm text-[#142b72]">
              Program Kartu Prakerja merupakan program ramah difabel. Difabel
              dianjurkan untuk mendaftar dan mengikuti Program Kartu Prakerja.
            </p>
          </div>
        </div>
        <div className="flex w-screen flex-col rounded-3xl bg-[#f7f7f7]/80 p-8 sm:w-6/12">
          <h3 className="w-max border-b-[3px] border-[#4f8fda] text-xl font-semibold">
            Syarat Mendaftar
          </h3>
          <ul className="relative mt-6 flex flex-col space-y-3 border-l border-dashed border-[#142b72]/50">
            {data?.map((item) => (
              <li key={item.id} className="flex">
                <FaCheckCircle className="absolute -ml-[6px] mt-1 h-3 w-3 text-red-500" />
                <p className="ml-6 text-sm sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>

          <button className="btn btn-accent mt-6 sm:ml-auto">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShortInfo;
