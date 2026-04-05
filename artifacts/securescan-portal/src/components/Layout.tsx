import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services/bulk-scanning", label: "Bulk Document Scanning" },
      { href: "/services/secure-storage", label: "Secure Data Storage" },
      { href: "/services/ocr", label: "OCR Services" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/coverage", label: "Coverage" },
  { href: "/get-a-quote", label: "Get a Quote" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* SEO skip nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        data-testid="skip-nav"
      >
        Skip to main content
      </a>

      {/* Top bar */}
      <div className="bg-[hsl(218,72%,15%)] text-white/80 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Helping businesses go paperless — securely and efficiently</span>
          <span>
            <a href="mailto:contact@plan2scan.com" className="hover:text-white transition-colors">
              contact@plan2scan.com
            </a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[hsl(218,72%,22%)] text-white shadow-lg sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="link-logo" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <Shield className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Plan<span className="text-[hsl(213,72%,70%)]">2</span>Scan
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    aria-haspopup="true"
                    data-testid="nav-services-toggle"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 opacity-70" aria-hidden="true" />
                  </button>
                  <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-border py-1 min-w-52">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          data-testid={`nav-${child.href.replace(/\//g, "-").slice(1)}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    location === link.href
                      ? "bg-white/15 text-white"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                  data-testid={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/get-a-quote"
              className="ml-3 px-4 py-2 bg-[hsl(213,72%,55%)] hover:bg-[hsl(213,72%,48%)] text-white rounded text-sm font-semibold transition-colors"
              data-testid="nav-cta-quote"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[hsl(218,72%,18%)]">
            <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
              <Link href="/" className="block px-3 py-2 rounded text-white/85 hover:text-white hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <button
                className="flex items-center justify-between w-full px-3 py-2 rounded text-white/85 hover:text-white hover:bg-white/10 text-sm"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/services/bulk-scanning" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                    Bulk Document Scanning
                  </Link>
                  <Link href="/services/secure-storage" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                    Secure Data Storage
                  </Link>
                  <Link href="/services/ocr" className="block px-3 py-2 rounded text-white/70 hover:text-white hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                    OCR Services
                  </Link>
                </div>
              )}
              <Link href="/blog" className="block px-3 py-2 rounded text-white/85 hover:text-white hover:bg-white/10 text-sm" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/get-a-quote" className="block px-3 py-2 rounded bg-[hsl(213,72%,55%)] text-white font-semibold text-sm text-center mt-2" onClick={() => setMobileOpen(false)}>
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(218,72%,15%)] text-white/70 mt-auto" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-[hsl(213,72%,70%)]" aria-hidden="true" />
              <span className="font-bold text-white text-lg">Plan2Scan</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Plan2Scan helps organisations of all sizes move away from paper-based workflows.
              From bulk scanning to secure digital storage, we make document digitisation straightforward.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/bulk-scanning" className="hover:text-white transition-colors">Bulk Document Scanning</Link></li>
              <li><Link href="/services/secure-storage" className="hover:text-white transition-colors">Secure Data Storage</Link></li>
              <li><Link href="/services/ocr" className="hover:text-white transition-colors">OCR Services</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Resources</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <span>&copy; {new Date().getFullYear()} Plan2Scan. All rights reserved.</span>
            <span>Secure document digitization &middot; B2B scanning services &middot; Data protection</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
