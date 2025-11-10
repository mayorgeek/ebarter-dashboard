import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Gift, Users, CheckCircle, QrCode } from "lucide-react";
import { toast } from "sonner";

const Referrals = () => {
  const referralCode = "EBARTER-2024-JOHN123";
  const referralLink = `https://ebarter.com/signup?ref=${referralCode}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const referrals = [
    {
      id: 1,
      name: "Sarah Johnson",
      status: "active",
      joinedDate: "2 days ago",
      trades: 3,
      creditsEarned: 50,
    },
    {
      id: 2,
      name: "Green Valley Farms",
      status: "active",
      joinedDate: "5 days ago",
      trades: 5,
      creditsEarned: 50,
    },
    {
      id: 3,
      name: "Tech Solutions Pro",
      status: "pending",
      joinedDate: "1 week ago",
      trades: 0,
      creditsEarned: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Referral Program</h1>
        <p className="text-muted-foreground">Invite friends and earn 50 eBarter credits per referral</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Referrals
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">
              3 active this month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Credits Earned
            </CardTitle>
            <Gift className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">
              From referral bonuses
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Success Rate
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">70%</div>
            <p className="text-xs text-muted-foreground">
              7 out of 10 completed trades
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Card */}
      <Card className="shadow-card bg-gradient-to-br from-primary/10 via-success/10 to-accent/10 border-2 border-primary/20">
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              Share your unique referral link and earn 50 eBarter credits for each friend who signs up
              and completes their first trade!
            </p>
            <div className="flex gap-2">
              <Input value={referralLink} readOnly className="font-mono text-sm" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(referralLink)}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button className="bg-trade-gradient">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Or share your referral code:</p>
            <div className="flex gap-2">
              <Input value={referralCode} readOnly className="font-mono font-bold text-lg" />
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(referralCode)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            <QrCode className="mr-2 h-4 w-4" />
            Generate QR Code
          </Button>
        </CardContent>
      </Card>

      {/* Referral List */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>My Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {referrals.map((referral) => (
              <div
                key={referral.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{referral.name}</h4>
                    <Badge
                      variant={referral.status === "active" ? "default" : "secondary"}
                      className={referral.status === "active" ? "bg-success" : ""}
                    >
                      {referral.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Joined {referral.joinedDate} • {referral.trades} trades completed
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-accent">+{referral.creditsEarned}</p>
                  <p className="text-xs text-muted-foreground">Credits</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="shadow-card bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">How the Referral Program Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <h4 className="font-medium">Share Your Link</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Share your unique referral link with friends, family, or on social media
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <h4 className="font-medium">They Sign Up</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Your friend creates an account using your referral link or code
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <h4 className="font-medium">Earn Credits</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Get 50 credits when they complete their first successful trade
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Referrals;
