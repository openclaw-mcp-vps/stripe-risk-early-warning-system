export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Stripe Account Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts before Stripe<br />
          <span className="text-[#58a6ff]">suspends your account</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time monitoring of your Stripe account health, transaction patterns, and risk indicators — so you can act before it&apos;s too late.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $79/mo
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> Dispute rate tracking</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> Chargeback alerts</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> Email &amp; SMS notifications</li>
          <li className="flex items-center gap-1"><span className="text-[#3fb950]">✓</span> Risk score dashboard</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$79</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Connect unlimited Stripe accounts",
              "Real-time risk score monitoring",
              "Dispute & chargeback rate alerts",
              "Refund ratio & velocity checks",
              "Email + SMS notifications",
              "Weekly health report digest",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it detect suspension risk?</h3>
            <p className="text-[#8b949e] text-sm">We continuously pull your Stripe account data via the official API and analyze dispute rates, chargeback ratios, refund velocity, and other signals that Stripe uses internally to flag accounts. When any metric approaches a dangerous threshold, you get an immediate alert.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my Stripe data safe?</h3>
            <p className="text-[#8b949e] text-sm">We use read-only Stripe API keys — we never touch your payouts or modify anything. Your keys are encrypted at rest and never shared with third parties.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What happens after I subscribe?</h3>
            <p className="text-[#8b949e] text-sm">After checkout you&apos;ll receive access to your dashboard where you connect your Stripe account with a read-only API key. Monitoring starts immediately and you&apos;ll receive your first health report within minutes.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Stripe Risk Early Warning System. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  );
}
