
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CreditEvaluation from "./pages/features/CreditEvaluation";
import FinancialLiteracy from "./pages/features/FinancialLiteracy";
import Mentorship from "./pages/features/Mentorship";
import MarketLinkages from "./pages/features/MarketLinkages";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // Create a client inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Feature-specific routes */}
                <Route path="/credit-evaluation" element={<CreditEvaluation />} />
                <Route path="/financial-literacy" element={<FinancialLiteracy />} />
                <Route path="/mentorship" element={<Mentorship />} />
                <Route path="/market-linkages" element={<MarketLinkages />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
