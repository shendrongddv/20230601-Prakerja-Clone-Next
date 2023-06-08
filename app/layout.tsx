import "./globals.css";
import { Inter, Rubik } from "next/font/google";

// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const fontBody = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Gali potensi dirimu dengan Kartu Prakerja dan #SiapDariSekarang",
  description:
    "Galau cari kerja? Ingin lebih kompeten? Mau mengembangkan diri tanpa pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja dan #SiapDariSekarang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontBody.className} relative min-h-full text-base text-[#142b72]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
