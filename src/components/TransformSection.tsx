import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, HeadphonesIcon, BookMarked } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "World-class education from leading institutions",
    stats: "500+ Colleges",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Merit-Based Selection",
    description: "Transparent and fair selection process",
    stats: "100% Merit",
    color: "accent",
  },
  {
    icon: HeadphonesIcon,
    title: "Comprehensive Support",
    description: "End-to-end guidance and assistance",
    stats: "24/7 Support",
    color: "success",
  },
  {
    icon: BookMarked,
    title: "Diverse Courses",
    description: "Wide range of academic programs",
    stats: "200+ Courses",
    color: "primary",
  },
];

const TransformSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Why Choose <span className="font-bold">PMSSS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Transforming Lives Through Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who have transformed their futures through our scholarship program. We believe education is the foundation of a brighter tomorrow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="gradient-card p-6 hover:shadow-xl hover-lift transition-smooth group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    feature.color === "primary"
                      ? "gradient-primary"
                      : feature.color === "accent"
                      ? "gradient-accent"
                      : "bg-success"
                  } shadow-${feature.color} group-hover:scale-125 group-hover:rotate-12 transition-bounce`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-primary group-hover:scale-110 inline-block transition-smooth">{feature.stats}</span>
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

export default TransformSection;
