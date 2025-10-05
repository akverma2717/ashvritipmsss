import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "50,312",
    label: "Students Enrolled",
    subtext: "All time",
    icon: Users,
    change: "+14%",
    gradient: "gradient-primary",
  },
  {
    value: "5,247",
    label: "Featured Establishments",
    subtext: "In operation",
    icon: Award,
    change: "+18%",
    gradient: "gradient-accent",
  },
  {
    value: "₹5,240Cr",
    label: "Scholarship Awarded",
    subtext: "Last year",
    icon: TrendingUp,
    change: "+23%",
    gradient: "gradient-primary",
  },
  {
    value: "98.7%",
    label: "Success Rate",
    subtext: "Overall",
    icon: BookOpen,
    change: "+2.4%",
    gradient: "gradient-accent",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift transition-spring group cursor-default animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.gradient} shadow-primary group-hover:scale-110 group-hover:rotate-6 transition-spring`}>
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full glass-card text-success text-xs font-bold">
                    {stat.change}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-black text-foreground group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground/80">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
