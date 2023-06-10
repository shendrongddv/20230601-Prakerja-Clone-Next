import Image from "next/image";
import {
  DigitalPlatform,
  PaymentPlatform,
  JobPlatform,
} from "../../dummydata.js";
import Link from "next/link.js";

const SectionMitra = () => {
  const digitals = DigitalPlatform;
  const payments = PaymentPlatform;
  const jobs = JobPlatform;

  return (
    <section className="overflow-hidden bg-[#f8f8f8] pt-10">
      <div className="container max-sm:px-6">
        <h2 className="h2">Mitra Kartu Prakerja</h2>
        <div className="mt-6 flex flex-col gap-6">
          {/* Digital Platform */}
          <div className="flex flex-col overflow-hidden rounded sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-secondary-500 bg-white px-6 py-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="text-base font-semibold text-primary-700">
                Platform Digital
              </h3>
            </div>
            <div className="w-full bg-[#F2F3F4] px-6 py-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
                {digitals?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="flex h-[50px] w-auto items-center justify-center rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={38.77}
                        width={106}
                        className="h-auto w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Payment Platform */}
          <div className="flex flex-col overflow-hidden rounded sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-secondary-500 bg-white px-6 py-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="text-base font-semibold text-primary-700">
                Platform Digital
              </h3>
            </div>
            <div className="w-full bg-[#F2F3F4] px-6 py-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
                {payments?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="flex h-[50px] w-auto items-center justify-center rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={38.77}
                        width={106}
                        className="h-auto w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Job Platform */}
          <div className="flex flex-col overflow-hidden rounded sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-secondary-500 bg-white px-6 py-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="text-base font-semibold text-primary-700">
                Platform Digital
              </h3>
            </div>
            <div className="w-full bg-[#F2F3F4] px-6 py-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
                {jobs?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="flex h-[50px] w-auto items-center justify-center rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={38.77}
                        width={106}
                        className="h-auto w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMitra;
