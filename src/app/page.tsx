import { getServerSession } from "next-auth";
import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";
import HeroSection from "@/components/hero-section";
import TrendingEvents from "@/components/trending-events";

export default async function Home() {

  const session = await getServerSession(options);

  return (
    <>
    <HeroSection/>
    <TrendingEvents/>
    </>
  );
}
