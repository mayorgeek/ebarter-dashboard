import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProposeTrade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedOffer, setSelectedOffer] = useState("");
  const [hybridEnabled, setHybridEnabled] = useState(false);
  const [cashAmount, setCashAmount] = useState("");
  const [message, setMessage] = useState("");

  const targetListing = {
    title: "Professional Photography Services",
    value: "$500",
    user: "Mike Photo Studio",
  };

  const myOffers = [
    { id: "1", title: "Web Development Services", value: "$600" },
    { id: "2", title: "Graphic Design Package", value: "$400" },
    { id: "3", title: "SEO Services", value: "$500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Trade Proposal Sent!",
      description: "The other party will be notified of your proposal.",
    });
    navigate("/dashboard/trades");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Propose Trade</h1>
          <p className="text-muted-foreground">Make an offer for this listing</p>
        </div>
      </div>

      <Card className="shadow-card bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg">You're proposing a trade for:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">{targetListing.title}</h3>
              <p className="text-sm text-muted-foreground">by {targetListing.user}</p>
            </div>
            <Badge className="text-lg px-4 py-2">{targetListing.value}</Badge>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Your Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="offer">Select Your Offer *</Label>
              <Select value={selectedOffer} onValueChange={setSelectedOffer}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose from your offers" />
                </SelectTrigger>
                <SelectContent>
                  {myOffers.map((offer) => (
                    <SelectItem key={offer.id} value={offer.id}>
                      {offer.title} - {offer.value}
                    </SelectItem>
                  ))}
                  <SelectItem value="new">+ Create New Offer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border rounded-lg p-4 space-y-4 bg-accent/5">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="hybrid">Add Cash Payment</Label>
                  <p className="text-sm text-muted-foreground">Balance the trade with cash</p>
                </div>
                <Switch
                  id="hybrid"
                  checked={hybridEnabled}
                  onCheckedChange={setHybridEnabled}
                />
              </div>

              {hybridEnabled && (
                <div className="space-y-2">
                  <Label htmlFor="cash">Cash Amount (USD)</Label>
                  <Input
                    id="cash"
                    type="number"
                    placeholder="100"
                    value={cashAmount}
                    onChange={(e) => setCashAmount(e.target.value)}
                  />
                </div>
              )}

              {selectedOffer && (
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-green-700 dark:text-green-400 font-medium">Fair Trade Match</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message to Trader *</Label>
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain why this trade works for both parties..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate(-1)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-trade-gradient">
                Send Proposal
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ProposeTrade;
