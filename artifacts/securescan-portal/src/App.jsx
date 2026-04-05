import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import BulkScanning from "@/pages/BulkScanning";
import SecureStorage from "@/pages/SecureStorage";
import OCR from "@/pages/OCR";
import GetAQuote from "@/pages/GetAQuote";
import Blog from "@/pages/Blog";
import CoverageMap from "@/pages/CoverageMap";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-bold text-[hsl(218,72%,22%)] mb-4">404</h1>
        <p className="text-xl text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(218,72%,22%)] text-white rounded-lg font-semibold hover:bg-[hsl(218,72%,28%)] transition-colors">
          Return to Home
        </a>
      </div>
    </Layout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/services/bulk-scanning" component={() => <Layout><BulkScanning /></Layout>} />
      <Route path="/services/secure-storage" component={() => <Layout><SecureStorage /></Layout>} />
      <Route path="/services/ocr" component={() => <Layout><OCR /></Layout>} />
      <Route path="/get-a-quote" component={() => <Layout><GetAQuote /></Layout>} />
      <Route path="/blog/:slug" component={() => <Layout><Blog /></Layout>} />
      <Route path="/blog" component={() => <Layout><Blog /></Layout>} />
      <Route path="/coverage" component={() => <Layout><CoverageMap /></Layout>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.title = "Plan2Scan | Secure Document Digitization & B2B Scanning Services";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
