import Image from "next/image";
import localFont from "next/font/local";
import { CreateClient } from "@prismicio/client";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from '@/prismicio'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
       <h1>Ovídio</h1>
       <PrismicPreview repositoryName={repositoryName} />
    </div>
  );
}
