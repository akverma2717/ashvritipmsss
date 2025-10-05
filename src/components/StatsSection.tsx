import { Card } from "@/components/ui/card";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "50,312",
    label: "Students Enrolled",
    subtext: "All time",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
    change: "+14%",
  },
  {
    value: "5,247",
    label: "Featured Establishments",
    subtext: "In operation",
    icon: Award,
    color: "text-accent",
    bgColor: "bg-accent/10",
    change: "+18%",
  },
  {
    value: "₹5,240Cr",
    label: "Scholarship Awarded",
    subtext: "Last year",
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
    change: "+23%",
  },
  {
    value: "98.7%",
    label: "Success Rate",
    subtext: "Overall",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
    change: "+2.4%",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="gradient-card p-6 hover:shadow-lg hover-lift transition-smooth group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.bgColor} group-hover:scale-110 transition-smooth`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  {stat.change}
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.subtext}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
