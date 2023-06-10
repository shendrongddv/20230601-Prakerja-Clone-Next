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

const SectionBlog = () => {
  const items = blogArtikel;

  return (
    <section className="bg-[#f8f8f8] px-6 py-10">
      <div className="container">
        <div className="flex flex-col flex-wrap gap-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="h2 sm:w-1/2">Artikel Terbaru</h2>

          <Link href="/" className="btn btn-primary max-sm:order-last sm:w-1/2">
            Lihat Semua
          </Link>

          {/* Blog Wrapper */}
          <div className="w-full">
            <div className="grid gap-6 sm:grid-cols-3">
              {items?.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-3xl bg-white"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={225}
                    />
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <span className="absolute -top-4 z-10 flex items-center justify-center rounded-full bg-primary-500 px-3 py-2 text-xs text-white">
                      {item.tag}
                    </span>
                    <h3 className="h3 mb-4">{item.title}</h3>
                    <Link href="/" className="font-medium text-primary-500">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
