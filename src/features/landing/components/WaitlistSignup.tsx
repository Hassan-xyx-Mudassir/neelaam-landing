"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WaitlistSignup: React.FC = () => {
  const [buyerEmail, setBuyerEmail] = useState("");
  const [merchantEmail, setMerchantEmail] = useState("");
  const [buyerSubmitted, setBuyerSubmitted] = useState(false);
  const [merchantSubmitted, setMerchantSubmitted] = useState(false);

  const handleBuyerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBuyerSubmitted(true);
  };

  const handleMerchantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMerchantSubmitted(true);
  };

  return (
    <section className="relative bg-background py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-xl px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Early Access
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join the Waitlist
          </h2>
          <p className="text-muted-foreground">
            Be first to experience trustless P2P commerce when we launch in your
            market.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="buyer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger
              value="buyer"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Join as Buyer
            </TabsTrigger>
            <TabsTrigger
              value="merchant"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Onboard as Merchant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buyer">
            {buyerSubmitted ? (
              <div className="rounded-xl border border-primary/30 bg-card p-8 text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  ✓
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  You&apos;re on the list!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll notify you when Neelaam launches in your area.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBuyerSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="buyer-email" className="mb-2 block text-sm font-medium text-foreground">
                    Email address
                  </label>
                  <Input
                    id="buyer-email"
                    type="email"
                    placeholder="you@example.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    required
                    className="border-border bg-card focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  Join as Buyer
                </Button>
              </form>
            )}
          </TabsContent>

          <TabsContent value="merchant">
            {merchantSubmitted ? (
              <div className="rounded-xl border border-primary/30 bg-card p-8 text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  ✓
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Application received!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team will review your merchant application and reach out
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleMerchantSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="merchant-email" className="mb-2 block text-sm font-medium text-foreground">
                    Business email
                  </label>
                  <Input
                    id="merchant-email"
                    type="email"
                    placeholder="merchant@example.com"
                    value={merchantEmail}
                    onChange={(e) => setMerchantEmail(e.target.value)}
                    required
                    className="border-border bg-card focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  Onboard as Merchant
                </Button>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { WaitlistSignup };