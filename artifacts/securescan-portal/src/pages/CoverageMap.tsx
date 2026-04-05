import { useEffect, useState } from "react";
import { MapPin, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const regions = [
  {
    name: "Northeast",
    states: ["ME", "NH", "VT", "MA", "RI", "CT", "NY", "NJ", "PA"],
    offices: ["Boston, MA", "New York, NY", "Philadelphia, PA"],
    coverage: "Full Service",
    turnaround: "1–2 days",
    color: "hsl(218,72%,35%)",
    x: 72, y: 22,
  },
  {
    name: "Mid-Atlantic & Southeast",
    states: ["MD", "DE", "VA", "WV", "NC", "SC", "GA", "FL"],
    offices: ["Washington, DC", "Charlotte, NC", "Atlanta, GA"],
    coverage: "Full Service",
    turnaround: "2–3 days",
    color: "hsl(218,72%,28%)",
    x: 64, y: 42,
  },
  {
    name: "Midwest",
    states: ["OH", "IN", "IL", "MI", "WI", "MN", "IA", "MO", "ND", "SD", "NE", "KS"],
    offices: ["Chicago, IL", "Detroit, MI", "Minneapolis, MN"],
    coverage: "Full Service",
    turnaround: "2–3 days",
    color: "hsl(218,72%,40%)",
    x: 44, y: 30,
  },
  {
    name: "South & Texas",
    states: ["TX", "OK", "AR", "LA", "MS", "AL", "TN", "KY"],
    offices: ["Dallas, TX", "Houston, TX", "Nashville, TN"],
    coverage: "Full Service",
    turnaround: "2–4 days",
    color: "hsl(213,72%,45%)",
    x: 38, y: 52,
  },
  {
    name: "Mountain West",
    states: ["MT", "ID", "WY", "CO", "UT", "NV", "AZ", "NM"],
    offices: ["Denver, CO", "Phoenix, AZ", "Salt Lake City, UT"],
    coverage: "Full Service",
    turnaround: "3–5 days",
    color: "hsl(213,60%,50%)",
    x: 22, y: 35,
  },
  {
    name: "Pacific",
    states: ["WA", "OR", "CA", "AK", "HI"],
    offices: ["Los Angeles, CA", "San Francisco, CA", "Seattle, WA"],
    coverage: "Full Service",
    turnaround: "3–5 days",
    color: "hsl(213,50%,55%)",
    x: 8, y: 28,
  },
];

const stats = [
  { label: "States Covered", value: "50" },
  { label: "Service Centers", value: "18" },
  { label: "Same-Day Pickup Cities", value: "42" },
  { label: "Avg. Transit Time", value: "< 48hrs" },
];

export default function CoverageMap() {
  useEffect(() => {
    document.title = "Service Coverage | Nationwide Document Scanning | Plan2Scan";
  }, []);

  const [activeRegion, setActiveRegion] = useState<(typeof regions)[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[hsl(218,72%,22%)] text-white py-16" aria-labelledby="coverage-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Service Coverage</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-[hsl(213,72%,75%)] font-medium">Service Coverage Map</span>
            </div>
            <h1 id="coverage-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nationwide Secure Document Scanning Coverage
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Plan2Scan operates 18 service centers across all 50 states, providing on-site document
              pickup, secure transport, and processing within tight SLA windows — wherever your
              records are located.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[hsl(218,72%,18%)] text-white py-8" aria-label="Coverage statistics">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center" data-testid={`coverage-stat-${s.label.toLowerCase().replace(/[\s/]/g, "-")}`}>
              <div className="text-3xl font-bold text-[hsl(213,72%,70%)]">{s.value}</div>
              <div className="text-white/65 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Interactive coverage grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Click a Region to Explore Coverage</h2>

            {/* Visual SVG map of USA (simplified) */}
            <div className="bg-[hsl(218,72%,22%)] rounded-2xl p-8 mb-6 relative overflow-hidden" style={{ minHeight: "340px" }}>
              <svg
                viewBox="0 0 100 65"
                className="w-full h-auto"
                aria-label="Simplified map of US service coverage regions"
                role="img"
              >
                {/* Simplified US outline blocks representing regions */}
                {/* Pacific Coast */}
                <rect x="2" y="10" width="18" height="45" rx="2" fill="hsl(218,60%,32%)" />
                {/* Mountain West */}
                <rect x="22" y="10" width="20" height="45" rx="2" fill="hsl(218,60%,32%)" />
                {/* Midwest */}
                <rect x="44" y="10" width="22" height="35" rx="2" fill="hsl(218,60%,32%)" />
                {/* South/TX */}
                <rect x="32" y="45" width="28" height="18" rx="2" fill="hsl(218,60%,32%)" />
                {/* Mid-Atlantic/SE */}
                <rect x="60" y="28" width="16" height="30" rx="2" fill="hsl(218,60%,32%)" />
                {/* Northeast */}
                <rect x="68" y="8" width="14" height="22" rx="2" fill="hsl(218,60%,32%)" />
                {/* Alaska hint */}
                <rect x="2" y="58" width="10" height="6" rx="1" fill="hsl(218,55%,28%)" />
                {/* Hawaii hint */}
                <rect x="14" y="58" width="8" height="6" rx="1" fill="hsl(218,55%,28%)" />

                {/* Region dots */}
                {regions.map((r) => (
                  <g key={r.name}>
                    <circle
                      cx={r.x}
                      cy={r.y}
                      r="3.5"
                      fill={activeRegion?.name === r.name ? "hsl(39,90%,60%)" : "hsl(213,72%,70%)"}
                      className="cursor-pointer transition-colors"
                      onClick={() => setActiveRegion(activeRegion?.name === r.name ? null : r)}
                      aria-label={`Select ${r.name} region`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setActiveRegion(activeRegion?.name === r.name ? null : r)}
                    />
                    {activeRegion?.name === r.name && (
                      <circle cx={r.x} cy={r.y} r="5.5" fill="none" stroke="hsl(39,90%,60%)" strokeWidth="1.5" />
                    )}
                  </g>
                ))}

                {/* Labels */}
                <text x="11" y="36" textAnchor="middle" fontSize="2.8" fill="white" fontWeight="600">Pacific</text>
                <text x="32" y="35" textAnchor="middle" fontSize="2.8" fill="white" fontWeight="600">Mountain</text>
                <text x="55" y="28" textAnchor="middle" fontSize="2.8" fill="white" fontWeight="600">Midwest</text>
                <text x="46" y="55" textAnchor="middle" fontSize="2.8" fill="white" fontWeight="600">South</text>
                <text x="68" y="44" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="600">SE</text>
                <text x="75" y="18" textAnchor="middle" fontSize="2.4" fill="white" fontWeight="600">NE</text>
              </svg>

              <p className="text-white/40 text-xs text-center mt-2">
                Click region dots above &bull; Simplified diagram for illustration
              </p>
            </div>

            {/* Active region detail */}
            {activeRegion ? (
              <div className="bg-card border border-card-border rounded-xl p-6 animate-in fade-in slide-in-from-bottom-2 duration-200" data-testid="region-detail">
                <h3 className="text-xl font-bold text-foreground mb-2">{activeRegion.name}</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm mb-5">
                  <div>
                    <span className="text-muted-foreground">Coverage:</span>{" "}
                    <span className="font-semibold text-foreground">{activeRegion.coverage}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Typical Turnaround:</span>{" "}
                    <span className="font-semibold text-foreground">{activeRegion.turnaround}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Regional Offices</p>
                  <div className="flex flex-wrap gap-2">
                    {activeRegion.offices.map((o) => (
                      <span key={o} className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-xs text-foreground">
                        <MapPin className="w-3 h-3 text-[hsl(213,72%,45%)]" aria-hidden="true" />
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">States Served</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRegion.states.map((s) => (
                      <span key={s} className="px-2 py-1 bg-[hsl(218,72%,22%)] text-white text-xs font-semibold rounded">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-muted/40 border border-dashed border-border rounded-xl p-8 text-center text-muted-foreground text-sm">
                <MapPin className="w-8 h-8 mx-auto mb-3 opacity-40" aria-hidden="true" />
                Click a region dot on the map above to see detailed coverage information.
              </div>
            )}
          </div>

          {/* Region list sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">All Service Regions</h2>
            <div className="space-y-3">
              {regions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => setActiveRegion(activeRegion?.name === region.name ? null : region)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    activeRegion?.name === region.name
                      ? "bg-[hsl(218,72%,22%)] text-white border-transparent"
                      : "bg-card border-card-border hover:shadow-sm hover:border-[hsl(218,72%,35%)]"
                  }`}
                  aria-pressed={activeRegion?.name === region.name}
                  data-testid={`region-btn-${region.name.toLowerCase().replace(/[\s/&]/g, "-")}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`font-semibold text-sm ${activeRegion?.name === region.name ? "text-white" : "text-foreground"}`}>
                        {region.name}
                      </div>
                      <div className={`text-xs mt-1 ${activeRegion?.name === region.name ? "text-white/65" : "text-muted-foreground"}`}>
                        {region.offices.length} offices &bull; {region.turnaround} turnaround
                      </div>
                    </div>
                    <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      activeRegion?.name === region.name ? "bg-white/20 text-white" : "bg-[hsl(213,30%,93%)] text-[hsl(218,72%,35%)]"
                    }`}>
                      {region.coverage}
                    </div>
                  </div>
                  <div className={`flex flex-wrap gap-1 mt-3`}>
                    {region.states.slice(0, 6).map((s) => (
                      <span key={s} className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                        activeRegion?.name === region.name ? "bg-white/10 text-white/80" : "bg-muted text-muted-foreground"
                      }`}>{s}</span>
                    ))}
                    {region.states.length > 6 && (
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        activeRegion?.name === region.name ? "text-white/60" : "text-muted-foreground"
                      }`}>+{region.states.length - 6} more</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 bg-[hsl(218,72%,22%)] rounded-xl p-6 text-white">
              <h3 className="font-bold mb-3">Need On-Site Service?</h3>
              <p className="text-white/70 text-sm mb-4">
                Our logistics team schedules secure document pickups anywhere in the contiguous US within 48 hours.
              </p>
              <a href="tel:+18005550100" className="flex items-center gap-2 text-[hsl(213,72%,70%)] font-semibold text-sm mb-4 hover:text-white transition-colors" data-testid="link-phone">
                <Phone className="w-4 h-4" aria-hidden="true" />
                1-800-555-0100
              </a>
              <Link
                href="/get-a-quote"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors text-sm"
                data-testid="coverage-cta"
              >
                Schedule Pickup <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Why local presence matters */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: CheckCircle, title: "Chain of Custody", desc: "Every document tracked from client pickup through secure delivery — verified at each handoff." },
            { icon: MapPin, title: "Local Logistics", desc: "Regional offices minimize document transit distance, reducing risk and turnaround time." },
            { icon: Phone, title: "Dedicated Support", desc: "Each region has a dedicated support line staffed by locally knowledgeable account specialists." },
            { icon: ArrowRight, title: "Same-Day Rush", desc: "42 cities offer same-day or next-day pickup scheduling for urgent digitization needs." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-card-border rounded-xl p-6">
              <item.icon className="w-6 h-6 text-[hsl(218,72%,35%)] mb-4" aria-hidden="true" />
              <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
