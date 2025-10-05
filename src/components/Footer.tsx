import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-primary animate-pulse-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">ASHARITI</span>
                <span className="text-xs text-muted-foreground">By Gini Gina</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students through quality education and comprehensive scholarship programs. Building a brighter future, one student at a time.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-lg glass-card hover:bg-primary/10 hover:text-primary transition-all group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Scholarship", "Resources", "Services", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Important Links</h3>
            <ul className="space-y-3">
              {["Application Portal", "Notice Board", "Exam Schedule", "Results", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Subscribe to get the latest updates and announcements directly in your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="glass-card border-border/50 focus:border-primary/50"
              />
              <Button size="icon" className="gradient-primary shadow-primary hover:shadow-glow transition-all flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {[
                { icon: Phone, text: "+91 1234567890" },
                { icon: Mail, text: "info@ashariti.edu" },
                { icon: MapPin, text: "New Delhi, India" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 ASHARITI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
