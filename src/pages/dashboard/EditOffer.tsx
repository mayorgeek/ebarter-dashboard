import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EditOffer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "Professional Photography Services",
    description: "Event photography, portrait sessions, and photo editing services",
    category: "services",
    value: "500",
    tradeType: "hybrid",
    location: "Lagos, Nigeria",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offer Updated!",
      description: "Your changes have been saved successfully.",
    });
    navigate(`/dashboard/offers/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Offer</h1>
          <p className="text-muted-foreground">Update your listing details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Offer Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="goods">Goods</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="skills">Skills/Expertise</SelectItem>
                  <SelectItem value="agriculture">Agricultural Produce</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="value">Estimated Value (USD) *</Label>
              <Input
                id="value"
                type="number"
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Trade Type Preference *</Label>
              <RadioGroup value={formData.tradeType} onValueChange={(value) => setFormData({ ...formData, tradeType: value })}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pure" id="pure" />
                  <Label htmlFor="pure" className="font-normal cursor-pointer">Pure Barter Only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="hybrid" />
                  <Label htmlFor="hybrid" className="font-normal cursor-pointer">Open to Hybrid (Barter + Cash)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credits" id="credits" />
                  <Label htmlFor="credits" className="font-normal cursor-pointer">Barter Credits Only</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate(-1)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-trade-gradient">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default EditOffer;
