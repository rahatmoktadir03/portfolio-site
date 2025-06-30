"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ClientWrapper from "@/components/ClientWrapper";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <ClientWrapper>
          <FloatingNav navItems={navItems} />
        </ClientWrapper>

        <ClientWrapper>
          <Hero />
        </ClientWrapper>

        <ClientWrapper>
          <Grid />
        </ClientWrapper>

        <ClientWrapper>
          <RecentProjects />
        </ClientWrapper>

        <ClientWrapper>
          <Experience />
        </ClientWrapper>

        <ClientWrapper>
          <Approach />
        </ClientWrapper>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
