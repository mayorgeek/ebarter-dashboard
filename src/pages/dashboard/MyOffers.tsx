import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, MoreVertical, Edit, Trash, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MyOffers = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const offers = [
    {
      id: 1,
      title: "Professional Web Development Services",
      category: "Services",
      value: "$2,000",
      type: "Hybrid",
      status: "active",
      views: 45,
      matches: 8,
      description: "Full-stack web development with React and Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Fresh Organic Farm Produce",
      category: "Goods",
      value: "$500/month",
      type: "Pure Barter",
      status: "active",
      views: 32,
      matches: 12,
      description: "Weekly delivery of fresh vegetables and fruits",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9",
    },
    {
      id: 3,
      title: "Graphic Design Package",
      category: "Services",
      value: "$800",
      type: "Barter Credits",
      status: "paused",
      views: 18,
      matches: 3,
      description: "Logo design, branding, and marketing materials",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success";
      case "paused":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Offers</h1>
          <p className="text-muted-foreground">Manage what you're offering to trade</p>
        </div>
        <Button
          size="lg"
          className="bg-trade-gradient"
          onClick={() => navigate("/dashboard/offers/new")}
        >
          <Plus className="mr-2 h-5 w-5" />
          Create Offer
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your offers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Card key={offer.id} className="shadow-card hover:shadow-card-hover transition-all overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.image})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className={getStatusColor(offer.status)} variant="secondary">
                      {offer.status}
                    </Badge>
                    <Badge variant="secondary" className="ml-2">
                      {offer.type}
                    </Badge>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Offer
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{offer.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">{offer.category}</Badge>
                <span className="font-semibold text-primary">{offer.value}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                {offer.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{offer.views} views</span>
                <span className="text-primary font-medium">{offer.matches} matches</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyOffers;
