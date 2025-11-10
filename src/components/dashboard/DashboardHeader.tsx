import { Bell, Plus, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center gap-4 px-4 md:px-6">
        <SidebarTrigger />
        
        <div className="flex-1" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="lg" className="bg-trade-gradient hover:opacity-90">
              <Plus className="mr-2 h-5 w-5" />
              Create Listing
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => navigate("/dashboard/offers/new")}>
              <Package className="mr-2 h-4 w-4" />
              Create Offer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/dashboard/needs/new")}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Create Need
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/dashboard/auctions/new")}>
              <Gavel className="mr-2 h-4 w-4" />
              List for Auction
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-2">
              <h3 className="font-semibold mb-2">Notifications</h3>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/dashboard/trades")}>
              <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Trade Completed!</p>
                <p className="text-xs text-muted-foreground">Your trade with Mike Photo Studio was successful</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/dashboard/messages")}>
              <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">New Message</p>
                <p className="text-xs text-muted-foreground">TechGrowth Agency sent you a proposal</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/dashboard/auctions")}>
              <TrendingUp className="mr-2 h-4 w-4 text-accent" />
              <div className="flex-1">
                <p className="text-sm font-medium">Outbid Alert</p>
                <p className="text-xs text-muted-foreground">Someone placed a higher bid on Premium MacBook</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-primary">
              View All Notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

const Package = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Gavel = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
  </svg>
);
