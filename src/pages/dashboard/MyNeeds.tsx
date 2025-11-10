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

const MyNeeds = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const needs = [
    {
      id: 1,
      title: "Social Media Marketing Campaign",
      category: "Services",
      budget: "$1,500",
      type: "Hybrid",
      status: "active",
      matches: 15,
      priority: "high",
      description: "3-month comprehensive social media strategy and management",
    },
    {
      id: 2,
      title: "Office Furniture Set",
      category: "Goods",
      budget: "$800",
      type: "Pure Barter",
      status: "active",
      matches: 7,
      priority: "medium",
      description: "Desks, chairs, and filing cabinets for new office",
    },
    {
      id: 3,
      title: "Legal Consultation Services",
      category: "Services",
      budget: "$1,000",
      type: "Barter Credits",
      status: "matched",
      matches: 4,
      priority: "high",
      description: "Business registration and contract review",
    },
    {
      id: 4,
      title: "Delivery Logistics Partner",
      category: "Services",
      budget: "$600/month",
      type: "Hybrid",
      status: "active",
      matches: 9,
      priority: "medium",
      description: "Regular delivery services for farm produce",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success";
      case "matched":
        return "bg-primary";
      case "fulfilled":
        return "bg-muted";
      default:
        return "bg-warning";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive";
      case "medium":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Needs</h1>
          <p className="text-muted-foreground">Track what you're looking to acquire</p>
        </div>
        <Button
          size="lg"
          className="bg-trade-gradient"
          onClick={() => navigate("/dashboard/needs/new")}
        >
          <Plus className="mr-2 h-5 w-5" />
          Create Need
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search your needs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {needs.map((need) => (
          <Card key={need.id} className="shadow-card hover:shadow-card-hover transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{need.title}</h3>
                    <Badge className={getStatusColor(need.status)} variant="secondary">
                      {need.status}
                    </Badge>
                    <Badge className={getPriorityColor(need.priority)} variant="secondary">
                      {need.priority}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{need.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <Badge variant="outline">{need.category}</Badge>
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-semibold text-primary">{need.budget}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{need.type}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-primary font-medium">{need.matches} matches found</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="bg-trade-gradient"
                    onClick={() => navigate(`/dashboard/discover?need=${need.id}`)}
                  >
                    View Matches
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline">
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
                        Edit Need
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyNeeds;
