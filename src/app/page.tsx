import { HeroSection } from "@/features/landing/components/HeroSection";
import { TrustMarquee } from "@/features/landing/components/TrustMarquee";
import { ProtocolExplainer } from "@/features/landing/components/ProtocolExplainer";
import { WaitlistSignup } from "@/features/landing/components/WaitlistSignup";
import { FeeCalculator } from "@/features/calculator/components/FeeCalculator";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TrustMarquee />
      <ProtocolExplainer />
      <FeeCalculator />
      <WaitlistSignup />
    </main>
  );
}