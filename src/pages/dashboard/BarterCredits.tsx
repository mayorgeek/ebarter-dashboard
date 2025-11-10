import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight, Download } from "lucide-react";

const BarterCredits = () => {
  const transactions = [
    {
      id: 1,
      type: "earned",
      amount: 150,
      description: "Trade completed: Web Development ↔ Marketing",
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "spent",
      amount: 50,
      description: "Balance payment for Office Furniture trade",
      date: "1 day ago",
    },
    {
      id: 3,
      type: "earned",
      amount: 200,
      description: "Trade completed: Graphic Design ↔ Legal Services",
      date: "3 days ago",
    },
    {
      id: 4,
      type: "earned",
      amount: 100,
      description: "Referral bonus from new user signup",
      date: "5 days ago",
    },
    {
      id: 5,
      type: "spent",
      amount: 75,
      description: "Balance payment for Photography Services",
      date: "1 week ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Barter Credits</h1>
        <p className="text-muted-foreground">Manage your eBarter credits and transaction history</p>
      </div>

      {/* Balance Card */}
      <Card className="shadow-card bg-gradient-to-br from-primary/10 via-success/10 to-accent/10 border-2 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Available Balance</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold bg-trade-gradient bg-clip-text text-transparent">
                  2,450
                </span>
                <span className="text-2xl font-semibold text-muted-foreground">Credits</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge className="bg-success flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +350 this month
                </Badge>
                <span className="text-muted-foreground">≈ $2,450 USD</span>
              </div>
            </div>
            <div className="p-4 rounded-full bg-gold-gradient">
              <Coins className="h-8 w-8 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Earned
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,200</div>
            <p className="text-xs text-muted-foreground">
              From 24 completed trades
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
            <ArrowDownRight className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">750</div>
            <p className="text-xs text-muted-foreground">
              On balance payments
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Referral Earnings
            </CardTitle>
            <Coins className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">
              From 10 referrals
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Transaction History</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.type === "earned" ? "bg-success/10" : "bg-warning/10"
                    }`}
                  >
                    {transaction.type === "earned" ? (
                      <ArrowUpRight className="h-5 w-5 text-success" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-warning" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.type === "earned" ? "text-success" : "text-warning"
                    }`}
                  >
                    {transaction.type === "earned" ? "+" : "-"}
                    {transaction.amount}
                  </p>
                  <p className="text-sm text-muted-foreground">Credits</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="shadow-card bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">About eBarter Credits</h3>
          <p className="text-sm text-muted-foreground mb-4">
            eBarter Credits are earned through successful trades and can be used to balance trade values
            or pay for services on the platform. 1 Credit = $1 USD equivalent.
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="font-medium mb-1">How to Earn Credits:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Complete barter trades</li>
                <li>• Refer new users (50 credits per referral)</li>
                <li>• Participate in community activities</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">How to Use Credits:</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Balance trade value differences</li>
                <li>• Pay for premium listings</li>
                <li>• Use in hybrid settlements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarterCredits;
