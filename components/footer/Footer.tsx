import Image from "next/image";
import Link from "next/link";

import {
  BsTelephone,
  BsChatLeftDots,
  BsEnvelopePaper,
  BsClockHistory,
  BsQuote,
} from "react-icons/bs";
import FooterCTA from "../section/FooterCTA";

const Footer = () => {
  return (
    <>
      <FooterCTA />
      <div className="z-20 -mt-10 rounded-tl-3xl rounded-tr-3xl bg-[url(/footer-bg.svg)] bg-cover bg-center bg-no-repeat pb-10 pt-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* TOP Footer */}
          <div className="mb-16 flex flex-col gap-8 sm:flex-row">
            <div className="w-full sm:w-1/4">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/pancasila-icon.png"
                  alt="Pancasila"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-sm font-bold text-white">
                  Kementerian Koordinator Bidang Perekonomian Republik Indonesia
                </span>
              </div>
            </div>
            <div className="relative w-full rounded-3xl bg-white/75 p-8 sm:w-3/4">
              <div className="flex w-full flex-col gap-2 sm:pl-4">
                <BsQuote className="absolute left-2 top-2 text-6xl text-[#142b72]/25" />
                <p className="text-sm italic text-[#212529]">
                  Program Kartu Prakerja berlanjut pada tahun 2023 dengan skema
                  normal, di mana bantuan pelatihan akan fokus kepada
                  pengembangan kompetensi angkatan kerja, peningkatan
                  produktivitas, dan daya saing angkatan kerja; serta
                  pengembangan kewirausahaan. Pelaksanaan skema normal diatur
                  dalam Peraturan Presiden Nomor 113 Tahun 2022 yang aturan
                  pelaksanaannya tertera pada Permenko Perekonomian Nomor 17
                  Tahun 2022.
                </p>
                <span className="mt-2 h-[3px] w-6 bg-[#142b72]/75"></span>
                <span className="text-xs font-bold text-[#142b72]/75">
                  Airlangga Hartarto, Menteri Koordinator Bidang Perekonomian
                  Republik Indonesia
                </span>
              </div>
            </div>
          </div>
          {/* BOTTOM FOOTER */}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            {/* Flex Col */}
            <div className="w-full sm:flex-1">
              <h4 className="mb-4 font-bold text-white">Prakerja</h4>
              <ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Tentang Prakerja
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            {/* Flex Col */}
            <div className="w-full sm:flex-1">
              <h4 className="mb-4 font-bold text-white">Peserta</h4>
              <ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Daftra
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Masuk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Tanja Jawab
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Tren Rekrutmen
                  </Link>
                </li>
              </ul>
            </div>
            {/* Flex Col */}
            <div className="w-full sm:flex-1">
              <h4 className="mb-4 font-bold text-white">Ekosistem</h4>
              <ul className="grid grid-cols-1 gap-3 sm:flex sm:flex-col sm:gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Lembaga Pelatihan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Semua Lembaga Pelatihan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Pertanyaan Umum Lembaga Pelatihan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Kriteria Standar Pelatihan
                  </Link>
                </li>
              </ul>
            </div>
            {/* Flex Col */}
            <div className="w-full sm:flex-1">
              <h4 className="mb-4 font-bold text-white">Lainnya</h4>
              <ul className="grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:gap-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Publikasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-white/75 hover:text-white"
                  >
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
            {/* Flex Col */}
            <div className="w-full rounded-2xl bg-white p-8 sm:w-2/6">
              <h4 className="mb-4 font-medium text-[#142b72]">
                Layanan Contact Center Prakerja
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-[#142b72]/75 hover:text-[#142b72]">
                  <Link href="/" className="flex items-center">
                    <BsTelephone className="mr-2" />
                    <span className="font-bold">08001503001</span>
                  </Link>
                </li>
                <li className="text-sm text-[#142b72]/75 hover:text-[#142b72]">
                  <Link href="/" className="flex items-center">
                    <BsEnvelopePaper className="mr-2" />
                    Formulir Pengaduan
                  </Link>
                </li>
                <li className="text-sm text-[#142b72]/75 hover:text-[#142b72]">
                  <Link href="/" className="flex items-center">
                    <BsChatLeftDots className="mr-2" />
                    Live Chat
                  </Link>
                </li>
              </ul>
              <h4 className="mb-4 mt-4 font-medium text-[#142b72]">
                Jam Operasional
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-[#142b72]/75 hover:text-[#142b72]">
                  <Link href="/" className="flex items-start">
                    <BsClockHistory className="mr-2 mt-[3px]" />
                    <span>
                      Senin - Minggu
                      <br />
                      <span className="text-xs opacity-80">
                        Pukul 08.00 - 20.00 WIB
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
