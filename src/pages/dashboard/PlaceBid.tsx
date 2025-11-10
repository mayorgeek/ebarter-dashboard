import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PlaceBid = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");

  const auction = {
    title: "Premium MacBook Pro 16-inch",
    currentBid: "$1,200",
    minimumBid: "$1,250",
    timeLeft: "2h 34m",
    bids: 12,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bid Placed!",
      description: `Your bid of $${bidAmount} has been submitted.`,
    });
    navigate("/dashboard/auctions");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Place Your Bid</h1>
          <p className="text-muted-foreground">Enter your bidding amount</p>
        </div>
      </div>

      <Card className="shadow-card overflow-hidden">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${auction.image})` }}
        />
        <CardHeader>
          <CardTitle className="text-2xl">{auction.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{auction.timeLeft} left</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>{auction.bids} bids</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Current Auction Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Bid</p>
              <p className="text-2xl font-bold text-primary">{auction.currentBid}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Minimum Next Bid</p>
              <p className="text-2xl font-bold">{auction.minimumBid}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Your Bid</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bid">Bid Amount (USD) *</Label>
              <Input
                id="bid"
                type="number"
                placeholder="1250"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                required
                min={1250}
              />
              <p className="text-sm text-muted-foreground">
                Minimum bid: {auction.minimumBid}
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Bidding Terms</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• If you win, you must pay within 2 hours</li>
                <li>• Item pickup/delivery within 24 hours after payment</li>
                <li>• Bids are binding and cannot be cancelled</li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate(-1)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-trade-gradient">
                Place Bid ${bidAmount || "0"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default PlaceBid;
