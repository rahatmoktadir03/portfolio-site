"use client";
import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Import components that are safe for SSR
import Footer from "@/components/Footer";

// Dynamically import all components to prevent SSR issues
const FloatingNav = dynamic(
  () =>
    import("@/components/ui/FloatingNavbar").then((mod) => ({
      default: mod.FloatingNav,
    })),
  {
    ssr: false,
    loading: () => <div className="h-16" />, // Placeholder for navigation
  }
);

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center">Loading...</div>
  ),
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <div className="h-96" />,
});

// Clients component is commented out as requested
// const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */} {/* Testimonials hidden as requested */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
