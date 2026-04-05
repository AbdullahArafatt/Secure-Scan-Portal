import { useState, useEffect } from "react";
import { Calculator, CheckCircle, ArrowRight, DollarSign, Box, Building } from "lucide-react";

function SavingsCalculator() {
  const [boxes, setBoxes] = useState<number>(10);
  const [industryFactor, setIndustryFactor] = useState<number>(1.0);
  const [results, setResults] = useState<{
    sqFtSaved: number;
    annualStorageCost: number;
    digitizationCost: number;
    fiveYearSavings: number;
    breakEvenMonths: number;
    co2Saved: number;
  } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const PAGES_PER_BOX = 2500;
  const SQ_FT_PER_BOX = 1.5;
  const ANNUAL_STORAGE_COST_PER_SQ_FT = 28;
  const DIGITIZATION_COST_PER_BOX = 45;

  const calculate = () => {
    if (!boxes || boxes < 1) return;
    const sqFtSaved = Math.round(boxes * SQ_FT_PER_BOX * 10) / 10;
    const annualStorageCost = Math.round(sqFtSaved * ANNUAL_STORAGE_COST_PER_SQ_FT * industryFactor);
    const digitizationCost = Math.round(boxes * DIGITIZATION_COST_PER_BOX);
    const fiveYearSavings = Math.round(annualStorageCost * 5 - digitizationCost);
    const breakEvenMonths = Math.ceil(digitizationCost / (annualStorageCost / 12));
    const co2Saved = Math.round(boxes * 0.3 * 10) / 10;

    setResults({ sqFtSaved, annualStorageCost, digitizationCost, fiveYearSavings, breakEvenMonths, co2Saved });
  };

  useEffect(() => {
    calculate();
  }, [boxes, industryFactor]);

  return (
    <div className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-lg" data-testid="savings-calculator">
      {/* Calculator header */}
      <div className="bg-[hsl(218,72%,22%)] text-white p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
            <Calculator className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold">Document Digitization Savings Calculator</h2>
        </div>
        <p className="text-white/75 text-sm">
          Estimate your storage space savings and cost reduction from digitizing your paper archive.
          Results based on industry-standard physical storage benchmarks.
        </p>
      </div>

      <div className="p-8">
        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Box count input */}
          <div>
            <label htmlFor="box-count" className="block text-sm font-semibold text-foreground mb-2">
              <Box className="inline w-4 h-4 mr-1.5 mb-0.5 text-[hsl(218,72%,35%)]" aria-hidden="true" />
              Number of Boxes / Bankers Boxes
            </label>
            <input
              id="box-count"
              type="number"
              min={1}
              max={100000}
              value={boxes}
              onChange={(e) => setBoxes(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
              aria-describedby="box-count-help"
              data-testid="input-boxes"
            />
            <p id="box-count-help" className="text-muted-foreground text-xs mt-1.5">
              One standard bankers box holds approximately 2,500 pages.
            </p>
            {/* Slider */}
            <input
              type="range"
              min={1}
              max={1000}
              value={Math.min(boxes, 1000)}
              onChange={(e) => setBoxes(parseInt(e.target.value))}
              className="w-full mt-3 accent-[hsl(218,72%,35%)]"
              aria-label="Box count slider"
              data-testid="slider-boxes"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1 box</span>
              <span>500</span>
              <span>1,000+</span>
            </div>
          </div>

          {/* Industry selector */}
          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-foreground mb-2">
              <Building className="inline w-4 h-4 mr-1.5 mb-0.5 text-[hsl(218,72%,35%)]" aria-hidden="true" />
              Industry / Storage Type
            </label>
            <select
              id="industry"
              value={industryFactor}
              onChange={(e) => setIndustryFactor(parseFloat(e.target.value))}
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              data-testid="select-industry"
            >
              <option value={1.0}>Standard Office (Avg. $28/sq ft/yr)</option>
              <option value={1.4}>Healthcare / Medical Records ($39/sq ft/yr)</option>
              <option value={1.6}>Legal / Law Firm ($45/sq ft/yr)</option>
              <option value={1.2}>Financial Services ($34/sq ft/yr)</option>
              <option value={0.9}>Government / Municipal ($25/sq ft/yr)</option>
              <option value={1.5}>Pharmaceutical / Life Sciences ($42/sq ft/yr)</option>
              <option value={0.8}>Warehouse / Offsite Storage ($22/sq ft/yr)</option>
            </select>
            <p className="text-muted-foreground text-xs mt-1.5">
              Storage costs vary by industry. Select your sector for a more accurate estimate.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4 text-sm">
              <div className="text-muted-foreground">Estimated pages in your archive:</div>
              <div className="text-2xl font-bold text-foreground mt-1">
                {(boxes * PAGES_PER_BOX).toLocaleString()}
              </div>
              <div className="text-muted-foreground text-xs mt-0.5">pages across {boxes.toLocaleString()} boxes</div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div data-testid="calculator-results">
            <div className="border-t border-border pt-8 mb-6">
              <h3 className="text-lg font-bold text-foreground mb-6">Your Estimated Savings</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    label: "Physical Space Saved",
                    value: `${results.sqFtSaved.toLocaleString()} sq ft`,
                    sub: "office floor space recovered",
                    icon: Box,
                    testId: "result-sqft",
                    highlight: false,
                  },
                  {
                    label: "Annual Storage Cost Eliminated",
                    value: `$${results.annualStorageCost.toLocaleString()}`,
                    sub: "per year savings",
                    icon: DollarSign,
                    testId: "result-annual",
                    highlight: false,
                  },
                  {
                    label: "5-Year Net Savings",
                    value: `$${results.fiveYearSavings.toLocaleString()}`,
                    sub: "after digitization cost",
                    icon: Calculator,
                    testId: "result-5year",
                    highlight: true,
                  },
                  {
                    label: "Break-Even Point",
                    value: `${results.breakEvenMonths} months`,
                    sub: "to recover digitization cost",
                    icon: CheckCircle,
                    testId: "result-breakeven",
                    highlight: false,
                  },
                  {
                    label: "Est. Digitization Cost",
                    value: `$${results.digitizationCost.toLocaleString()}`,
                    sub: "one-time project investment",
                    icon: DollarSign,
                    testId: "result-cost",
                    highlight: false,
                  },
                  {
                    label: "CO₂ Reduction",
                    value: `${results.co2Saved.toLocaleString()} kg`,
                    sub: "estimated carbon footprint saved",
                    icon: CheckCircle,
                    testId: "result-co2",
                    highlight: false,
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    className={`rounded-xl p-5 border ${
                      r.highlight
                        ? "bg-[hsl(218,72%,22%)] text-white border-transparent"
                        : "bg-muted/40 border-border"
                    }`}
                    data-testid={r.testId}
                  >
                    <r.icon
                      className={`w-5 h-5 mb-3 ${r.highlight ? "text-[hsl(213,72%,70%)]" : "text-[hsl(218,72%,35%)]"}`}
                      aria-hidden="true"
                    />
                    <div className={`text-2xl font-bold mb-1 ${r.highlight ? "text-white" : "text-foreground"}`}>
                      {r.value}
                    </div>
                    <div className={`text-xs ${r.highlight ? "text-white/70" : "text-muted-foreground"}`}>{r.label}</div>
                    <div className={`text-xs mt-0.5 ${r.highlight ? "text-white/55" : "text-muted-foreground/70"}`}>{r.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              <strong>Disclaimer:</strong> These are estimates based on industry-average storage costs and standard
              pricing. Actual savings may vary based on your specific location, document condition, and provider.
              Contact Plan2Scan for a precise custom quote.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GetAQuote() {
  useEffect(() => {
    document.title = "Get a Quote | Document Digitization Savings Calculator | Plan2Scan";
  }, []);

  const [formState, setFormState] = useState({
    name: "", company: "", email: "", phone: "", service: "", boxes: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[hsl(218,72%,22%)] text-white py-16" aria-labelledby="quote-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="quote-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Get a Free Quote &amp; Calculate Your Savings
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Use our interactive Savings Calculator to estimate your ROI, then submit the form
            below for a custom proposal from our B2B scanning services team.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        {/* Savings Calculator */}
        <div className="mb-16">
          <SavingsCalculator />
        </div>

        {/* Contact form */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Request a Custom Proposal</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill out this short form and a Plan2Scan account manager will contact you within one business
              day with a tailored quote for your secure document digitization project.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Free project consultation with a dedicated account manager",
                "Custom pricing based on your document volume and timeline",
                "No obligation — walk away any time",
                "References from similar-sized organizations available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/40 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-sm mb-3">Typical Turnaround Times</h3>
              <div className="space-y-2 text-sm">
                {[
                  ["Small batch (< 50 boxes)", "3–5 business days"],
                  ["Medium batch (50–500 boxes)", "2–4 weeks"],
                  ["Large batch (500–5,000 boxes)", "4–12 weeks"],
                  ["Enterprise (5,000+ boxes)", "Custom schedule"],
                ].map(([size, time]) => (
                  <div key={size} className="flex justify-between">
                    <span className="text-muted-foreground">{size}</span>
                    <span className="font-medium text-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-card border border-card-border rounded-2xl p-10 text-center" data-testid="form-success">
                <CheckCircle className="w-16 h-16 text-[hsl(213,72%,45%)] mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your quote request has been received. A Plan2Scan account manager will be in touch
                  within one business day.
                </p>
                <p className="text-sm text-muted-foreground">
                  In the meantime, explore our{" "}
                  <a href="/blog" className="text-[hsl(218,72%,35%)] hover:underline">resource blog</a>
                  {" "}for guides on document digitization best practices.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-card-border rounded-2xl p-8 space-y-5"
                noValidate
                data-testid="quote-form"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Your Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Jane Smith"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                      Company <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Acme Corp"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Work Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="jane.smith@company.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+1 (555) 000-0000"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                    Service Required <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    required
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="select-service"
                  >
                    <option value="">Select a service...</option>
                    <option value="bulk-scanning">Bulk Document Scanning</option>
                    <option value="secure-storage">Secure Data Storage</option>
                    <option value="ocr">OCR Services</option>
                    <option value="full-service">Full Service (Scan + OCR + Storage)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="form-boxes" className="block text-sm font-medium text-foreground mb-1.5">
                    Estimated Number of Boxes
                  </label>
                  <input
                    id="form-boxes"
                    type="number"
                    min={1}
                    value={formState.boxes}
                    onChange={(e) => setFormState({ ...formState, boxes: e.target.value })}
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. 250"
                    data-testid="input-form-boxes"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your document types, urgency, or any special requirements..."
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[hsl(218,72%,22%)] hover:bg-[hsl(218,72%,28%)] text-white font-semibold rounded-lg transition-colors text-base"
                  data-testid="button-submit-quote"
                >
                  Request My Custom Quote
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
