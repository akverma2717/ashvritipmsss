import { BookOpen, Lightbulb, HeadphonesIcon, BookMarked, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "World-class education from leading institutions worldwide",
    stats: "500+ Colleges",
  },
  {
    icon: Lightbulb,
    title: "Merit-Based Selection",
    description: "Transparent and fair selection process for all students",
    stats: "100% Merit",
  },
  {
    icon: HeadphonesIcon,
    title: "Comprehensive Support",
    description: "End-to-end guidance and assistance throughout your journey",
    stats: "24/7 Support",
  },
  {
    icon: BookMarked,
    title: "Diverse Courses",
    description: "Wide range of academic programs to choose from",
    stats: "200+ Courses",
  },
];

const TransformSection = () => {
  return (
    <section className="py-24 relative gradient-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">Transform Your <span className="text-primary">Future</span></span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground">
            Transforming Lives Through{" "}
            <span className="gradient-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their futures through our scholarship program. We believe education is the foundation of a brighter tomorrow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift transition-spring group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl gradient-accent shadow-accent group-hover:scale-125 group-hover:rotate-12 transition-spring">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                  <div className="absolute inset-0 rounded-xl gradient-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-2xl font-black gradient-primary bg-clip-text text-transparent">
                      {feature.stats}
                    </span>
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

export default TransformSection;
