import Image from "next/image";
import {
  DigitalPlatform,
  PaymentPlatform,
  JobPlatform,
} from "../../dummydata.js";
import Link from "next/link.js";

const Mitra = () => {
  const digitals = DigitalPlatform;
  const payments = PaymentPlatform;
  const jobs = JobPlatform;

  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="container">
        <h2 className="h2">Mitra Kartu Prakerja</h2>
        <div className="mt-6 flex flex-col gap-6">
          {/* Digital Platform */}
          <div className="flex flex-col overflow-hidden rounded-xl shadow sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-orange-500 bg-white p-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="font-semibold">Platform Digital</h3>
            </div>
            <div className="w-full bg-slate-100 p-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
                {digitals?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="grid h-full w-full rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={100}
                        width={300}
                        className="h-auto w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Payment Platform */}
          <div className="flex flex-col overflow-hidden rounded-xl shadow sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-orange-500 bg-white p-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="font-semibold">Mitra Pembayaran</h3>
            </div>
            <div className="w-full bg-slate-100 p-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
                {payments?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="grid h-full w-full rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={100}
                        width={300}
                        className="h-auto w-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Job Platform */}
          <div className="flex flex-col overflow-hidden rounded-xl shadow sm:flex-row">
            <div className="flex w-full items-center justify-start border-t-4 border-orange-500 bg-white p-4 sm:w-2/12 sm:border-l-4 sm:border-t-0">
              <h3 className="font-semibold">Mitra Job Platform</h3>
            </div>
            <div className="w-full bg-slate-100 p-4 sm:w-10/12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
                {jobs?.map((item) => (
                  <Link key={item.id} href={item.url} target="_blank">
                    <div className="grid h-full w-full rounded-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        height={100}
                        width={300}
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

export default Mitra;
