import { Card } from "@/components/ui/card";
import { GraduationCap, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education Access",
    description: "Connect with top-tier institutions and educators across the globe.",
    stats: "Access to 500+ institutions",
  },
  {
    icon: HeadphonesIcon,
    title: "Comprehensive Support",
    description: "24/7 guidance from application to enrollment with dedicated support team.",
    stats: "24/7 Available",
  },
  {
    icon: Award,
    title: "Merit-Based Selection",
    description: "Transparent selection process based on academic excellence and potential.",
    stats: "100% Merit Based",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Why Choose <span className="font-bold">PMSSS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Students Choose PMSSS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the advantages that make us the preferred choice for students seeking quality education and financial support
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="gradient-card p-8 hover:shadow-xl transition-smooth group cursor-pointer border-2 border-transparent hover:border-primary/20"
            >
              <div className="space-y-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-primary group-hover:scale-110 transition-bounce">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {feature.stats}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
