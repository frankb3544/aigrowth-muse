import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diagnostic from "@/components/Diagnostic";
import PromptPackStrip from "@/components/PromptPackStrip";
import Consulting from "@/components/Consulting";
import Booking from "@/components/Booking";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Community from "@/components/Community";
import Tools from "@/components/Tools";
import BuiltAndOwn from "@/components/BuiltAndOwn";
import CharlottePrograms from "@/components/CharlottePrograms";
import FounderLetter from "@/components/FounderLetter";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-brand-navy-deep">
      <Header />
      <main className="flex-1">
        <Hero />
        <Diagnostic />
        <PromptPackStrip />
        <Consulting />
        <Booking />
        <Process />
        <Proof />
        <Community />
        <Tools />
        <BuiltAndOwn />
        <CharlottePrograms />
        <FounderLetter />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
