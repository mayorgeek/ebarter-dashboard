import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyOffers from "./pages/dashboard/MyOffers";
import MyNeeds from "./pages/dashboard/MyNeeds";
import Discover from "./pages/dashboard/Discover";
import MyTrades from "./pages/dashboard/MyTrades";
import Messages from "./pages/dashboard/Messages";
import Auctions from "./pages/dashboard/Auctions";
import Communities from "./pages/dashboard/Communities";
import BarterCredits from "./pages/dashboard/BarterCredits";
import Referrals from "./pages/dashboard/Referrals";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import CreateOffer from "./pages/dashboard/CreateOffer";
import CreateNeed from "./pages/dashboard/CreateNeed";
import CreateAuction from "./pages/dashboard/CreateAuction";
import ProposeTrade from "./pages/dashboard/ProposeTrade";
import OfferDetails from "./pages/dashboard/OfferDetails";
import EditOffer from "./pages/dashboard/EditOffer";
import NeedMatches from "./pages/dashboard/NeedMatches";
import PlaceBid from "./pages/dashboard/PlaceBid";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="offers" element={<MyOffers />} />
            <Route path="offers/new" element={<CreateOffer />} />
            <Route path="offers/:id" element={<OfferDetails />} />
            <Route path="offers/:id/edit" element={<EditOffer />} />
            <Route path="needs" element={<MyNeeds />} />
            <Route path="needs/new" element={<CreateNeed />} />
            <Route path="needs/:id/matches" element={<NeedMatches />} />
            <Route path="discover" element={<Discover />} />
            <Route path="trades" element={<MyTrades />} />
            <Route path="trades/propose/:id" element={<ProposeTrade />} />
            <Route path="messages" element={<Messages />} />
            <Route path="auctions" element={<Auctions />} />
            <Route path="auctions/new" element={<CreateAuction />} />
            <Route path="auctions/:id/bid" element={<PlaceBid />} />
            <Route path="communities" element={<Communities />} />
            <Route path="credits" element={<BarterCredits />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
