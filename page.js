"use client";
import { useState } from "react";
import "./globals.css";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(null);
  const [form, setForm] = useState({
    business: "",
    website: "",
    citystate: "",
    email: "",
    message: "",
  });

  const faqs = [
    {
      q: "What is GBUS?",
      a: "GBUS (Google Business Update Services) is a practical audit + fixes program that cleans up your business listings, improves maps/search visibility, and kickstarts review growth across Google, Apple, Yelp, Facebook, and 50+ directories.",
    },
    {
      q: "How fast do I see results?",
      a: "Most clients see map/search visibility improvements within 2–4 weeks after verification and primary fixes. Review growth depends on customer volume and your chosen plan.",
    },
    {
      q: "Do you replace my social media person?",
      a: "No—unless you want us to. We can deliver the fixes, partner with your team, or hand off a clean audit with step‑by‑step tasks.",
    },
    {
      q: "What’s included in the audit?",
      a: "NAP consistency check, duplicate suppression report, hours/holiday coverage, category tune‑up, map pin accuracy, review posture, and quick wins to unlock visibility.",
    },
  ];

  const tiers = [
    {
      name: "Audit Only",
      price: "$199 one‑time",
      blurb:
        "Full audit with prioritized fixes and DIY checklist. Great for teams that can execute in‑house.",
      items: [
        "Comprehensive GBUS audit PDF",
        "Top 10 fixes with ROI impact",
        "DIY checklists + timelines",
        "30‑minute walkthrough call",
      ],
    },
    {
      name: "Core Fixes (70%)",
      price: "$499 setup + $199/mo",
      blurb:
        "We implement the highest‑impact 70% of fixes to stop leaks fast and boost visibility.",
      items: [
        "Claim/verify key profiles",
        "Duplicate removal & redirects",
        "Category + map pin tune‑up",
        "Review QR kit + responses",
        "Monthly health report",
      ],
    },
    {
      name: "Pro (All‑In)",
      price: "$899 setup + $299/mo",
      blurb:
        "Hands‑off optimization with ongoing monitoring, listings sync, and review growth program.",
      items: [
        "Everything in Core Fixes",
        "Directory sync to 50+ sites",
        "Photo/menu/hours updates",
        "Quarterly local SEO tune‑ups",
        "Priority support",
      ],
    },
  ];

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setSent(null);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const j = await r.json();
      setSent(j.ok ? (j.sent ? "sent" : "received") : "error");
    } catch (err) {
      setSent("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="font-semibold tracking-tight">GBUS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contact" className="inline-flex items-center rounded-xl border px-3 py-1.5 hover:bg-neutral-100">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Fix your listings. Grow your reviews. <span className="whitespace-nowrap">Win local search.</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              GBUS cleans up errors and omissions across Google, Apple Maps, Yelp, and 50+ directories—then builds a steady review engine so customers find and trust you.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/> NAP consistency + duplicate suppression</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/> Map pin & category tune‑ups for discovery</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/> QR‑powered review generation</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black"/> Monthly health reports you can actually use</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">Get a free mini‑audit</a>
              <a href="#pricing" className="inline-flex items-center rounded-2xl border px-5 py-3 text-sm hover:bg-neutral-100">See pricing</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-600 shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-[85%] max-w-sm">
              <p className="text-sm font-medium">Quick Wins We Tackle</p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                <li>Wrong map pin or city name</li>
                <li>Unclaimed Yelp/Apple listings</li>
                <li>Duplicate profiles & old owners</li>
                <li>Missing hours/holiday updates</li>
                <li>Broken links & bad categories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How GBUS works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              t: "Scan",
              d: "We audit Google, Apple, Yelp, Facebook, Bing and major directories for accuracy, duplicates, and missing data.",
            }, {
              t: "Fix",
              d: "We claim/verify, correct, and consolidate listings. We tune categories, pins, and on‑profile content for discovery.",
            }, {
              t: "Grow",
              d: "We deploy QR/code review kits and response playbooks that build steady social proof over time.",
            }].map((s, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-sm border">
                <div className="h-10 w-10 rounded-xl bg-black" />
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-neutral-700">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What we deliver</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="text-lg font-semibold">Audit & Diagnostics</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>NAP consistency & duplicate mapping</li>
                <li>Category/keyword alignment</li>
                <li>Map pin & coverage checks</li>
                <li>Review posture & response health</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="text-lg font-semibold">Fixes & Optimization</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>Claim/verify Google, Apple, Yelp</li>
                <li>Duplicate removal + redirects</li>
                <li>Hours/menu/photo updates</li>
                <li>QR review kit + reply playbooks</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="text-lg font-semibold">Reporting & Insights</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>Monthly health report with wins</li>
                <li>Keyword discovery & category gaps</li>
                <li>Competitor snapshot</li>
                <li>Clear, non‑jargon action steps</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border">
              <h3 className="text-lg font-semibold">Team‑Friendly Options</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                <li>We execute fixes or partner with your staff</li>
                <li>DIY checklists and training</li>
                <li>Email support</li>
                <li>White‑label available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {["+70% key fixes in month 1", "50+ directories synced", "1 QR = weekly reviews"].map((k, i) => (
              <div key={i} className="rounded-3xl border p-6 text-center">
                <p className="text-xl font-semibold">{k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Simple pricing</h2>
          <p className="mt-2 text-neutral-700">Start with an audit, or let us handle the fixes. Cancel anytime.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-sm border flex flex-col">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-neutral-700">{t.blurb}</p>
                <p className="mt-4 text-2xl font-semibold">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5 flex-1">
                  {t.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">Choose {t.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 border-t bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-6 divide-y rounded-2xl border bg-white">
            {faqs.map((f, i) => (
              <details key={i} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="p-5 cursor-pointer">
                <summary className="font-medium list-none">{f.q}</summary>
                <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm border">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get your free mini‑audit</h2>
            <p className="mt-2 text-neutral-700">Tell us about your business. We’ll check your Google listing and send 3 quick wins.</p>
            <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={submit}>
              <input className="rounded-xl border p-3 text-sm" placeholder="Business name" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} required />
              <input className="rounded-xl border p-3 text-sm" placeholder="Website URL" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
              <input className="rounded-xl border p-3 text-sm" placeholder="City & state" value={form.citystate} onChange={e => setForm({ ...form, citystate: e.target.value })} />
              <input className="rounded-xl border p-3 text-sm" placeholder="Best email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              <textarea className="md:col-span-2 rounded-xl border p-3 text-sm" rows={4} placeholder="What’s your biggest visibility headache right now?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <button type="submit" className="md:col-span-2 rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90 disabled:opacity-60" disabled={sending}>
                {sending ? "Sending..." : "Request mini‑audit"}
              </button>
              {sent === "sent" && <p className="md:col-span-2 text-sm text-green-700">Thanks! We emailed your request.</p>}
              {sent === "received" && <p className="md:col-span-2 text-sm text-blue-700">Thanks! Received (email not configured yet).</p>}
              {sent === "error" && <p className="md:col-span-2 text-sm text-red-700">Oops—something went wrong.</p>}
            </form>
            <p className="mt-3 text-xs text-neutral-500">To receive emails, set RESEND_API_KEY and TO_EMAIL in your Vercel project settings. Otherwise we’ll simply record the request.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} GBUS — Google Business Update Services</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
