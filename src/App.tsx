import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Comparison from "./pages/Comparison";
import CryptoComparison from "./pages/CryptoComparison";
import FXComparison from "./pages/FXComparison";
import GuideDetail from "./pages/GuideDetail";
import Tools from "./pages/Tools";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import Basics from "./pages/Basics";
import Stocks from "./pages/Stocks";
import Nisa from "./pages/Nisa";
import InvestmentTrust from "./pages/InvestmentTrust";
import Crypto from "./pages/Crypto";
import ToolsDetail from "./pages/ToolsDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/nisa" element={<Nisa />} />
          <Route path="/investment-trust" element={<InvestmentTrust />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/tools-detail" element={<ToolsDetail />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/crypto-comparison" element={<CryptoComparison />} />
          <Route path="/fx-comparison" element={<FXComparison />} />
          <Route path="/guide/:id" element={<GuideDetail />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;