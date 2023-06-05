import Image from "next/image";

const IntroVideo = () => {
  return (
    <section className="bg-[url(/home-video-bg.svg)] bg-contain bg-center bg-no-repeat">
      <div className="container relative">
        <div className="flex justify-center">
          <Image
            src="/section-img-2.webp"
            alt="images"
            width={1928}
            height={1253}
            loading="eager"
            className="z-20 w-11/12"
          />
        </div>
        {/* ##### */}
        <Image
          src="/img_shape_orange_right.png"
          alt="image"
          width={100}
          height={100}
          className="absolute bottom-20 right-0 top-[10%] h-auto w-2/12
          "
        />
        {/* ##### */}
        <Image
          src="/img_shape_orange_left.png"
          alt="image"
          width={100}
          height={100}
          className="absolute bottom-[10%] left-0 h-auto w-2/12
          "
        />
      </div>
    </section>
  );
};

export default IntroVideo;
