import { Link } from "wouter";
import { Shield, Archive, FileSearch, ChevronRight, CheckCircle, Users, FileText, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* SEO meta via document title - set in App.tsx */}
      {/* Hero Section */}
      <section className="bg-[hsl(218,72%,22%)] text-white relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(213,72%,35%,0.4),transparent_60%)]" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm font-medium mb-6 bg-white/10 px-3 py-1.5 rounded-full">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>Secure &middot; Reliable &middot; B2B Focused</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure Document Digitization{" "}
              <span className="text-[hsl(213,72%,70%)]">for Modern Business</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Plan2Scan delivers enterprise-grade B2B scanning services, OCR processing, and secure data storage
              solutions that transform paper archives into searchable, protected digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors text-base"
                data-testid="hero-cta-quote"
              >
                Calculate Your Savings
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/services/bulk-scanning"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors text-base"
                data-testid="hero-cta-services"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/15">
              {[
                { label: "Documents Processed", value: "Fast" },
                { label: "Encryption Standard", value: "AES-256" },
                { label: "Capture Accuracy", value: "High" },
                { label: "Turnaround", value: "Rapid" },
              ].map((stat) => (
                <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Document Management Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From initial bulk scanning to long-term secure storage, Plan2Scan provides end-to-end
              secure document digitization services tailored for B2B organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Archive,
                title: "Bulk Document Scanning",
                href: "/services/bulk-scanning",
                description:
                  "High-volume paper-to-digital conversion using professional scanning equipment. Handle large batches of documents quickly with consistent quality and a full chain of custody.",
                features: ["High daily capacity", "Multiple paper formats", "Duplex scanning", "Quality assurance"],
                testId: "card-service-scanning",
              },
              {
                icon: Shield,
                title: "Secure Data Storage",
                href: "/services/secure-storage",
                description:
                  "Encrypted document storage with role-based access controls so only the right people can view your files. Your data stays protected both at rest and in transit.",
                features: ["AES-256 encryption", "Role-based access", "HIPAA compliant", "Regular backups"],
                testId: "card-service-storage",
              },
              {
                icon: FileSearch,
                title: "OCR Services",
                href: "/services/ocr",
                description:
                  "Optical Character Recognition transforms scanned images into fully searchable PDF documents. Supports 50+ languages and handwritten text recognition for complete digital accessibility.",
                features: ["50+ languages", "Handwriting support", "Searchable PDFs", "Metadata tagging"],
                testId: "card-service-ocr",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="bg-card border border-card-border rounded-xl p-8 hover:shadow-lg transition-shadow group"
                data-testid={service.testId}
              >
                <div className="w-12 h-12 rounded-lg bg-[hsl(218,72%,22%)] flex items-center justify-center mb-6 group-hover:bg-[hsl(213,72%,55%)] transition-colors">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(218,72%,35%)] hover:text-[hsl(213,72%,55%)] transition-colors"
                  data-testid={`link-${service.testId}`}
                >
                  Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Plan2Scan */}
      <section className="py-20" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Enterprises Choose Plan2Scan for Secure Document Digitization
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Since 2008, Plan2Scan has been the trusted partner for organizations in healthcare, legal, finance,
                and government sectors seeking reliable B2B scanning services with uncompromising data security.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Chain of Custody Tracking",
                    desc: "Every document is tracked from pickup to delivery with tamper-proof audit logs.",
                  },
                  {
                    title: "Long-Term Digital Archiving",
                    desc: "Meet federal records management standards with our certified archival processes.",
                  },
                  {
                    title: "Same-Day Rush Processing",
                    desc: "Critical document batches digitized and delivered within 24 hours.",
                  },
                  {
                    title: "Dedicated Account Management",
                    desc: "A named project manager for every client, ensuring smooth, consistent delivery.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle className="w-5 h-5 text-[hsl(213,72%,45%)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.title}</div>
                      <div className="text-muted-foreground text-sm mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[hsl(218,72%,22%)] text-white rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-8">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🏥", label: "Healthcare" },
                  { icon: "⚖️", label: "Legal & Compliance" },
                  { icon: "🏦", label: "Banking & Finance" },
                  { icon: "🏛️", label: "Government" },
                  { icon: "🎓", label: "Education" },
                  { icon: "🏗️", label: "Construction" },
                  { icon: "📦", label: "Logistics" },
                  { icon: "🔬", label: "Life Sciences" },
                ].map((industry) => (
                  <div key={industry.label} className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{industry.icon}</span>
                    <span className="text-white/85 text-sm font-medium">{industry.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/15">
                <Link
                  href="/get-a-quote"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
                  data-testid="industries-cta"
                >
                  Get a Free Consultation
                  <ChevronRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-center text-foreground mb-14">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We had years of paper records taking up an entire room. Plan2Scan scanned everything and now we can find any document in seconds. Really changed how we work.",
                author: "James R.",
                role: "Office Manager, Healthcare Clinic",
                testId: "testimonial-1",
              },
              {
                quote:
                  "The OCR feature is genuinely useful — old contracts that were just image files are now searchable. Saved us a lot of manual work during a recent audit.",
                author: "Laura B.",
                role: "Legal Administrator",
                testId: "testimonial-2",
              },
              {
                quote:
                  "Simple process from start to finish. We sent our boxes, got the files back quickly, and the scan quality was great. Would recommend.",
                author: "Tom H.",
                role: "Operations Lead, Local Government",
                testId: "testimonial-3",
              },
            ].map((t) => (
              <blockquote
                key={t.testId}
                className="bg-card border border-card-border rounded-xl p-7"
                data-testid={t.testId}
              >
                <div className="flex mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <footer>
                  <div className="font-semibold text-foreground text-sm">{t.author}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[hsl(218,72%,22%)] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Go Paperless?
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Use our free Savings Calculator to see how much physical space and cost you could save by digitizing
            your document archive today.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-bold rounded-xl transition-colors text-lg"
            data-testid="banner-cta"
          >
            Calculate Your ROI
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h2 id="blog-heading" className="text-3xl font-bold text-foreground">Latest Resources</h2>
            <Link href="/blog" className="text-[hsl(218,72%,35%)] hover:text-[hsl(213,72%,55%)] text-sm font-semibold transition-colors" data-testid="link-blog">
              View all posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-md transition-shadow" data-testid="blog-teaser-1">
              <div className="bg-[hsl(218,72%,22%)] h-32 flex items-center justify-center">
                <FileText className="w-12 h-12 text-white/40" aria-hidden="true" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[hsl(213,72%,45%)] uppercase tracking-wide">Document Management</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">
                  The Benefits of Digital Document Management for Modern Enterprises
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Discover how transitioning from paper to digital document workflows reduces costs, improves
                  compliance, and accelerates business processes across your organization.
                </p>
                <Link href="/blog/benefits-of-digital-document-management" className="text-sm font-semibold text-[hsl(218,72%,35%)] hover:text-[hsl(213,72%,55%)] transition-colors" data-testid="link-blog-post-1">
                  Read the full article →
                </Link>
              </div>
            </article>
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "How OCR Technology Is Changing Legal Document Review",
                  category: "OCR Technology",
                  testId: "blog-teaser-2",
                },
                {
                  title: "5 HIPAA Requirements Every Healthcare Records Team Must Know",
                  category: "Compliance",
                  testId: "blog-teaser-3",
                },
                {
                  title: "Calculating the True Cost of Paper Document Storage",
                  category: "ROI Analysis",
                  testId: "blog-teaser-4",
                },
              ].map((post) => (
                <article key={post.title} className="bg-card border border-card-border rounded-lg p-5 hover:shadow-sm transition-shadow flex gap-4" data-testid={post.testId}>
                  <div className="w-2 rounded-full bg-[hsl(213,72%,55%)] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-[hsl(213,72%,45%)] uppercase tracking-wide">{post.category}</span>
                    <h3 className="text-sm font-semibold text-foreground mt-1">{post.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
