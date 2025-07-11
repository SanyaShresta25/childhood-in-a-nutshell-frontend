import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiences from "./pages/Experiences";
import Food from "./pages/Food";
import Games from "./pages/Games";
import Index from "./pages/Index";
import Music from "./pages/Music";
import NotFound from "./pages/NotFound";
import School from "./pages/School";
import './index.css';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food" element={<Food />} />
          <Route path="/music" element={<Music />} />
          <Route path="/games" element={<Games />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/school" element={<School />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
