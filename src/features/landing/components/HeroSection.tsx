"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StatusIndicator from "@/components/8starlabs-ui/status-indicator";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient orbs for depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <Image
            src="/neelaam-logo-clear.png"
            alt="Neelaam Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Simulated Web3 Wallet State — using StatusIndicator */}
        <div className="mx-auto mb-10 inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-card/80 px-5 py-3 shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-md">
          <StatusIndicator state="active" size="sm" />
          <span className="font-mono text-sm text-muted-foreground">
            0x71C<span className="text-foreground/40">•••</span>3a9f
          </span>
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            Connected
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Trustless Commerce
          <br />
          <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
            for Emerging Markets
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Neelaam is a cryptographic escrow marketplace that eliminates fraud,
          payment scams, and risky cash-on-delivery setups — powered by
          automated, time-locked smart contracts on-chain.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="min-w-[200px] text-base font-semibold shadow-[0_0_24px_rgba(139,92,246,0.35)]">
            Join the Waitlist
          </Button>
          <Link href="/neelaam-pitch-deck.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="min-w-[200px] text-base font-semibold">
              See How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };