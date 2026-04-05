import { Link } from "wouter";
import { FileSearch, CheckCircle, ArrowRight, Globe, Zap, FileText } from "lucide-react";
import { useEffect } from "react";

export default function OCR() {
  useEffect(() => {
    document.title = "OCR Services | Optical Character Recognition for Searchable PDFs | Plan2Scan";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-[hsl(218,72%,22%)] text-white py-20" aria-labelledby="ocr-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>OCR Services</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <FileSearch className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-[hsl(213,72%,75%)] font-medium">OCR Services</span>
            </div>
            <h1 id="ocr-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              OCR Services: Transform Scanned Documents into Fully Searchable PDFs
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Plan2Scan's Optical Character Recognition (OCR) services convert scanned images and
              legacy documents into fully indexed, searchable digital files. Supporting 50+ languages,
              handwritten text, and complex layouts — making your entire document library instantly
              findable and AI-ready.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
              data-testid="ocr-cta"
            >
              Start Your OCR Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is OCR */}
      <section className="py-20" aria-labelledby="what-ocr-heading">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 id="what-ocr-heading" className="text-3xl font-bold text-foreground mb-6">
              What Is Optical Character Recognition (OCR)?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Optical Character Recognition (OCR) is a technology that analyzes scanned document images
              and converts them into machine-readable, editable, and searchable text. Without OCR, a
              scanned document is merely a photograph — with OCR, every word becomes instantly searchable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Plan2Scan uses AI-enhanced OCR engines trained on millions of business document types —
              including invoices, legal contracts, medical records, engineering drawings, and handwritten
              forms — delivering high recognition accuracy across diverse document formats.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The output of our OCR process is a fully searchable PDF (PDF-A or PDF/UA for accessibility),
              where the original document image is preserved alongside a transparent text layer indexed for
              full-text search across your entire document management system.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground text-sm mb-3">Key OCR Benefits for B2B Organizations</h3>
              <ul className="space-y-2">
                {[
                  "Find any document across millions of files in under a second",
                  "Extract data from invoices and forms into structured databases",
                  "Enable AI and machine learning over legacy document sets",
                  "Meet e-discovery requirements without manual review",
                  "Improve regulatory compliance with full text audit capabilities",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-[hsl(213,72%,45%)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">OCR Accuracy by Document Type</h3>
            {[
              { type: "Printed business documents (laser-printed)", accuracy: 99.8, testId: "ocr-accuracy-printed" },
              { type: "Standard typed text (typewriter)", accuracy: 99.2, testId: "ocr-accuracy-typed" },
              { type: "Handwritten text (block/cursive)", accuracy: 94.5, testId: "ocr-accuracy-handwritten" },
              { type: "Forms with checkboxes & tables", accuracy: 98.3, testId: "ocr-accuracy-forms" },
              { type: "Degraded / aged documents", accuracy: 96.1, testId: "ocr-accuracy-aged" },
            ].map((item) => (
              <div key={item.type} data-testid={item.testId}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm text-foreground">{item.type}</span>
                  <span className="text-sm font-bold text-[hsl(218,72%,35%)]">{item.accuracy}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[hsl(218,72%,35%)] rounded-full transition-all"
                    style={{ width: `${item.accuracy}%` }}
                    role="progressbar"
                    aria-valuenow={item.accuracy}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.type}: ${item.accuracy}% accuracy`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OCR capabilities */}
      <section className="py-16 bg-muted/30" aria-labelledby="ocr-capabilities-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="ocr-capabilities-heading" className="text-3xl font-bold text-foreground text-center mb-14">
            Advanced OCR Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Multilingual OCR",
                desc: "Recognize and extract text in 50+ languages including Arabic, Chinese, Japanese, Cyrillic, and Latin scripts. Mixed-language documents handled intelligently.",
                testId: "cap-multilingual",
              },
              {
                icon: Zap,
                title: "Intelligent Data Extraction (IDP)",
                desc: "Beyond OCR — extract structured data from invoices, contracts, and forms. Named entity recognition identifies dates, amounts, parties, and custom fields automatically.",
                testId: "cap-idp",
              },
              {
                icon: FileText,
                title: "Table & Form Recognition",
                desc: "Preserve table structure from scanned spreadsheets, invoices, and government forms. Output as structured Excel, CSV, or JSON for downstream data processing.",
                testId: "cap-tables",
              },
              {
                icon: FileSearch,
                title: "Handwriting Recognition (ICR)",
                desc: "Intelligent Character Recognition for cursive and block handwriting. Ideal for medical notes, legal annotations, and historical records requiring human-written content capture.",
                testId: "cap-icr",
              },
              {
                icon: CheckCircle,
                title: "Barcode & QR Decoding",
                desc: "Automatically read 1D and 2D barcodes, QR codes, and data matrix codes embedded in documents. Extract and index barcode data as searchable metadata.",
                testId: "cap-barcode",
              },
              {
                icon: ArrowRight,
                title: "Batch API Processing",
                desc: "Integrate OCR directly into your existing workflows via our REST API. Process documents at scale with asynchronous job queuing and webhook delivery.",
                testId: "cap-api",
              },
            ].map((cap) => (
              <article
                key={cap.title}
                className="bg-card border border-card-border rounded-xl p-7"
                data-testid={cap.testId}
              >
                <div className="w-11 h-11 rounded-lg bg-[hsl(218,72%,22%)] flex items-center justify-center mb-5">
                  <cap.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[hsl(218,72%,22%)] text-white" aria-labelledby="ocr-cta-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="ocr-cta-heading" className="text-3xl font-bold mb-4">
            Make Your Documents Searchable Today
          </h2>
          <p className="text-white/75 mb-8">
            Request a free OCR sample run — send us a sample document set and we'll return a fully
            processed, searchable PDF at no cost, so you can see the quality firsthand.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-bold rounded-xl transition-colors text-lg"
            data-testid="ocr-bottom-cta"
          >
            Request a Free OCR Sample
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
