"use client";

import Marquee from "@/components/8starlabs-ui/marquee";

const trustSignals: string[] = [
  "Smart Contract Escrow",
  "USDT & USDC Supported",
  "Account Abstraction",
  "Zero Fraud Guarantee",
  "Time-Locked Payments",
  "Multi-Sig Arbitration",
  "Non-Custodial Wallets",
  "On-Chain Verification",
  "Decentralized Dispute Resolution",
  "Instant Settlement",
];

const TrustMarquee: React.FC = () => {
  return (
    <section className="relative border-y border-border bg-card/50 py-6">
      <Marquee pauseOnHover fade direction="left" className="text-muted-foreground">
        {trustSignals.map((signal) => (
          <span
            key={signal}
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {signal}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export { TrustMarquee };