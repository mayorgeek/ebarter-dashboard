import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin } from "lucide-react";

const NeedMatches = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const need = {
    title: "Website Development",
    value: "$2,000",
  };

  const matches = [
    {
      id: "1",
      title: "Full-Stack Web Development",
      user: "TechSolutions Inc",
      rating: 4.9,
      trades: 45,
      category: "Services",
      value: "$2,100",
      tradeType: "Hybrid",
      location: "Lagos, Nigeria",
      description: "Professional website development with React and Node.js",
      matchScore: 95,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: "2",
      title: "E-commerce Website Package",
      user: "WebCraft Studio",
      rating: 4.7,
      trades: 28,
      category: "Services",
      value: "$1,900",
      tradeType: "Pure Barter",
      location: "Abuja, Nigeria",
      description: "Complete e-commerce solution with payment integration",
      matchScore: 88,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: "3",
      title: "Custom Web Development",
      user: "Digital Innovators",
      rating: 4.8,
      trades: 35,
      category: "Services",
      value: "$2,000",
      tradeType: "Barter Credits",
      location: "Port Harcourt, Nigeria",
      description: "Tailored web solutions for businesses",
      matchScore: 92,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Matches for Your Need</h1>
          <p className="text-muted-foreground">{need.title} - {need.value}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {matches.map((match) => (
          <Card key={match.id} className="shadow-card hover:shadow-card-hover transition-all overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${match.image})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <Badge className="bg-primary">
                    {match.matchScore}% Match
                  </Badge>
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="line-clamp-1 mb-2">{match.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{match.user}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span>{match.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{match.trades} trades</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {match.description}
              </p>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Badge variant="outline">{match.category}</Badge>
                <Badge variant="outline">{match.tradeType}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {match.location}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{match.value}</span>
                <Button 
                  className="bg-trade-gradient"
                  onClick={() => navigate(`/dashboard/trades/propose/${match.id}`)}
                >
                  Propose Trade
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NeedMatches;
