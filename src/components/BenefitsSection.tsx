import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, ArrowRight } from "lucide-react";

const benefits = [
  "Full tuition fee coverage",
  "Maintenance allowance",
  "Book and stationery grants",
  "Digital learning resources",
  "Career counseling",
  "Access to premium resources",
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits List */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Comprehensive Benefits Package
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide a complete support system to ensure your academic success. From tuition to resources, we've got you covered.
              </p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-secondary/50 hover-lift transition-smooth group animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 group-hover:bg-success/20 group-hover:scale-110 transition-smooth">
                    <Check className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-base font-medium text-foreground group-hover:text-success transition-smooth">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Discover More Benefits
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Application Deadline Card */}
          <div className="lg:pl-12 animate-slide-in-right">
            <Card className="gradient-card p-8 border-2 border-primary/20 shadow-xl hover-lift transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center gap-4 animate-scale-in">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-primary animate-pulse">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Deadline</div>
                    <div className="text-4xl font-bold text-foreground">March 31, 2025</div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Don't miss out on this opportunity to secure your future. Applications are now open for the academic year 2025-26.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-primary/5">
                      <div className="text-sm text-muted-foreground mb-1">Total Scholarships</div>
                      <div className="text-2xl font-bold text-primary">10,000+</div>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/5">
                      <div className="text-sm text-muted-foreground mb-1">Worth Amount</div>
                      <div className="text-2xl font-bold text-accent">₹500Cr+</div>
                    </div>
                  </div>

                  <Button variant="accent" size="lg" className="w-full">
                    Apply Before Deadline
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
