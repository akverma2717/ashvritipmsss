import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bell, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero py-16 sm:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-bounce-in">
                <Bell className="h-4 w-4 animate-pulse" />
                Application Open for Academic Year 2025-26
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                Smarter Education
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">
                  in Your Future
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Education isn't just knowledge, it's the power to craft a future, inspired & prepared, and create real change in the world
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" className="group shadow-primary hover:shadow-xl transition-smooth">
                Register Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group hover-lift">
                Contact Us
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">Type: Free Forms</span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                Get Certificate
              </span>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t">
              <div>
                <div className="text-4xl font-bold text-foreground">50.3K</div>
                <div className="text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Classes Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Scholarship Card */}
          <div className="relative animate-slide-in-right">
            <Card className="gradient-primary p-8 text-primary-foreground shadow-xl animate-float hover-lift transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center gap-3 animate-scale-in">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur group hover:scale-110 transition-smooth">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">₹5000Cr+</div>
                    <div className="text-sm text-primary-foreground/80">Total Scholarship</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Scholarship Portal</h3>
                  <p className="text-sm text-primary-foreground/90">
                    Apply for scholarships and financial aid to support your education
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/10 backdrop-blur p-4">
                    <div className="text-xs text-primary-foreground/80 mb-1">Application Status</div>
                    <div className="text-lg font-bold text-success-foreground">Active</div>
                  </div>
                  <div className="rounded-lg bg-white/10 backdrop-blur p-4">
                    <div className="text-xs text-primary-foreground/80 mb-1">Latest Deadline</div>
                    <div className="text-lg font-bold">Mar 31</div>
                  </div>
                </div>

                <Button variant="accent" size="lg" className="w-full shadow-accent hover:shadow-xl transition-smooth group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            {/* Partner Logos */}
            <div className="mt-8 space-y-4">
              <div className="text-sm font-medium text-muted-foreground">Trusted by leading institutions</div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center h-16 rounded-lg bg-card border hover:shadow-md transition-smooth"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
