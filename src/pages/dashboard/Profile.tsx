import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, Award, TrendingUp, Package, ShoppingBag, Edit, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    bio: "Full-stack developer specializing in React and Node.js. Passionate about building innovative solutions through barter exchanges.",
    location: "Lagos, Nigeria",
  });

  const handleSave = () => {
    toast({
      title: "Profile Updated!",
      description: "Your changes have been saved successfully.",
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">View and manage your public profile</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="bg-trade-gradient">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-trade-gradient">
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        )}
      </div>

      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-trade-gradient text-white text-3xl">
                {formData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 w-full">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{formData.name}</h2>
                    <Badge className="bg-gold-gradient">
                      <Award className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                    <Badge className="bg-success">Pro Member</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{formData.bio}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {formData.location}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Joined March 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold">4.8</span>
                      <span className="text-muted-foreground">(24 reviews)</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Trust Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">95%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              Excellent
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completed Trades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">
              100% success rate
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Offers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total value: $8,500
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2h</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average response
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skills & Services */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Skills & Services Offered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm py-1 px-3">Web Development</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">React.js</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Node.js</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Database Design</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">UI/UX Design</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">Mobile App Development</Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">API Integration</Badge>
          </div>
          <Button variant="outline" className="mt-4">Add More Skills</Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Offers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <h4 className="font-medium">Web Development Services</h4>
                  <p className="text-sm text-muted-foreground">45 views • 8 matches</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Recent Needs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <h4 className="font-medium">Marketing Services</h4>
                  <p className="text-sm text-muted-foreground">15 matches found</p>
                </div>
                <Badge className="bg-primary">Matched</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Reviews */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              name: "Sarah Johnson",
              rating: 5,
              comment: "Excellent work! Very professional and delivered exactly what was promised.",
              date: "2 days ago",
            },
            {
              name: "Green Valley Farms",
              rating: 5,
              comment: "Great communication and smooth trade process. Highly recommended!",
              date: "1 week ago",
            },
            {
              name: "TechSupport Pro",
              rating: 4,
              comment: "Good service, minor delays but overall satisfied with the outcome.",
              date: "2 weeks ago",
            },
          ].map((review, i) => (
            <div key={i} className="p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-trade-gradient text-white text-xs">
                      {review.name.split(' ').map(w => w[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
