import { Inter } from "next/font/google";
import { Button } from "@mantine/core";
import { HeaderMegaMenu } from "@/components/section/Header/Header";
import HeroSection from "@/components/section/Hero/Hero.section";
import { FeaturesAsymmetrical } from "@/components/section/Feature/Feature.section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} `}>
      <HeaderMegaMenu />
      <HeroSection />
      <FeaturesAsymmetrical />
    </main>
  );
}
