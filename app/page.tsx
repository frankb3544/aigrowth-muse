import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Diagnostic from "@/components/Diagnostic";
import Consulting from "@/components/Consulting";
import Booking from "@/components/Booking";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import PromptPackStrip from "@/components/PromptPackStrip";
import Community from "@/components/Community";
import Tools from "@/components/Tools";
import CharlottePrograms from "@/components/CharlottePrograms";
import Faq from "@/components/Faq";
import ContactBand from "@/components/ContactBand";
import FinalCta from "@/components/FinalCta";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream font-sans text-brand-navy-deep">
      <TrustBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Reveal>
          <Diagnostic />
        </Reveal>
        <Reveal>
          <Consulting />
        </Reveal>
        <Reveal>
          <Booking />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Proof />
        <Reveal>
          <PromptPackStrip />
        </Reveal>
        <Reveal>
          <Community />
        </Reveal>
        <Reveal>
          <Tools />
        </Reveal>
        <Reveal>
          <CharlottePrograms />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <ContactBand />
        <FinalCta />
        <Countdown />
      </main>
      <Footer />
    </div>
  );
}
