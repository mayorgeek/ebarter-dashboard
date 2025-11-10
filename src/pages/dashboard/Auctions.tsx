import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Clock, TrendingUp, Gavel } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auctions = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const activeAuctions = [
    {
      id: 1,
      title: "Premium MacBook Pro 2021",
      currentBid: "$2,400",
      bids: 15,
      timeLeft: "2 days 5 hours",
      startingBid: "$1,800",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      status: "active",
    },
    {
      id: 2,
      title: "Executive Office Furniture Set",
      currentBid: "$1,200",
      bids: 8,
      timeLeft: "1 day 12 hours",
      startingBid: "$800",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      status: "active",
    },
    {
      id: 3,
      title: "Professional Camera Equipment",
      currentBid: "$3,500",
      bids: 22,
      timeLeft: "18 hours",
      startingBid: "$2,500",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
      status: "hot",
    },
  ];

  const myAuctions = [
    {
      id: 4,
      title: "Graphic Design Software Bundle",
      currentBid: "$450",
      bids: 6,
      timeLeft: "3 days",
      status: "active",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Auctions</h1>
          <p className="text-muted-foreground">Bid on items or list your own for auction</p>
        </div>
        <Button
          size="lg"
          className="bg-trade-gradient"
          onClick={() => navigate("/dashboard/auctions/new")}
        >
          <Plus className="mr-2 h-5 w-5" />
          Create Auction
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search auctions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList>
          <TabsTrigger value="browse">Browse Auctions</TabsTrigger>
          <TabsTrigger value="my-auctions">My Auctions</TabsTrigger>
          <TabsTrigger value="my-bids">My Bids</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeAuctions.map((auction) => (
              <Card key={auction.id} className="shadow-card hover:shadow-card-hover transition-all overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${auction.image})` }}
                >
                  <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <Badge
                      className={auction.status === "hot" ? "bg-destructive" : "bg-success"}
                      variant="secondary"
                    >
                      {auction.status === "hot" ? "Hot Auction" : "Active"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{auction.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{auction.timeLeft} left</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Bid</span>
                      <span className="text-xl font-bold text-primary">{auction.currentBid}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Starting Bid: {auction.startingBid}</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {auction.bids} bids
                      </span>
                    </div>
                    <Button className="w-full bg-trade-gradient">
                      <Gavel className="mr-2 h-4 w-4" />
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-auctions" className="mt-6">
          <div className="grid gap-4">
            {myAuctions.map((auction) => (
              <Card key={auction.id} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{auction.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary">{auction.status}</Badge>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {auction.timeLeft} left
                        </span>
                        <span className="text-muted-foreground">{auction.bids} bids</span>
                        <span className="font-semibold text-primary">{auction.currentBid}</span>
                      </div>
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="my-bids" className="mt-6">
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Gavel className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Active Bids</h3>
              <p className="text-muted-foreground text-center mb-4">
                You haven't placed any bids yet. Start bidding on auctions to see them here!
              </p>
              <Button className="bg-trade-gradient">Browse Auctions</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auctions;
