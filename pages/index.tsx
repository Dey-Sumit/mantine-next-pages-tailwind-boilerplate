import { Tiro_Bangla } from "next/font/google";
import { Inter } from "next/font/google";
import { HeaderMegaMenu } from "@/components/section/Header/Header";
import HeroSection from "@/components/section/Hero/Hero.section";
import { FeaturesAsymmetrical } from "@/components/section/Feature/Feature.section";
import LogoCloudSection from "@/components/section/LogoCloud";
import { FooterSection } from "@/components/section/Footer/FooterSection";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  variable: "--font-tiro-bangla",
  fallback: ["serif"],
});

export default function Home() {
  return (
    <main className={`font-tiroBangla `}>
      <HeaderMegaMenu />
      <HeroSection />
      <FeaturesAsymmetrical />
      <LogoCloudSection />
      <FooterSection />
    </main>
  );
}
