import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-heading font-bold">
              Welcome <span className="text-accent">Properties</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner in real estate excellence. We provide professional
              realty services with integrity, expertise, and dedication to our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/brands" className="text-primary-foreground/80 transition-colors text-sm">
                Our Other Brands
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">UAE: +971 5 235 854 65</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">India: +91 98 474 804 19</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">samsiwelcome@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Al Quoz 3, Dubai<br />
                  United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Welcome Groups. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Website engineered{" "}
              <a href="https://adwebcomicagency.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                Ad web Comic Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;