import Header from "@/components/layout/Header";
import HeroSection from "@/components/landing/HeroSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
