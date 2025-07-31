import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users2, Target, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Building2,
      title: "Excellence",
      description: "We strive for excellence in every transaction and client interaction."
    },
    {
      icon: Users2,
      title: "Integrity",
      description: "Honest, transparent communication and ethical business practices."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing new technologies and methods to serve our clients better."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. We put our clients' needs first."
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Welcome Groups was established with a vision to transform real estate services."
    },
    {
      year: "2012",
      title: "Regional Expansion",
      description: "Expanded operations to serve multiple markets across the region."
    },
    {
      year: "2017",
      title: "Digital Innovation",
      description: "Launched our digital platform to enhance client experience."
    },
    {
      year: "2021",
      title: "Award Recognition",
      description: "Received industry awards for outstanding customer service."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Today, we continue to grow and serve our community with excellence."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 fade-in">
              About Welcome Groups
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 slide-up">
              Building trust, delivering excellence, and creating lasting relationships 
              in the real estate industry for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Welcome Groups was founded with a simple yet powerful vision: to revolutionize 
                  the real estate experience by putting our clients' needs at the heart of 
                  everything we do. What started as a small team of passionate real estate 
                  professionals has grown into a trusted regional leader.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey has been marked by continuous growth, innovation, and an unwavering 
                  commitment to excellence. We've helped thousands of families find their dream 
                  homes and assisted countless businesses in securing the perfect commercial spaces.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Welcome Groups stands as a testament to what's possible when expertise, 
                  integrity, and genuine care for clients come together. We're not just in the 
                  business of real estate; we're in the business of making dreams come true.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-brand-neutral-light border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide exceptional real estate services that exceed our clients' expectations, 
                    while building lasting relationships based on trust, integrity, and professional excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-accent-light/20 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the most trusted and respected real estate group in our region, 
                    known for our innovative approach, exceptional service, and commitment 
                    to our clients' success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide our actions and define our commitment to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-none bg-background shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of growth, innovation, and commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent/30"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <Card className="border-border shadow-md">
                      <CardContent className="p-6">
                        <div className="text-2xl font-heading font-bold text-accent mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate professionals who make Welcome Groups exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-none bg-background">
              <CardContent className="p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">50+</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Expert Agents
                </h3>
                <p className="text-muted-foreground">
                  Licensed professionals with years of market experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none bg-background">
              <CardContent className="p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">15+</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Years Combined
                </h3>
                <p className="text-muted-foreground">
                  Collective experience in real estate and related services
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none bg-background">
              <CardContent className="p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">24/7</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Support Available
                </h3>
                <p className="text-muted-foreground">
                  Always here when you need us most
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Our diverse team brings together expertise in residential sales, commercial properties, 
              property management, and investment consulting. Every team member is committed to 
              providing you with the highest level of professional service.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Experience the Welcome Groups Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to work with a team that puts your success first? 
            Contact us today to discover how we can help you achieve your real estate goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;