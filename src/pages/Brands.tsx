import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building, Briefcase, Home, Store, Wrench, Users } from "lucide-react";
import muhammadWelcome from "@/assets/muhammad-welcome.jpg";
import sabirChabu from "@/assets/sabir-chabu.jpg";
import samsiWelcome from "@/assets/samsi-welcome.jpg";
const Brands = () => {
  const brands = [{
    name: "Welcome Realtors",
    category: "Real Estate",
    description: "Our flagship real estate division providing comprehensive residential and commercial property services.",
    icon: Building,
    services: ["Residential Sales", "Commercial Properties", "Property Management", "Investment Consulting"],
    featured: true
  }, {
    name: "Welcome Construction",
    category: "Construction & Development",
    description: "Full-service construction company specializing in residential and commercial building projects.",
    icon: Wrench,
    services: ["New Construction", "Renovations", "Commercial Building", "Project Management"]
  }, {
    name: "Welcome Property Management",
    category: "Property Services",
    description: "Professional property management services for residential and commercial property owners.",
    icon: Home,
    services: ["Tenant Management", "Maintenance Services", "Rent Collection", "Property Marketing"]
  }, {
    name: "Welcome Business Solutions",
    category: "Business Services",
    description: "Comprehensive business consulting and support services for entrepreneurs and established businesses.",
    icon: Briefcase,
    services: ["Business Consulting", "Financial Planning", "Marketing Support", "Legal Services"]
  }, {
    name: "Welcome Retail",
    category: "Retail & Commerce",
    description: "Retail development and management focusing on creating vibrant commercial spaces.",
    icon: Store,
    services: ["Retail Development", "Tenant Relations", "Marketing Services", "Space Planning"]
  }, {
    name: "Welcome Community",
    category: "Community Development",
    description: "Dedicated to building stronger communities through various development and social initiatives.",
    icon: Users,
    services: ["Community Planning", "Social Programs", "Event Management", "Neighborhood Development"]
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 fade-in">
              Our Other Brands
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 slide-up">
              Discover the diverse portfolio of Welcome Groups and how our family 
              of brands serves various industries and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              A Comprehensive Business Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome Groups has evolved beyond real estate to become a diverse business ecosystem. 
              Our portfolio of brands reflects our commitment to serving various aspects of community 
              development, business growth, and quality of life enhancement. Each brand operates with 
              the same core values of excellence, integrity, and client-focused service.
            </p>
          </div>

          {/* Featured Brand - Welcome Realtors */}
          <div className="mb-16">
            <Card className="border-accent/20 bg-gradient-to-r from-brand-neutral-light to-brand-accent-light/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-6">
                    <Building className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-accent uppercase tracking-wide mb-1">
                      Flagship Brand
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-primary">
                      Welcome Realtors
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our flagship real estate division that started it all. Welcome Realtors has been 
                  the foundation of our success, providing exceptional residential and commercial 
                  real estate services with a focus on building lasting relationships and delivering 
                  outstanding results for our clients.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {brands[0].services.map((service, index) => <div key={index} className="text-sm text-primary font-medium bg-background/60 rounded-lg px-3 py-2 text-center">
                      {service}
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Brands Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Extended Family of Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each brand in our portfolio brings specialized expertise and dedicated service to different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Welcome Rental Cars */}
            <Card className="border-none bg-background shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 mr-6 flex items-center justify-center image-container">
                    <img src="https://i.ibb.co/Kp6qV16j/1.jpg" alt="Welcome Rental Cars Logo - Premium car rental services" className="max-w-full max-h-full object-contain brand-image" loading="lazy" onError={e => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Car Rental Services
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">
                      Welcome Rental Cars
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Premium car rental services for all your transportation needs in the UAE and India. 
                  We provide reliable, well-maintained vehicles for business and leisure travel.
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-primary text-sm">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Car Rental</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Transportation</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Fleet Management</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Travel Solutions</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Welcome Tours and Travels */}
            <Card className="border-none bg-background shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 mr-6 flex items-center justify-center image-container">
                    <img src="https://i.ibb.co/rfQNQ3TW/3.jpg" alt="Welcome International Tours and Travels Logo - Travel and tourism services" className="max-w-full max-h-full object-contain brand-image" loading="lazy" onError={e => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Travel & Tourism
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary">
                      Welcome Tours and Travels
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  International tours and travel services, creating unforgettable experiences worldwide. 
                  We specialize in customized travel packages and comprehensive travel solutions.
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-primary text-sm">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">International Tours</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Travel Planning</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Visa Services</span>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Group Travel</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              Stronger Together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The strength of Welcome Groups lies in the synergy between our brands. When you work 
              with one of our companies, you gain access to the expertise and resources of our 
              entire network. This interconnected approach allows us to provide comprehensive 
              solutions that address all aspects of your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Integrated Solutions
                </h3>
                <p className="text-muted-foreground">
                  Seamless coordination between brands for comprehensive service delivery.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Shared Expertise
                </h3>
                <p className="text-muted-foreground">
                  Access to specialists across multiple industries and service areas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Unified Values
                </h3>
                <p className="text-muted-foreground">
                  Consistent quality and service standards across all our brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Brand Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Our Parent Brand
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Welcome Group serves as the umbrella organization for all our diverse business ventures, 
              providing strategic direction and unified excellence across all subsidiaries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-background shadow-lg">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img src="https://i.ibb.co/Q3SVbmND/0-1-1.jpg" alt="Welcome Group Logo - Parent company umbrella brand" className="h-24 w-auto object-contain brand-image" loading="lazy" onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-primary">
                  Welcome Group
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The foundational company that unites our real estate, transportation, and tourism services 
                  under one vision of excellence and customer satisfaction. Since our establishment, we have 
                  been committed to building a diversified portfolio of businesses that serve communities 
                  across the UAE and India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary leaders who guide Welcome Group's strategic direction and drive 
              our commitment to excellence across all business divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Chairman */}
            <Card className="text-center bg-background shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 image-container">
                  <img src={muhammadWelcome} alt="Muhammad Welcome - Chairman of Welcome Groups" className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg team-image" loading="lazy" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Muhammad Welcome
                </h3>
                <p className="text-lg font-semibold text-accent mb-4">
                  Chairman
                </p>
                <p className="text-muted-foreground">
                  Visionary leader with decades of experience in business development and 
                  strategic planning, guiding Welcome Group's expansion across multiple sectors.
                </p>
              </CardContent>
            </Card>

            {/* Director */}
            <Card className="text-center bg-background shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 image-container">
                  <img src={sabirChabu} alt="Sabir Chabu - Director of Welcome Groups" className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg team-image" loading="lazy" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Sabir Chabu
                </h3>
                <p className="text-lg font-semibold text-accent mb-4">
                  Director
                </p>
                <p className="text-muted-foreground">
                  Strategic operations leader focused on operational excellence and business 
                  development, ensuring quality service delivery across all divisions.
                </p>
              </CardContent>
            </Card>

            {/* Managing Director */}
            <Card className="text-center bg-background shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 image-container">
                  <img src={samsiWelcome} alt="Samsi Welcome - Managing Director of Welcome Groups" className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg team-image" loading="lazy" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Samsi Welcome
                </h3>
                <p className="text-lg font-semibold text-accent mb-4">
                  Managing Director
                </p>
                <p className="text-muted-foreground">
                  Dynamic leader driving day-to-day operations and growth initiatives, 
                  committed to innovation and customer satisfaction across all business units.
                </p>
              </CardContent>
            </Card>

            {/* Supervisor */}
            <Card className="text-center bg-background shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6 image-container">
                  <img src="/lovable-uploads/9f4f3c0c-d32d-46d8-b52a-31f1bcd56845.png" alt="Mr Rahman Bevinja - Supervisor of Welcome Groups" className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg team-image" loading="lazy" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Mr Rahman Bevinja
                </h3>
                <p className="text-lg font-semibold text-accent mb-4">
                  Supervisor
                </p>
                <p className="text-muted-foreground">
                  Dedicated supervisor ensuring quality standards and operational efficiency 
                  across all Welcome Group divisions with attention to detail and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Explore Our Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need real estate services, construction, property management, or business solutions, 
            we have the expertise to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Welcome Realtors
            </Button>
            
          </div>
        </div>
      </section>
    </div>;
};
export default Brands;
