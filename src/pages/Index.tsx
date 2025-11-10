import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Repeat } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-trade-gradient">
            <Repeat className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="mb-4 text-5xl font-bold bg-trade-gradient bg-clip-text text-transparent">
          eBarter Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Your comprehensive barter trading dashboard is ready. Access all your trades, offers, and community features.
        </p>
        <Button 
          size="lg" 
          className="bg-trade-gradient text-lg px-8"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Index;
