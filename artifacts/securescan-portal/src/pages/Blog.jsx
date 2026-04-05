import { Link, useRoute } from "wouter";
import { FileText, Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { useEffect } from "react";

const posts = [
  {
    slug: "benefits-of-digital-document-management",
    title: "The Benefits of Digital Document Management for Modern Enterprises",
    excerpt:
      "Transitioning from paper-based workflows to digital document management delivers measurable cost savings, improved compliance, and accelerated business processes. Here's a comprehensive look at why enterprise organizations are making the switch in 2024.",
    category: "Document Management",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["digital transformation", "document management", "ROI", "compliance"],
    featured: true,
    body: `
<h2>Introduction: The Paper Problem</h2>
<p>
  Despite the digital revolution, the average office worker still uses approximately 10,000 sheets of paper per year.
  For large enterprises, this translates to warehouses of filing cabinets, enormous off-site storage costs, and
  document retrieval times measured in hours rather than milliseconds. The business case for <strong>digital document
  management</strong> has never been stronger.
</p>

<h2>1. Dramatic Cost Reduction in Physical Storage</h2>
<p>
  Physical document storage is extraordinarily expensive when you account for all costs: leased office or warehouse
  space, fire suppression systems, climate control, security, insurance, and the labor required to retrieve and refile
  documents. Industry estimates place the fully-loaded cost of maintaining a single four-drawer filing cabinet at
  <strong>$1,500–$2,000 per year</strong>.
</p>
<p>
  Digitizing your archive eliminates physical storage costs almost entirely. A terabyte of cloud-hosted secure
  document storage — holding millions of scanned pages — costs a fraction of what one filing cabinet costs annually.
  For organizations with hundreds of linear feet of records, the savings are transformative.
</p>

<h3>Real-World ROI Example</h3>
<p>
  A mid-sized healthcare organization with 500 boxes of patient records is paying an estimated $21,000/year in
  off-site storage fees. After a <strong>bulk document scanning</strong> project with OCR processing, the same
  records occupy 200 GB of encrypted cloud storage at under $500/year — a 97% reduction in storage costs.
</p>

<h2>2. Instant Document Retrieval with OCR Search</h2>
<p>
  Finding a specific document in a physical archive can take 15–45 minutes. Finding it in a digital repository
  with full-text <strong>OCR (Optical Character Recognition)</strong> processing takes under two seconds. When
  your legal team needs a specific contract clause, your accounting team needs an invoice from three years ago,
  or your compliance team needs patient records for an audit, the productivity difference is enormous.
</p>
<p>
  OCR-enabled searchable PDFs mean any word, date, name, or number in any document becomes instantly findable.
  This transforms your document archive from a liability into an enterprise asset.
</p>

<h2>3. Strengthened Compliance and Audit Readiness</h2>
<p>
  Regulatory frameworks including HIPAA, SOX, GDPR, and FERPA impose strict requirements on how records are
  maintained, accessed, and disposed of. Digital document management systems with proper access controls,
  audit logs, and retention policies make compliance manageable rather than burdensome.
</p>
<p>
  Key compliance benefits include:
</p>
<ul>
  <li>Immutable audit trails showing who accessed, modified, or deleted any document</li>
  <li>Automated retention scheduling with legally defensible disposition workflows</li>
  <li>Role-based access controls ensuring only authorized personnel can view sensitive records</li>
  <li>Rapid response to e-discovery requests with full-text search across all records</li>
</ul>

<h2>4. Business Continuity and Disaster Recovery</h2>
<p>
  Physical documents are uniquely vulnerable to irreversible loss. Fire, flooding, water damage from broken pipes,
  and even mold can destroy years of business records in hours. Organizations that rely on paper records for critical
  operational data face catastrophic business continuity risks.
</p>
<p>
  <strong>Secure data storage</strong> with geo-redundant backups ensures your records survive any local disaster.
  Good document management platforms are designed for high availability, with automatic failover across multiple
  geographically separated data centers — providing resilience that no physical storage facility can match.
</p>

<h2>5. Enabling AI and Business Intelligence</h2>
<p>
  Perhaps the most forward-looking benefit of digital document management is enabling artificial intelligence
  and business intelligence across your historical records. Once documents are digitized with quality OCR
  processing, AI systems can extract insights, identify patterns, and automate workflows that were previously
  impossible.
</p>
<p>
  Legal teams can use AI to review contracts for specific clauses across thousands of agreements in minutes.
  Financial teams can automatically extract and reconcile line items from thousands of invoices. Healthcare
  organizations can mine historical records for population health insights. The value of your document archive
  multiplies exponentially when it becomes machine-readable.
</p>

<h2>6. Environmental Sustainability</h2>
<p>
  Beyond financial and operational benefits, digital document management delivers meaningful environmental
  impact. Paper production is resource-intensive: it requires trees, enormous amounts of water, and energy.
  Reducing paper consumption and eliminating physical storage infrastructure contributes measurably to
  corporate sustainability goals and ESG reporting.
</p>

<h2>Getting Started with Secure Document Digitization</h2>
<p>
  The path to digital document management begins with a systematic approach to your existing paper archive.
  A professional <strong>B2B scanning service</strong> provider handles document pickup, preparation, high-resolution
  scanning, OCR processing, metadata tagging, and secure delivery to your chosen document management system.
</p>
<p>
  Plan2Scan specializes in exactly this transformation — from high-volume bulk document scanning through to
  long-term secure digital storage. Our team can assess your current document landscape, recommend the optimal
  digitization strategy, and execute the project with minimal disruption to your operations.
</p>
    `,
  },
  {
    slug: "ocr-legal-document-review",
    title: "How OCR Technology Is Changing Legal Document Review",
    excerpt:
      "Modern OCR and AI-powered document intelligence are transforming how law firms handle discovery, contract review, and compliance documentation — cutting review time by up to 80%.",
    category: "OCR Technology",
    date: "February 28, 2024",
    readTime: "6 min read",
    tags: ["OCR", "legal", "e-discovery", "AI"],
    featured: false,
    body: "",
  },
  {
    slug: "hipaa-healthcare-records",
    title: "5 HIPAA Requirements Every Healthcare Records Team Must Know",
    excerpt:
      "HIPAA compliance for medical records is complex — especially during the transition from paper to digital. Here are the five most critical requirements your team needs to address before digitizing patient records.",
    category: "Compliance",
    date: "February 14, 2024",
    readTime: "7 min read",
    tags: ["HIPAA", "healthcare", "compliance", "medical records"],
    featured: false,
    body: "",
  },
  {
    slug: "true-cost-paper-storage",
    title: "Calculating the True Cost of Paper Document Storage",
    excerpt:
      "Most organizations dramatically underestimate what they spend on paper document storage. This analysis breaks down every cost component — from floor space to labor — for a complete ROI picture.",
    category: "ROI Analysis",
    date: "January 30, 2024",
    readTime: "9 min read",
    tags: ["ROI", "cost analysis", "paper storage", "digitization"],
    featured: false,
    body: "",
  },
];

function BlogList() {
  useEffect(() => {
    document.title = "Blog & Resources | Document Digitization Insights | Plan2Scan";
  }, []);

  const [featured, ...rest] = posts;

  return (
    <>
      <section className="bg-[hsl(218,72%,22%)] text-white py-16" aria-labelledby="blog-list-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="blog-list-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Resources &amp; Insights
          </h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Expert guidance on secure document digitization, OCR technology, compliance requirements,
            and ROI analysis for B2B organizations considering a digital transformation.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        {/* Featured post */}
        <article
          className="bg-card border border-card-border rounded-2xl overflow-hidden mb-12 hover:shadow-lg transition-shadow"
          data-testid="featured-post"
        >
          <div className="md:grid md:grid-cols-5">
            <div className="md:col-span-2 bg-[hsl(218,72%,22%)] flex items-center justify-center p-12 min-h-48">
              <FileText className="w-20 h-20 text-white/30" aria-hidden="true" />
            </div>
            <div className="md:col-span-3 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[hsl(213,72%,55%)] text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-xs font-semibold text-[hsl(213,72%,45%)] uppercase tracking-wide">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                <Link href={`/blog/${featured.slug}`} className="hover:text-[hsl(218,72%,35%)] transition-colors" data-testid="link-featured-post">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-5 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(218,72%,35%)] hover:text-[hsl(213,72%,55%)] transition-colors"
                data-testid="link-read-featured"
              >
                Read the full article <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        {/* Other posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((post, i) => (
            <article
              key={post.slug}
              className="bg-card border border-card-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              data-testid={`blog-post-${i + 2}`}
            >
              <div className="bg-muted h-32 flex items-center justify-center">
                <FileText className="w-10 h-10 text-muted-foreground/40" aria-hidden="true" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-[hsl(213,72%,45%)] uppercase tracking-wide">{post.category}</span>
                <h3 className="text-base font-bold text-foreground mt-2 mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[hsl(218,72%,35%)] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function BlogPost({ slug }) {
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Plan2Scan Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-[hsl(218,72%,35%)] hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-[hsl(218,72%,22%)] text-white py-16" aria-labelledby="post-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <h1 id="post-heading" className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/65 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-white/10 rounded-full text-xs text-white/75">
                <Tag className="w-3 h-3" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {post.body ? (
          <div
            className="prose prose-slate prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-ul:space-y-2 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" aria-hidden="true" />
            <p className="text-muted-foreground text-lg mb-4">Full article coming soon.</p>
            <Link href="/blog" className="text-[hsl(218,72%,35%)] hover:underline">
              ← Back to Blog
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-[hsl(218,72%,22%)] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Document Workflows?</h3>
          <p className="text-white/70 mb-6">
            Get a free consultation and custom quote for your secure document digitization project.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
            data-testid="post-cta"
          >
            Get a Free Quote
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </>
  );
}

export default function Blog() {
  const [isList] = useRoute("/blog");
  const [isPost, params] = useRoute("/blog/:slug");

  if (isPost && params?.slug) {
    return <BlogPost slug={params.slug} />;
  }
  return <BlogList />;
}
