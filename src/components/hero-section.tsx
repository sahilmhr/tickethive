import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-900 py-24 md:py-24 lg:py-24 xl:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Unleash Your Experiences: Discover & Create Events You Love
            </h1>
            <p className="text-lg text-gray-400 md:text-xl">
              The all-in-one platform for booking and creating online and
              offline events
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto sm:mr-4" variant="default">
                Explore Events
              </Button>
              <Button
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white"
                variant="secondary"
              >
                Create Events 
              </Button>
            </div>
          </div>
          <Image width={1200} height={800} src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event"/>
        </div>
      </div>
    </section>
  );
}
