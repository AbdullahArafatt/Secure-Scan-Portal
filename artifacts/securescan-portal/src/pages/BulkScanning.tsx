import { Link } from "wouter";
import { Archive, CheckCircle, ArrowRight, Layers, Clock, Award, BarChart } from "lucide-react";
import { useEffect } from "react";

export default function BulkScanning() {
  useEffect(() => {
    document.title = "Bulk Document Scanning Services | High-Volume Paper-to-Digital | Plan2Scan";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-[hsl(218,72%,22%)] text-white py-20" aria-labelledby="bulk-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Bulk Document Scanning</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <Archive className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-[hsl(213,72%,75%)] font-medium">Bulk Scanning Services</span>
            </div>
            <h1 id="bulk-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              High-Volume Bulk Document Scanning for Enterprise Archives
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Convert massive paper archives to fully searchable digital files with our industrial-grade
              bulk document scanning service. Plan2Scan processes up to 100,000 pages per day with
              99.97% capture accuracy and complete chain-of-custody tracking.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
              data-testid="bulk-cta"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[hsl(218,72%,18%)] text-white py-8" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100,000", label: "Pages/Day Capacity", testId: "stat-pages" },
            { value: "99.97%", label: "Capture Accuracy", testId: "stat-accuracy" },
            { value: "200+", label: "Document Formats", testId: "stat-formats" },
            { value: "24hr", label: "Rush Processing", testId: "stat-rush" },
          ].map((s) => (
            <div key={s.label} className="text-center" data-testid={s.testId}>
              <div className="text-3xl font-bold text-[hsl(213,72%,70%)]">{s.value}</div>
              <div className="text-white/65 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Bulk Scanning Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A rigorously controlled, six-stage workflow ensures every document is captured accurately
              and delivered securely.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Document Pickup & Inventory",
                  desc: "Secure on-site pickup with tamper-evident packaging. Every box inventoried and barcoded before transport. Chain-of-custody documentation provided.",
                  icon: Layers,
                  testId: "process-step-1",
                },
                {
                  step: "02",
                  title: "Document Preparation",
                  desc: "Removal of staples, clips, and binding. De-creasing and minor repair of damaged pages. Documents organized per client specifications before scanning.",
                  icon: Award,
                  testId: "process-step-2",
                },
                {
                  step: "03",
                  title: "High-Resolution Scanning",
                  desc: "Industrial duplex scanners capture both sides simultaneously at 300–600 DPI. Color, grayscale, and black-and-white processing based on document type.",
                  icon: BarChart,
                  testId: "process-step-3",
                },
                {
                  step: "04",
                  title: "Quality Assurance Review",
                  desc: "Every batch undergoes automated image quality analysis plus human QA review. Pages rescanned if below quality threshold — guaranteed.",
                  icon: CheckCircle,
                  testId: "process-step-4",
                },
                {
                  step: "05",
                  title: "OCR & Metadata Tagging",
                  desc: "Optical Character Recognition applied to create fully searchable PDFs. Custom metadata fields populated per your indexing requirements.",
                  icon: Archive,
                  testId: "process-step-5",
                },
                {
                  step: "06",
                  title: "Secure Digital Delivery",
                  desc: "Encrypted delivery via secure SFTP, cloud repository, or integration with your existing document management system (DMS).",
                  icon: Clock,
                  testId: "process-step-6",
                },
              ].map((item) => (
                <div key={item.step} className="md:pl-16 flex gap-6" data-testid={item.testId}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[hsl(218,72%,22%)] flex items-center justify-center flex-shrink-0 z-10 relative">
                      <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="text-xs font-bold text-[hsl(213,72%,45%)] mb-1 uppercase tracking-wider">Step {item.step}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported formats */}
      <section className="py-16 bg-muted/30" aria-labelledby="formats-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="formats-heading" className="text-2xl font-bold text-foreground mb-8">
            Supported Document Formats &amp; Output Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Input Documents</h3>
              <ul className="space-y-2">
                {[
                  "Standard letter & legal paper",
                  "Ledger & tabloid (11×17)",
                  "Bound books & journals",
                  "Fragile historical documents",
                  "NCR / multi-part forms",
                  "Blueprints & large-format (AO–A4)",
                  "Microfilm & microfiche",
                  "Photographs & slides",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Output Formats</h3>
              <ul className="space-y-2">
                {[
                  "Searchable PDF / PDF-A",
                  "TIFF (single & multi-page)",
                  "JPEG & PNG",
                  "Microsoft Word (DOCX)",
                  "Excel (for tabular data)",
                  "XML with metadata",
                  "DICOM (medical imaging)",
                  "DXF (engineering drawings)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">DMS Integrations</h3>
              <ul className="space-y-2">
                {[
                  "SharePoint & OneDrive",
                  "Laserfiche",
                  "OpenText Documentum",
                  "DocuWare",
                  "M-Files",
                  "Box & Dropbox Business",
                  "Salesforce CRM",
                  "Custom API delivery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(218,72%,22%)] text-white" aria-labelledby="bulk-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="bulk-cta-heading" className="text-3xl font-bold mb-4">
            Ready to Digitize Your Document Archive?
          </h2>
          <p className="text-white/75 mb-8">
            Request a free consultation and receive a custom quote based on your document volume,
            format types, and turnaround requirements.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-bold rounded-xl transition-colors text-lg"
            data-testid="bulk-bottom-cta"
          >
            Get a Custom Quote
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
