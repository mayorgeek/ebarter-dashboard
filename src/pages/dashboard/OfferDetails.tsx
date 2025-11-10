import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MapPin, Star, Calendar, Edit, Trash2 } from "lucide-react";

const OfferDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const offer = {
    id,
    title: "Professional Photography Services",
    description: "Full event coverage including pre-event consultation, on-site photography (up to 8 hours), post-processing, and delivery of high-resolution images. Specializing in corporate events, weddings, and product photography.",
    category: "Services",
    value: "$500",
    tradeType: "Hybrid",
    location: "Lagos, Nigeria",
    createdAt: "2024-01-15",
    user: {
      name: "Mike Photo Studio",
      avatar: "",
      rating: 4.8,
      trades: 32,
    },
    images: [
      "https://images.unsplash.com/photo-1554080353-a576cf803bda",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{offer.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span>{offer.location}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(`/dashboard/offers/${id}/edit`)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card overflow-hidden">
            <div
              className="h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${offer.images[0]})` }}
            />
            <CardContent className="pt-6">
              <div className="flex gap-3 mb-4">
                <Badge variant="outline">{offer.category}</Badge>
                <Badge variant="outline">{offer.tradeType}</Badge>
              </div>
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Trade Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Value</p>
                <p className="text-3xl font-bold text-primary">{offer.value}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Trade Type</p>
                <p className="font-medium">{offer.tradeType}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Posted</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(offer.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Trader Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={offer.user.avatar} />
                  <AvatarFallback>{offer.user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{offer.user.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{offer.user.rating}</span>
                    <span>•</span>
                    <span>{offer.user.trades} trades</span>
                  </div>
                </div>
              </div>
              <Button className="w-full" onClick={() => navigate(`/dashboard/messages`)}>
                Contact Trader
              </Button>
            </CardContent>
          </Card>

          <Button
            className="w-full bg-trade-gradient"
            size="lg"
            onClick={() => navigate(`/dashboard/trades/propose/${id}`)}
          >
            Propose Trade
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
