import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Comparison from "./pages/Comparison";
import CryptoComparison from "./pages/CryptoComparison";
import FXComparison from "./pages/FXComparison";
import GuideDetail from "./pages/GuideDetail";
import Tools from "./pages/Tools";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import Basics from "./pages/Basics";
import Stocks from "./pages/Stocks";
import Nisa from "./pages/Nisa";
import InvestmentTrust from "./pages/InvestmentTrust";
import Crypto from "./pages/Crypto";
import ToolsDetail from "./pages/ToolsDetail";
// 新しいツールページのインポート
import CompoundInterest from "./pages/tools/CompoundInterest";
import SavingCalculator from "./pages/tools/SavingCalculator";
import RiskAssessment from "./pages/tools/RiskAssessment";
import StockReturn from "./pages/tools/StockReturn";
import FundReturn from "./pages/tools/FundReturn";
import CryptoReturn from "./pages/tools/CryptoReturn";

const queryClient = new QueryClient();

// ScrollToTopコンポーネントを追加
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          {/* 新しいツールページのルート */}
          <Route path="/tools/compound-interest" element={<CompoundInterest />} />
          <Route path="/tools/saving-calculator" element={<SavingCalculator />} />
          <Route path="/tools/risk-assessment" element={<RiskAssessment />} />
          <Route path="/tools/stock-return" element={<StockReturn />} />
          <Route path="/tools/fund-return" element={<FundReturn />} />
          <Route path="/tools/crypto-return" element={<CryptoReturn />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;