import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle, MessageSquare, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyTrades = () => {
  const navigate = useNavigate();

  const activeTrades = [
    {
      id: 1,
      title: "Web Development ↔ Marketing Services",
      partner: "Digital Growth Agency",
      status: "negotiating",
      myOffer: "Full-stack web application",
      theirOffer: "6-month marketing campaign",
      value: "$2,500",
      timeLeft: "2 days 5 hours",
      messages: 8,
    },
    {
      id: 2,
      title: "Farm Produce ↔ Logistics Services",
      partner: "QuickMove Logistics",
      status: "accepted",
      myOffer: "Weekly produce delivery",
      theirOffer: "Transportation services",
      value: "$1,200",
      timeLeft: "5 days 12 hours",
      messages: 3,
    },
  ];

  const completedTrades = [
    {
      id: 3,
      title: "Graphic Design ↔ Legal Services",
      partner: "LawPro Consultants",
      completedDate: "2 days ago",
      myOffer: "Brand identity package",
      theirOffer: "Business registration",
      value: "$800",
      rating: 5,
    },
    {
      id: 4,
      title: "Office Furniture ↔ IT Support",
      partner: "TechSupport Pro",
      completedDate: "1 week ago",
      myOffer: "Executive desk set",
      theirOffer: "6-month IT support",
      value: "$1,500",
      rating: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "negotiating":
        return "bg-warning";
      case "accepted":
        return "bg-primary";
      case "in-progress":
        return "bg-blue-500";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Trades</h1>
        <p className="text-muted-foreground">Track and manage all your barter transactions</p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6 space-y-4">
          {activeTrades.map((trade) => (
            <Card key={trade.id} className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{trade.title}</h3>
                      <Badge className={getStatusColor(trade.status)} variant="secondary">
                        {trade.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      Trading with <span className="font-medium text-foreground">{trade.partner}</span>
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">You're Offering</p>
                        <p className="font-medium">{trade.myOffer}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">You're Receiving</p>
                        <p className="font-medium">{trade.theirOffer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {trade.timeLeft} left
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="font-semibold text-primary">{trade.value}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {trade.messages} messages
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button 
                      className="bg-trade-gradient"
                      onClick={() => navigate(`/dashboard/trades/${trade.id}`)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Deal Room
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate(`/dashboard/messages?trade=${trade.id}`)}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="mt-6 space-y-4">
          {completedTrades.map((trade) => (
            <Card key={trade.id} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <h3 className="text-xl font-semibold">{trade.title}</h3>
                      <Badge className="bg-success" variant="secondary">
                        Completed
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      Traded with <span className="font-medium text-foreground">{trade.partner}</span> • {trade.completedDate}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">You Offered</p>
                        <p className="font-medium">{trade.myOffer}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">You Received</p>
                        <p className="font-medium">{trade.theirOffer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-primary">{trade.value}</span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1">
                        {[...Array(trade.rating)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 fill-accent text-accent" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-muted-foreground">Rating</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="cancelled" className="mt-6">
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <XCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Cancelled Trades</h3>
              <p className="text-muted-foreground text-center">
                You haven't cancelled any trades yet. Keep building successful trade relationships!
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyTrades;
