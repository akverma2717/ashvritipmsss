import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-background/10 py-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Stay Updated</h3>
              <p className="text-background/70">
                Subscribe to our newsletter and never miss an important deadline or announcement
              </p>
            </div>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold">ASHARITI</span>
                  <span className="text-xs text-background/70">By Gini Gina</span>
                </div>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                Empowering students through quality education and comprehensive scholarship programs. Building a brighter future, one student at a time.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-smooth">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-smooth">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-smooth">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 hover:bg-primary transition-smooth">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About Us", "Scholarship", "Resources", "Contact Us", "FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/70 hover:text-primary transition-smooth">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Important Links</h4>
              <ul className="space-y-2">
                {[
                  "Learning Center Article",
                  "Terms of Service",
                  "Privacy Policy",
                  "Application Guide",
                  "Eligibility Criteria",
                  "FAQs",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/70 hover:text-primary transition-smooth">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm text-background/70">
                    <div className="font-medium text-background">Address:</div>
                    123 Education Street, Srinagar, J&K 190001
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-sm text-background/70">
                    <div className="font-medium text-background">Email:</div>
                    contact@ashariti.com
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-sm text-background/70">
                    <div className="font-medium text-background">Phone:</div>
                    +91 1234567890
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/70">
            <p>© 2025 ASHARITI Education Network. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
