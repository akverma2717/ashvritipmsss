import { Button } from "@/components/ui/button";
import { Check, Calendar, ArrowRight, Sparkles } from "lucide-react";

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
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Benefits List */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card animate-bounce-in">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Student Benefits</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black text-foreground">
                Comprehensive{" "}
                <span className="gradient-primary bg-clip-text text-transparent">Benefits Package</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We provide a complete support system to ensure your academic success. From tuition to resources, we've got you covered.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl glass-card hover-lift transition-spring group animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20 group-hover:scale-110 group-hover:rotate-6 transition-spring">
                    <Check className="h-6 w-6 text-success" />
                  </div>
                  <span className="text-base font-semibold text-foreground group-hover:text-success transition-smooth">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-14 px-8 gradient-primary shadow-primary hover:shadow-glow transition-all group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Discover More Benefits
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Button>
          </div>

          {/* Right - Application Deadline Card */}
          <div className="animate-slide-in-right">
            <div className="glass-card rounded-3xl p-10 shadow-glow hover-lift transition-spring">
              <div className="space-y-8">
                <div className="flex items-center gap-5 animate-scale-in">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary shadow-primary animate-pulse-glow">
                    <Calendar className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Application Deadline</div>
                    <div className="text-4xl font-black text-foreground">March 31, 2025</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Don't miss out on this opportunity to secure your future. Applications are now open for the academic year 2025-26.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl glass-card group cursor-default">
                      <div className="text-sm text-muted-foreground mb-2">Total Scholarships</div>
                      <div className="text-3xl font-black gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                        10,000+
                      </div>
                    </div>
                    <div className="p-5 rounded-2xl glass-card group cursor-default">
                      <div className="text-sm text-muted-foreground mb-2">Worth Amount</div>
                      <div className="text-3xl font-black gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                        ₹500Cr+
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 gradient-accent shadow-accent hover:shadow-glow transition-all group/btn relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      Apply Before Deadline
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
