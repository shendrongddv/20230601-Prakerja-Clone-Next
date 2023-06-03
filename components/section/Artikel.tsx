import Image from "next/image";
import Link from "next/link";

// Data
const blogArtikel = [
  {
    id: 1,
    title: "Daftar Mitra Resmi Coworking Space Prakerja",
    tag: "Insight",
    img: "/blog/1.jpg",
  },
  {
    id: 2,
    title: "Daftar Mitra Resmi Coworking Space Prakerja",
    tag: "Acara",
    img: "/blog/2.jpeg",
  },
  {
    id: 3,
    title: "Daftar Mitra Resmi Coworking Space Prakerja",
    tag: "Acara",
    img: "/blog/3.jpeg",
  },
];

const Artikel = () => {
  const items = blogArtikel;

  return (
    <section className="bg-[#f8f8f8] px-6 py-16">
      <div className="container">
        <h2 className="h2">Artikel Terbaru</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="peer isolate overflow-hidden rounded-lg bg-white transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="object-cover transition-transform duration-500 peer-hover:scale-150"
                />
              </div>
              <div className="relative z-10 p-8">
                <span className="absolute -top-2 rounded-full bg-blue-500 px-2 py-1 text-sm leading-none text-white">
                  {item.tag}
                </span>
                <h3 className="h3 mb-4 cursor-pointer hover:underline">
                  {item.title}
                </h3>
                <Link href="/" className="text-sm font-bold text-blue-500/50">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artikel;
