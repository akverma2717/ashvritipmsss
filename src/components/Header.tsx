import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">ASHARITI</span>
              <span className="text-xs text-muted-foreground">By Gini Gina</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Scholarship
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Resources
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Contact Us
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              Services
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Enquiry On Us
            </Button>
            <Button variant="hero" size="lg">
              User Registration
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
