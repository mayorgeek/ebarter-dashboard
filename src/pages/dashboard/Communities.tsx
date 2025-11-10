import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, MapPin, TrendingUp, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Communities = () => {
  const navigate = useNavigate();

  const communities = [
    {
      id: 1,
      name: "Tech Innovators Hub",
      description: "Connect with developers, designers, and tech entrepreneurs for skill and service exchanges",
      members: 1247,
      activeTrades: 89,
      location: "Lagos, Nigeria",
      category: "Technology",
      trending: true,
      joined: true,
    },
    {
      id: 2,
      name: "Agricultural Trade Circle",
      description: "Farmers, logistics providers, and food processors trading produce and services",
      members: 856,
      activeTrades: 134,
      location: "Nationwide",
      category: "Agriculture",
      trending: true,
      joined: false,
    },
    {
      id: 3,
      name: "Creative Artisans Network",
      description: "Artists, designers, and craftspeople exchanging creative services and artwork",
      members: 623,
      activeTrades: 56,
      location: "Abuja, Nigeria",
      category: "Arts & Crafts",
      trending: false,
      joined: true,
    },
    {
      id: 4,
      name: "Corporate Value Exchange",
      description: "B2B trading community for corporate organizations and enterprises",
      members: 284,
      activeTrades: 42,
      location: "Lagos, Nigeria",
      category: "Business",
      trending: false,
      joined: false,
    },
    {
      id: 5,
      name: "Professional Services Alliance",
      description: "Lawyers, accountants, consultants, and other professionals trading expertise",
      members: 445,
      activeTrades: 67,
      location: "Port Harcourt, Nigeria",
      category: "Services",
      trending: false,
      joined: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Communities</h1>
          <p className="text-muted-foreground">Join trade circles based on your interests and location</p>
        </div>
        <Button size="lg" variant="outline">
          <Plus className="mr-2 h-5 w-5" />
          Create Community
        </Button>
      </div>

      {/* Featured Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Communities Joined
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,870</div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
          </CardContent>
        </Card>
      </div>

      {/* Communities List */}
      <div className="grid gap-6">
        {communities.map((community) => (
          <Card key={community.id} className="shadow-card hover:shadow-card-hover transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-trade-gradient text-white text-xl">
                    {community.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold">{community.name}</h3>
                        {community.trending && (
                          <Badge className="bg-destructive flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Trending
                          </Badge>
                        )}
                        {community.joined && (
                          <Badge className="bg-success">Joined</Badge>
                        )}
                      </div>
                      <Badge variant="outline">{community.category}</Badge>
                    </div>
                    {community.joined ? (
                      <Button variant="outline">View Community</Button>
                    ) : (
                      <Button className="bg-trade-gradient">Join Community</Button>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3">{community.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {community.members.toLocaleString()} members
                    </span>
                    <span>•</span>
                    <span>{community.activeTrades} active trades</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {community.location}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Communities;
