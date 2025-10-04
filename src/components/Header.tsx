import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">ASHARITI</span>
              <span className="text-xs text-muted-foreground">By Gini Gina</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-smooth">
              About Us
              <ChevronDown className="h-3 w-3" />
            </button>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Scholarship
            </a>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Resources
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contact Us
              <ChevronDown className="h-3 w-3" />
            </button>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Services
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden lg:inline-flex font-medium">
              Enquiry On Us
            </Button>
            <Button variant="hero" className="font-medium">
              User Registration
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
