import { GraduationCap, HeadphonesIcon, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education Access",
    description: "Connect with top-tier institutions and educators across the globe for world-class learning experiences.",
    stats: "500+ Institutions",
  },
  {
    icon: HeadphonesIcon,
    title: "Comprehensive Support",
    description: "24/7 guidance from application to enrollment with dedicated support team always ready to help.",
    stats: "24/7 Available",
  },
  {
    icon: Award,
    title: "Merit-Based Selection",
    description: "Transparent selection process based on academic excellence and potential for future success.",
    stats: "100% Merit Based",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Why Choose <span className="text-primary">PMSSS</span></span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground">
            Why Students <span className="gradient-primary bg-clip-text text-transparent">Choose PMSSS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the advantages that make us the preferred choice for students seeking quality education and financial support
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 hover-lift transition-spring group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-6">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary shadow-primary group-hover:scale-110 group-hover:rotate-6 transition-spring">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                  <div className="absolute inset-0 rounded-2xl gradient-primary opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">{feature.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
