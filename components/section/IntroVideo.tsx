import Image from "next/image";

const IntroVideo = () => {
  return (
    <section className="bg-[url(/home-video-bg.svg)] bg-contain bg-center bg-no-repeat">
      <div className="container relative border">
        <div className="flex justify-center">
          <Image
            src="/img_video.webp"
            alt="images"
            width={1928}
            height={1253}
            className="w-10/12"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
