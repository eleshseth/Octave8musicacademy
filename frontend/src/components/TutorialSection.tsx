
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const tutorials = [
  {
    id: 1,
    title: "Guitar Basics for Complete Beginners",
    instructor: "Sarah Johnson",
    duration: "45 min",
    level: "Beginner",
    views: "120k",
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Mastering Barre Chords",
    instructor: "Mike Rodriguez",
    duration: "30 min",
    level: "Intermediate",
    views: "85k",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Fingerpicking Techniques",
    instructor: "Emma Davis",
    duration: "25 min",
    level: "Advanced",
    views: "67k",
    thumbnail: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=250&fit=crop"
  }
];

const TutorialSection = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-700 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Video Tutorials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from expert instructors with step-by-step video tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {tutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={tutorial.thumbnail} 
                  alt={tutorial.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Button 
                    size="lg" 
                    className="rounded-full bg-white w-16 h-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hover:bg-customGreen"
                  >
                    <Play className="h-8 w-8 ml-1 color-customGreen" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {tutorial.duration}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={getLevelColor(tutorial.level)}>
                    {tutorial.level}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{tutorial.views} views</span>
                </div>
                <CardTitle className="text-lg group-hover:text-customGreen transition-colors">
                  {tutorial.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="h-4 w-4 mr-2" />
                  {tutorial.instructor}
                </div>
                <Button variant="outline" className="w-full group-hover:text-primary-foreground  group-hover:bg-customGreen transition-colors" asChild>
                  <Link to={`/tutorials/${tutorial.id}`}>
                    <Play className="h-4 w-4 mr-2 " />
                    Watch Tutorial
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="hover:bg-customGreen hover:text-primary-foreground " size="lg" variant="outline" asChild>
            <Link to="/tutorials">View All Tutorials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
