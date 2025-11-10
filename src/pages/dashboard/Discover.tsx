import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    tradeType: "all",
    location: "all",
    sortBy: "match",
  });

  const listings = [
    {
      id: 1,
      type: "offer",
      title: "Professional Photography Services",
      user: "Mike Photo Studio",
      rating: 4.8,
      trades: 32,
      category: "Services",
      value: "$500",
      tradeType: "Hybrid",
      location: "Lagos, Nigeria",
      description: "Event photography, portrait sessions, and photo editing services",
      matchScore: 92,
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
    },
    {
      id: 2,
      type: "need",
      title: "Website Development",
      user: "Green Valley Farms",
      rating: 4.6,
      trades: 18,
      category: "Services",
      value: "$2,000",
      tradeType: "Pure Barter",
      location: "Ibadan, Nigeria",
      description: "E-commerce website for farm produce sales",
      matchScore: 88,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 3,
      type: "offer",
      title: "Premium Office Furniture",
      user: "Corporate Solutions Ltd",
      rating: 4.9,
      trades: 45,
      category: "Goods",
      value: "$3,000",
      tradeType: "Hybrid",
      location: "Abuja, Nigeria",
      description: "Gently used executive desks, ergonomic chairs, and storage cabinets",
      matchScore: 85,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    },
    {
      id: 4,
      type: "offer",
      title: "Digital Marketing Campaign",
      user: "TechGrowth Agency",
      rating: 4.7,
      trades: 28,
      category: "Services",
      value: "$1,500",
      tradeType: "Barter Credits",
      location: "Port Harcourt, Nigeria",
      description: "SEO, social media, and content marketing for 3 months",
      matchScore: 90,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
    },
  ];

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category === "all" || listing.category.toLowerCase() === filters.category;
    const matchesTradeType = filters.tradeType === "all" || listing.tradeType.toLowerCase().includes(filters.tradeType);
    const matchesLocation = filters.location === "all" || listing.location.toLowerCase().includes(filters.location);
    
    return matchesSearch && matchesCategory && matchesTradeType && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Discover Trades</h1>
        <p className="text-muted-foreground">Find the perfect match for your needs</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search offers and needs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {showFilters && (
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label>Category</Label>
                <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="goods">Goods</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="skills">Skills</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Trade Type</Label>
                <Select value={filters.tradeType} onValueChange={(value) => setFilters({ ...filters, tradeType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="pure">Pure Barter</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="credits">Barter Credits</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Location</Label>
                <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Location</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="portharcourt">Port Harcourt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Sort By</Label>
                <Select value={filters.sortBy} onValueChange={(value) => setFilters({ ...filters, sortBy: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Best Match</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="value">Highest Value</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Listings</TabsTrigger>
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="needs">Needs</TabsTrigger>
          <TabsTrigger value="matches">For You</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {filteredListings.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No listings found matching your criteria.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredListings.map((listing) => (
              <Card key={listing.id} className="shadow-card hover:shadow-card-hover transition-all overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${listing.image})` }}
                >
                  <div className="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-4">
                    <div className="flex justify-between">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {listing.type === "offer" ? "Offering" : "Looking For"}
                      </Badge>
                      <Badge className="bg-primary">
                        {listing.matchScore}% Match
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="line-clamp-1 mb-2">{listing.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{listing.user}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-accent text-accent" />
                          <span>{listing.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{listing.trades} trades</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {listing.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <Badge variant="outline">{listing.category}</Badge>
                    <Badge variant="outline">{listing.tradeType}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {listing.location}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{listing.value}</span>
                    <Button 
                      className="bg-trade-gradient"
                      onClick={() => navigate(`/dashboard/trades/propose/${listing.id}`)}
                    >
                      Propose Trade
                    </Button>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Discover;
