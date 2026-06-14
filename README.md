<p align="center">
  <img src="public/neelaam-logo-clear.png" alt="Neelaam" width="220" />
</p>

<h3 align="center">Trustless Commerce for Emerging Markets</h3>

<p align="center">
  A high-fidelity landing page and validation hub for <strong>Neelaam</strong> — a blockchain-powered peer-to-peer auction and marketplace that eliminates transaction fraud through cryptographic escrow.
</p>

---

## About Neelaam

Neelaam solves the massive **trust deficit** in platforms like OLX and Facebook Marketplace by completely eliminating transaction fraud, payment scams, and risky Cash-on-Delivery setups. It uses **automated, time-locked escrow smart contracts** — when a buyer wins an auction, their stablecoins (USDT/USDC) are locked on-chain. The contract programmatically holds the funds and only releases them to the seller when the buyer confirms delivery. If a dispute arises, it routes to a **decentralized multi-sig arbitration protocol**.

Everyday users don't need to know what a seed phrase or Web3 wallet is — **Account Abstraction** lets them log in via standard Google/Email social handles, and a non-custodial wallet is implicitly created in the background.

The initial go-to-market targets **high-ticket, high-risk electronics** (laptops, smartphones, gaming consoles) in major local tech hubs like Hafeez Center (Lahore) and Techno City (Karachi) where transaction theft is highest.

---

## Site Sections

| Section | Description |
|---|---|
| **Hero** | Value proposition with simulated Web3 wallet state (animated status indicator, mock address `0x71C...3a9f`) and CTA buttons |
| **Trust Marquee** | Scrolling ticker of trust signals (Smart Contract Escrow, USDT/USDC, Account Abstraction, etc.) |
| **Protocol Explainer** | Vertical timeline mapping the end-to-end cryptographic escrow flow across 4 steps |
| **Fee Calculator** | Interactive PKR slider comparing Neelaam's 1.5% fee vs. traditional 5–10% fraud overhead |
| **Waitlist Signup** | Tabbed email-only forms for "Join as Buyer" and "Onboard as Merchant" |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** TailwindCSS v4 with semantic design tokens
- **UI Primitives:** shadcn/ui (Button, Input, Tabs, Card, Slider)
- **Extended Components:** 8Labs UI (Marquee, Status Indicator, Timeline, Scroll Fade)
- **Visual Identity:** Deep black canvas (`#0B0F19`), crisp white typography, neon purple accent (`#8B5CF6`)
- **Deployment:** Netlify

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens & semantic color variables
│   ├── layout.tsx           # Root layout with metadata & fonts
│   └── page.tsx             # Main page composing all feature sections
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   └── 8starlabs-ui/       # 8Labs UI components
├── features/
│   ├── landing/
│   │   └── components/
│   │       ├── HeroSection.tsx
│   │       ├── TrustMarquee.tsx
│   │       ├── ProtocolExplainer.tsx
│   │       └── WaitlistSignup.tsx
│   └── calculator/
│       └── components/
│           └── FeeCalculator.tsx
└── lib/
    └── utils.ts             # cn() utility
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm/bun)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/Hassan-xyx-Mudassir/neelaam-landing.git
cd neelaam-landing

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Design Tokens

All styling uses **semantic color tokens** defined in `src/app/globals.css`. Never hardcode Tailwind color classes like `bg-white` or `text-gray-900` — use tokens like `bg-card`, `text-foreground`, `bg-primary`, etc. See `AGENTS.md` for the full token mapping and project conventions.

---

## License

Private — all rights reserved.