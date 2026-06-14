"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MIN_PRICE = 10000;
const MAX_PRICE = 1000000;
const STEP = 5000;
const NEELAAM_FEE_RATE = 0.015;
const TRADITIONAL_RISK_LOW = 0.05;
const TRADITIONAL_RISK_HIGH = 0.10;

const formatPKR = (value: number): string => {
  return "₨ " + value.toLocaleString("en-PK");
};

const FeeCalculator: React.FC = () => {
  const [price, setPrice] = useState(100000);

  const neelaamFee = price * NEELAAM_FEE_RATE;
  const traditionalLow = price * TRADITIONAL_RISK_LOW;
  const traditionalHigh = price * TRADITIONAL_RISK_HIGH;

  const handleSliderChange = (value: number[]) => {
    setPrice(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const num = parseInt(raw, 10);
    if (!isNaN(num)) {
      setPrice(Math.min(Math.max(num, MIN_PRICE), MAX_PRICE));
    } else if (raw === "") {
      setPrice(MIN_PRICE);
    }
  };

  return (
    <section className="relative bg-background py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Fee Comparison
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See What You Save
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Compare Neelaam&apos;s transparent 1.5% smart contract fee against the
            hidden fraud overhead of traditional P2P marketplaces.
          </p>
        </div>

        {/* Slider + Input Controls */}
        <div className="mb-10 rounded-xl border border-border bg-card p-6 sm:p-8">
          <label className="mb-4 block text-sm font-medium text-foreground">
            Item Price (PKR)
          </label>

          <div className="mb-6">
            <Slider
              value={[price]}
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={STEP}
              onValueChange={handleSliderChange}
              className="w-full"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>{formatPKR(MIN_PRICE)}</span>
              <span>{formatPKR(MAX_PRICE)}</span>
            </div>
          </div>

          <div className="max-w-xs">
            <Input
              type="text"
              value={formatPKR(price)}
              onChange={handleInputChange}
              className="border-border bg-background text-center text-lg font-semibold focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Neelaam Card */}
          <Card className="relative overflow-hidden border-primary/40 bg-card shadow-[0_0_30px_rgba(139,92,246,0.12)]">
            <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Recommended
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-foreground">
                Neelaam Fee
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Secure &amp; transparent smart contract fee
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-2 text-4xl font-bold text-primary">
                {formatPKR(Math.round(neelaamFee))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span>1.5%</span>
                <span className="text-primary/60">•</span>
                <span>Fixed rate</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Time-locked escrow, on-chain verification, and dispute resolution
                — all included.
              </p>
            </CardContent>
          </Card>

          {/* Traditional Risk Card */}
          <Card className="relative overflow-hidden border-destructive/30 bg-card">
            <div className="absolute top-0 right-0 rounded-bl-lg bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
              High Risk
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-foreground">
                Traditional Risk
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Estimated fraud &amp; overhead exposure
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-2 text-4xl font-bold text-destructive">
                {formatPKR(Math.round(traditionalLow))} — {" "}
                {formatPKR(Math.round(traditionalHigh))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                <span>5% — 10%</span>
                <span className="text-destructive/60">•</span>
                <span>Variable risk</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Payment scams, fake listings, and COD fraud — the hidden cost of
                unverified marketplaces.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Savings Callout */}
        <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-lg font-semibold text-foreground">
            You save up to{" "}
            <span className="text-primary">
              {formatPKR(Math.round(traditionalHigh - neelaamFee))}
            </span>{" "}
            per transaction
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            That&apos;s an {Math.round(((TRADITIONAL_RISK_HIGH - NEELAAM_FEE_RATE) / TRADITIONAL_RISK_HIGH) * 100)}% reduction in transaction risk overhead.
          </p>
        </div>
      </div>
    </section>
  );
};

export { FeeCalculator };