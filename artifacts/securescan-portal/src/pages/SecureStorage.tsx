import { Link } from "wouter";
import { Shield, Lock, CheckCircle, ArrowRight, Server, Eye, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function SecureStorage() {
  useEffect(() => {
    document.title = "Secure Data Storage Services | Encrypted Document Repository | Plan2Scan";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-[hsl(218,72%,22%)] text-white py-20" aria-labelledby="storage-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[hsl(213,72%,75%)] text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Secure Data Storage</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-[hsl(213,72%,75%)] font-medium">Secure Data Storage</span>
            </div>
            <h1 id="storage-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Enterprise Secure Document Storage with Military-Grade Encryption
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Plan2Scan's secure data storage platform protects your digitized documents with AES-256
              encryption, role-based access controls, and SOC 2 Type II compliant infrastructure —
              meeting the strictest requirements in healthcare, finance, and government.
            </p>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
              data-testid="storage-cta"
            >
              Discuss Your Storage Needs
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="border-b border-border py-10" aria-label="Compliance certifications">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Compliance &amp; Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "SOC 2 Type II",
              "ISO 27001",
              "HIPAA Compliant",
              "GDPR Ready",
              "FISMA Moderate",
              "PCI-DSS Level 1",
              "NARA Compliant",
              "FERPA Compliant",
            ].map((cert) => (
              <div
                key={cert}
                className="px-5 py-2.5 bg-[hsl(218,72%,22%)] text-white text-xs font-bold rounded-full"
                data-testid={`cert-${cert.toLowerCase().replace(/[\s-]/g, "-")}`}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security features */}
      <section className="py-20" aria-labelledby="security-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 id="security-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your digitized documents are protected by overlapping security controls spanning
              encryption, access management, physical security, and continuous monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "AES-256 Encryption",
                desc: "Documents encrypted at rest and in transit using AES-256-GCM. Each client's data uses unique encryption keys managed via FIPS 140-2 validated HSMs.",
                features: ["Encryption at rest", "TLS 1.3 in transit", "Customer-managed keys", "Key rotation policy"],
                testId: "feature-encryption",
              },
              {
                icon: Eye,
                title: "Access Control & Audit Logs",
                desc: "Role-based access control (RBAC) with multi-factor authentication. Every document access, download, and share event logged in immutable audit trails.",
                features: ["RBAC permissions", "MFA enforcement", "Immutable audit logs", "Session recording"],
                testId: "feature-access",
              },
              {
                icon: RefreshCw,
                title: "Disaster Recovery & Uptime",
                desc: "Geo-redundant storage across three availability zones with automatic failover. 99.99% uptime SLA backed by real-time replication and 4-hour RTO.",
                features: ["99.99% SLA", "Geo-redundant storage", "Automated backups", "4-hour RTO"],
                testId: "feature-recovery",
              },
              {
                icon: Server,
                title: "Physical Data Center Security",
                desc: "Tier IV data centers with biometric access, 24/7 video surveillance, mantrap entries, and armed security. SSAE 18 SOC 2 audited facilities.",
                features: ["Biometric access", "24/7 surveillance", "Mantrap entry", "SSAE 18 audited"],
                testId: "feature-physical",
              },
              {
                icon: Shield,
                title: "Compliance Monitoring",
                desc: "Automated compliance scans, vulnerability assessments, and penetration testing. Real-time alerting for policy violations, unusual access patterns, and potential threats.",
                features: ["Automated scans", "Pen testing", "SIEM integration", "Incident response SLA"],
                testId: "feature-compliance",
              },
              {
                icon: CheckCircle,
                title: "Document Lifecycle Management",
                desc: "Configurable retention policies with automated disposition workflows. Legal hold capabilities for litigation support. NARA-compliant records scheduling.",
                features: ["Retention policies", "Legal hold", "Auto-disposition", "NARA schedules"],
                testId: "feature-lifecycle",
              },
            ].map((feat) => (
              <article
                key={feat.title}
                className="bg-card border border-card-border rounded-xl p-7"
                data-testid={feat.testId}
              >
                <div className="w-11 h-11 rounded-lg bg-[hsl(218,72%,22%)] flex items-center justify-center mb-5">
                  <feat.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feat.desc}</p>
                <ul className="space-y-1.5">
                  {feat.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-[hsl(213,72%,45%)] flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Data privacy section */}
      <section className="py-16 bg-muted/30" aria-labelledby="privacy-heading">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="privacy-heading" className="text-3xl font-bold text-foreground mb-6">
              Your Data Privacy is Our Priority
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Plan2Scan operates on a strict data isolation model. Your documents are never
              commingled with other clients' data. We sign Business Associate Agreements (BAA)
              for healthcare clients and Data Processing Agreements (DPA) for GDPR compliance.
            </p>
            <div className="space-y-4">
              {[
                "Client data stored in dedicated, isolated partitions",
                "No data used for training AI models",
                "Regular third-party penetration testing",
                "Zero-knowledge architecture available on request",
                "Right-to-erasure workflows for GDPR compliance",
                "Annual compliance reports shared with clients",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[hsl(213,72%,45%)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(218,72%,22%)] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Storage Plan Summary</h3>
            <div className="space-y-4">
              {[
                { plan: "Essentials", storage: "Up to 500 GB", users: "Up to 25 users", support: "Business hours support" },
                { plan: "Professional", storage: "Up to 5 TB", users: "Up to 200 users", support: "Priority 24/7 support" },
                { plan: "Enterprise", storage: "Unlimited", users: "Unlimited users", support: "Dedicated TAM" },
              ].map((p) => (
                <div key={p.plan} className="border border-white/15 rounded-lg p-4">
                  <div className="font-semibold text-white mb-2">{p.plan}</div>
                  <div className="text-white/65 text-xs space-y-1">
                    <div>{p.storage}</div>
                    <div>{p.users}</div>
                    <div>{p.support}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/get-a-quote"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white font-semibold rounded-lg transition-colors"
              data-testid="storage-plan-cta"
            >
              Get Pricing
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
