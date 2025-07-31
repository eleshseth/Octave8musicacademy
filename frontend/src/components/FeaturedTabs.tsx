
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const featuredTabs = [
  {
    id: 1,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    difficulty: "Intermediate",
    rating: 4.9,
    duration: "8:02",
    genre: "Rock",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Wonderwall",
    artist: "Oasis",
    difficulty: "Beginner",
    rating: 4.7,
    duration: "4:18",
    genre: "Pop Rock",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Hotel California",
    artist: "Eagles",
    difficulty: "Advanced",
    rating: 4.8,
    duration: "6:30",
    genre: "Classic Rock",
    image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Blackbird",
    artist: "The Beatles",
    difficulty: "Intermediate",
    rating: 4.6,
    duration: "2:18",
    genre: "Folk Rock",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=200&fit=crop"
  }
];

const FeaturedTabs = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-700 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-customGreen to-customGreen bg-clip-text text-transparent">
            Featured Tabs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master these iconic songs with our professionally crafted guitar tabs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredTabs.map((tab, index) => (
            <Card 
              key={tab.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={tab.image} 
                  alt={tab.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button 
                  size="sm" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 bg-customGreen text-primary-foreground"
                >
                  <Play className="h-4 w-4 mr-1 bg-customGreen text-primary-foreground" />
                  Play
                </Button>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={getDifficultyColor(tab.difficulty)}>
                    {tab.difficulty}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {tab.rating}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-customGreen transition-colors">
                  {tab.title}
                </CardTitle>
                <p className="text-muted-foreground">{tab.artist}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tab.duration}
                  </span>
                  <span>{tab.genre}</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-customGreen group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={`/tabs/${tab.id}`}>View Tab</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/tabs">View All Tabs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTabs;
