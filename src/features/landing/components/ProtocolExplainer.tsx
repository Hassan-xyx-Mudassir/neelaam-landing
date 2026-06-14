"use client";

import Timeline, {
  TimelineItem,
  TimelineItemTitle,
  TimelineItemDescription,
} from "@/components/8starlabs-ui/timeline";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Buyer Wins Auction",
    description:
      "The winning bid triggers an automated smart contract. The buyer's stablecoins (USDT/USDC) are instantly locked on-chain — no middleman, no delay.",
  },
  {
    title: "Contract Holds Funds Securely",
    description:
      "Funds remain time-locked in the escrow contract. Neither party can access them until the conditions are met — eliminating payment fraud entirely.",
  },
  {
    title: "Buyer Validates Receipt",
    description:
      "Once the item is delivered, the buyer confirms receipt on-chain. This cryptographic proof is the only trigger for fund release.",
  },
  {
    title: "Programmatic Payout",
    description:
      "The contract automatically releases payment to the seller. If a dispute arises, it routes to a decentralized multi-sig arbitration protocol.",
  },
];

const ProtocolExplainer: React.FC = () => {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cryptographic Escrow, End to End
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Every transaction on Neelaam is governed by immutable smart contracts
            — no trust required, no fraud possible.
          </p>
        </div>

        {/* Timeline */}
        <Timeline
          orientation="vertical"
          alternating={false}
          alignment="top/left"
          vertItemSpacing={140}
          vertItemMaxWidth={380}
          noCards={false}
        >
          {steps.map((step) => (
            <TimelineItem key={step.title} variant="default">
              <TimelineItemTitle className="text-foreground">
                {step.title}
              </TimelineItemTitle>
              <TimelineItemDescription>
                {step.description}
              </TimelineItemDescription>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Dispute Resolution Note */}
        <div className="mt-10 rounded-xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Dispute Resolution:</span>{" "}
            If a buyer or seller raises a dispute, the contract routes the case to a
            decentralized multi-sig arbitration panel — ensuring fair, transparent
            resolution without centralized authority.
          </p>
        </div>
      </div>
    </section>
  );
};

export { ProtocolExplainer };