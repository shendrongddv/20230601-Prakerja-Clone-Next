import Image from "next/image";
import { TestimoniPakar } from "../../dummydata.js";

const Pakar = () => {
  const pakar = TestimoniPakar;

  return (
    <section className="bg-slate-50 px-6 pb-16 pt-0">
      <div className="container">
        <h2 className="h2">Menurut Para Pakar</h2>

        <div className="mt-6 flex flex-col gap-6">
          {pakar?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-md sm:p-10"
            >
              <div className="flex gap-4 sm:gap-8">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  width={128}
                  height={128}
                  className="h-16 w-16 sm:h-32 sm:w-32"
                />
                <div className="flex flex-col items-start gap-1">
                  <h4 className="text-base font-bold sm:text-xl sm:leading-normal">
                    {item.nama}
                  </h4>
                  <span className="border-b pb-2 text-xs sm:text-sm">
                    {item.jabatan}
                  </span>
                  <Image
                    src={item.organisasi}
                    alt={item.nama}
                    width={300}
                    height={32}
                    className="mt-2 h-full w-auto sm:max-h-8 sm:w-auto"
                  />
                </div>
              </div>
              <p className="mt-6 text-base sm:text-lg">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pakar;
