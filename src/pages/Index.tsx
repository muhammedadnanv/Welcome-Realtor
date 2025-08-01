import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const Index = () => {
  const features = [{
    icon: Building,
    title: "Expert Real Estate Services",
    description: "Professional guidance through every step of your real estate journey."
  }, {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Building lasting relationships with clients across the region."
  }, {
    icon: Award,
    title: "Award-Winning Team",
    description: "Recognized excellence in real estate services and customer satisfaction."
  }];
  const stats = [{
    number: "500+",
    label: "Properties Sold"
  }, {
    number: "15+",
    label: "Years Experience"
  }, {
    number: "98%",
    label: "Client Satisfaction"
  }, {
    number: "50+",
    label: "Team Members"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 fade-in">
            Welcome to <span className="text-accent">Excellence</span> in Real Estate
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 slide-up opacity-90">Your trusted partner for exceptional real estate services. Discover your dream property with Welcome Realtor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Button size="lg" variant="default" className="bg-accent" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white" asChild>
              
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Choose Welcome Groups?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine years of experience with innovative approaches to deliver 
              exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="border-border shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                About Welcome Groups
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to transform the real estate experience, Welcome Groups 
                has grown into a trusted name in the industry. Our commitment to excellence 
                and client satisfaction drives everything we do.
              </p>
              <ul className="space-y-4 mb-8">
                {["Professional expertise in residential and commercial properties", "Comprehensive market knowledge and insights", "Personalized service tailored to your unique needs", "Strong network of industry professionals"].map((item, index) => <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 bg-brand-neutral-light">
                  <h3 className="font-heading font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide exceptional real estate services that exceed expectations.
                  </p>
                </Card>
                <Card className="p-6 bg-brand-accent-light/30">
                  <h3 className="font-heading font-semibold text-primary mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be the leading real estate group known for integrity and excellence.
                  </p>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="p-6 bg-accent/10">
                  <h3 className="font-heading font-semibold text-primary mb-2">Our Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Trust, transparency, and commitment to our clients' success.
                  </p>
                </Card>
                <Card className="p-6 bg-primary/5">
                  <h3 className="font-heading font-semibold text-primary mb-2">Our Promise</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional service with personalized attention to detail.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discover how Welcome Groups can help you achieve your real estate goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Index;