import { cn } from "@/lib/utils";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Buyer Wins Auction",
    description:
      "The winning bid triggers an automated smart contract. The buyer's stablecoins (USDT/USDC) are instantly locked on-chain — no middleman, no delay.",
  },
  {
    number: "02",
    title: "Contract Holds Funds Securely",
    description:
      "Funds remain time-locked in the escrow contract. Neither party can access them until the conditions are met — eliminating payment fraud entirely.",
  },
  {
    number: "03",
    title: "Buyer Validates Receipt",
    description:
      "Once the item is delivered, the buyer confirms receipt on-chain. This cryptographic proof is the only trigger for fund release.",
  },
  {
    number: "04",
    title: "Programmatic Payout",
    description:
      "The contract automatically releases payment to the seller. If a dispute arises, it routes to a decentralized multi-sig arbitration protocol.",
  },
];

const ProtocolExplainer: React.FC = () => {
  return (
    <section className="relative bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
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

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={cn(
                "group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              )}
            >
              {/* Step Number */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {step.number}
              </div>

              {/* Connector line (not on last item) */}
              {idx < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-primary/40 to-transparent lg:block" />
              )}

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

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