import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/dee13c0c-920d-4e30-af96-1a1272dc5dce.png" 
              alt="Welcome Groups Logo" 
              className="h-16 w-auto mx-auto mb-6 brand-image"
              loading="eager"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
              <h2 className="text-2xl font-heading font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back to exploring our services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help? <Link to="/contact" className="text-accent hover:text-accent/80 font-medium">Contact us</Link> for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
