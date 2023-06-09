import Image from "next/image";

const SectionVideo = () => {
  return (
    <section className="background-2 px-6">
      <div className="background-3 container flex items-center justify-center">
        <div className="z-20 w-full sm:w-11/12">
          <Image
            src="/section-img-1.png"
            alt="Image"
            height={721.38}
            width={1110}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
