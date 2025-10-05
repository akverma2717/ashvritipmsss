import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, ArrowRight } from "lucide-react";

const notices = [
  {
    id: 1,
    badge: "New",
    badgeVariant: "default" as const,
    title: "Application Portal for J&K, Diploma & M.Sc Students Reopened",
    description: "All eligible students can now submit their applications through the official portal until the deadline.",
    date: "Oct 3, 2025",
    views: "2.5k",
  },
  {
    id: 2,
    badge: "New",
    badgeVariant: "default" as const,
    title: "Revised Schedule for JEE - Application Submission Deadline",
    description: "Please note the extended deadline for JEE applications. Make sure to complete your submission on time.",
    date: "Oct 2, 2025",
    views: "1.8k",
  },
  {
    id: 3,
    badge: "Important",
    badgeVariant: "destructive" as const,
    title: "Dates of All Exams for Academic Year 2024-25",
    description: "Complete examination schedule has been released. Check your exam dates and plan your preparation accordingly.",
    date: "Oct 1, 2025",
    views: "3.2k",
  },
  {
    id: 4,
    badge: "Important",
    badgeVariant: "destructive" as const,
    title: "Scholarship Policy Summer-Break Update",
    description: "Important updates regarding scholarship disbursement during summer break. All students must read carefully.",
    date: "Sep 30, 2025",
    views: "2.1k",
  },
];

const NoticeBoardSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Latest Updates
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Notice Board</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest announcements, deadlines, and important information related to scholarships and admissions.
          </p>
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {notices.map((notice, index) => (
            <Card
              key={notice.id}
              className="gradient-card p-6 hover:shadow-xl hover-lift transition-smooth group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <Badge variant={notice.badgeVariant} className="text-xs animate-bounce-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                    {notice.badge}
                  </Badge>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {notice.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {notice.views}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{notice.description}</p>
                </div>
                <Button variant="ghost" className="group/btn -ml-3">
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            View All Notices
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoardSection;
