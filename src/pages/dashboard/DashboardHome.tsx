import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp, Package, ShoppingBag, Repeat, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Active Offers",
      value: "12",
      change: "+2 this week",
      icon: Package,
      gradient: "bg-trade-gradient",
    },
    {
      title: "Active Needs",
      value: "8",
      change: "+1 this week",
      icon: ShoppingBag,
      gradient: "bg-blue-500",
    },
    {
      title: "Completed Trades",
      value: "24",
      change: "+4 this month",
      icon: Repeat,
      gradient: "bg-success",
    },
    {
      title: "Barter Credits",
      value: "2,450",
      change: "+350 earned",
      icon: Coins,
      gradient: "bg-gold-gradient",
    },
  ];

  const recentMatches = [
    {
      id: 1,
      title: "Web Development Services",
      user: "Sarah Johnson",
      offering: "Social Media Marketing",
      matchScore: 95,
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      title: "Farm Fresh Vegetables",
      user: "Green Farms Ltd",
      offering: "Logistics Services",
      matchScore: 88,
      location: "Ibadan, Nigeria",
    },
    {
      id: 3,
      title: "Graphic Design Package",
      user: "Creative Studio",
      offering: "Office Furniture",
      matchScore: 82,
      location: "Abuja, Nigeria",
    },
  ];

  const activeTrades = [
    {
      id: 1,
      title: "Legal Services ↔ Catering Package",
      status: "negotiating",
      timeLeft: "2 days",
      value: "$800",
    },
    {
      id: 2,
      title: "Marketing Campaign ↔ IT Support",
      status: "accepted",
      timeLeft: "5 days",
      value: "$1,200",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
        <p className="text-muted-foreground">Here's what's happening with your trades today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.gradient}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-success" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recommended Matches */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recommended Matches</span>
              <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard/discover")}>
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-start justify-between p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all cursor-pointer"
                onClick={() => navigate(`/dashboard/discover/${match.id}`)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{match.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {match.matchScore}% Match
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{match.user}</p>
                  <p className="text-sm">
                    Offering: <span className="text-primary font-medium">{match.offering}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{match.location}</p>
                </div>
                <Button size="sm" className="bg-trade-gradient">
                  Propose Trade
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Trades */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Active Trades</span>
              <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard/trades")}>
                View All
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeTrades.map((trade) => (
              <div
                key={trade.id}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all cursor-pointer"
                onClick={() => navigate(`/dashboard/trades/${trade.id}`)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold flex-1">{trade.title}</h4>
                  <Badge
                    variant={trade.status === "accepted" ? "default" : "secondary"}
                    className={trade.status === "accepted" ? "bg-success" : ""}
                  >
                    {trade.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Time Left: {trade.timeLeft}</span>
                  <span className="font-semibold text-primary">{trade.value}</span>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full" onClick={() => navigate("/dashboard/discover")}>
              Start New Trade
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* eBarter of the Week */}
      <Card className="shadow-card bg-gradient-to-r from-primary/10 via-success/10 to-accent/10 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge className="bg-gold-gradient">Featured</Badge>
            <CardTitle>eBarter of the Week</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              Lagos Bakery ↔ Creative Design Studio
            </h3>
            <p className="text-muted-foreground">
              A successful trade where a local bakery exchanged 3 months of daily bread supplies 
              for a complete brand identity redesign. Both parties saved cash while getting exactly 
              what they needed to grow their businesses.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary">$2,400 Value</Badge>
              <Badge variant="secondary">Pure Barter</Badge>
              <Badge variant="secondary">Lagos, Nigeria</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
