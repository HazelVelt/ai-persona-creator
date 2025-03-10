
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";
import { CharacterProvider } from "@/contexts/CharacterContext";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Determine if running in Electron
const isElectron = window.navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;

const App = () => {
  // Use HashRouter for Electron to ensure file:// protocol works properly
  const Router = isElectron ? HashRouter : BrowserRouter;
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CharacterProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner position="top-center" richColors duration={2000} />
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/chat/:id" element={<ChatPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </TooltipProvider>
        </CharacterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
