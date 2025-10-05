import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-24">
      {/* Animated mesh background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full gradient-primary opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full gradient-accent opacity-20 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card animate-bounce-in">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Application Open for Academic Year 2025-26</span>
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.1] animate-fade-in-up">
                <span className="text-foreground">Smarter</span>
                <br />
                <span className="gradient-primary bg-clip-text text-transparent animate-shimmer" style={{
                  backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  backgroundSize: '200% auto'
                }}>
                  Education
                </span>
                <br />
                <span className="text-foreground">in Your Future</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Education isn't just knowledge, it's the <span className="text-primary font-semibold">power to craft a future</span>, inspired & prepared, and create real change in the world
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="h-14 px-8 text-base gradient-primary shadow-primary hover:shadow-glow transition-all group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Register Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base glass-card border-border/50 hover:border-primary/50 hover:bg-primary/10 group">
                <Zap className="h-5 w-5 group-hover:text-primary transition-colors" />
                Contact Us
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl font-black gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">50.3K+</div>
                <div className="text-sm text-muted-foreground">Students Enrolled</div>
              </div>
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl font-black gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-sm text-muted-foreground">Classes Completed</div>
              </div>
              <div className="space-y-2 group cursor-default">
                <div className="text-4xl font-black text-success group-hover:scale-110 transition-transform">98.7%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Scholarship Card */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card rounded-3xl p-8 shadow-glow hover-lift transition-spring group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 animate-scale-in">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-primary animate-pulse-glow">
                    <TrendingUp className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-foreground">₹5000Cr+</div>
                    <div className="text-sm text-muted-foreground">Total Scholarship</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <h3 className="text-2xl font-bold text-foreground">Scholarship Portal</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Apply for scholarships and financial aid to support your education journey
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl glass-card p-4 group/card cursor-default">
                    <div className="text-xs text-muted-foreground mb-2">Application Status</div>
                    <div className="text-xl font-bold text-success flex items-center gap-2">
                      <span className="flex h-2 w-2 rounded-full bg-success animate-pulse"></span>
                      Active
                    </div>
                  </div>
                  <div className="rounded-xl glass-card p-4 group/card cursor-default">
                    <div className="text-xs text-muted-foreground mb-2">Latest Deadline</div>
                    <div className="text-xl font-bold text-primary">Mar 31</div>
                  </div>
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full h-12 gradient-accent shadow-accent hover:shadow-glow transition-all group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">Free Forms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
