import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed z-[9999] w-full bg-transparent px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/site/logo-white.svg"
              alt="Prakerja"
              height={46}
              width={141}
              className="h-8 w-auto sm:h-12"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              <li className="border-white text-sm font-medium text-white hover:border-b-4">
                <Link href="/">Publikasi</Link>
              </li>
              <li className="border-white text-sm font-medium text-white hover:border-b-4">
                <Link href="/">Lembaga Pelatihan</Link>
              </li>
              <li className="border-white text-sm font-medium text-white hover:border-b-4">
                <Link href="/">Tren Rekrutmen</Link>
              </li>
              <li className="border-white text-sm font-medium text-white hover:border-b-4">
                <Link href="/">Artikel</Link>
              </li>
              <li className="border-white text-sm font-medium text-white hover:border-b-4">
                <Link href="/">Tanya Jawab</Link>
              </li>
            </ul>
          </nav>

          {/* Buttons Group */}
          <div className="hidden gap-2 sm:flex">
            <Link href="/" className="btn btn-white-outline">
              Masuk
            </Link>
            <Link href="/" className="btn btn-accent">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
