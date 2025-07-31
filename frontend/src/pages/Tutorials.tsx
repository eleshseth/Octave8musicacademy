
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Play, Clock, User, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allTutorials = [
  {
    id: 1,
    title: "Guitar Basics for Complete Beginners",
    instructor: "Sarah Johnson",
    duration: "45 min",
    level: "Beginner",
    views: "120k",
    category: "Fundamentals",
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Mastering Barre Chords",
    instructor: "Mike Rodriguez",
    duration: "30 min",
    level: "Intermediate",
    views: "85k",
    category: "Chords",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Fingerpicking Techniques",
    instructor: "Emma Davis",
    duration: "25 min",
    level: "Advanced",
    views: "67k",
    category: "Techniques",
    thumbnail: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Reading Guitar Tablature",
    instructor: "John Smith",
    duration: "20 min",
    level: "Beginner",
    views: "95k",
    category: "Theory",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Lead Guitar Solos",
    instructor: "Alex Thompson",
    duration: "40 min",
    level: "Advanced",
    views: "73k",
    category: "Lead",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Rhythm Guitar Patterns",
    instructor: "Lisa Chen",
    duration: "35 min",
    level: "Intermediate",
    views: "88k",
    category: "Rhythm",
    thumbnail: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=250&fit=crop"
  }
];

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTutorials = allTutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || tutorial.level === selectedLevel;
    const matchesCategory = selectedCategory === "all" || tutorial.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-700 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Video Tutorials
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn guitar with expert instructors through comprehensive video lessons
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card/50 backdrop-blur rounded-lg border border-border/50">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search tutorials or instructors..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Fundamentals">Fundamentals</SelectItem>
              <SelectItem value="Chords">Chords</SelectItem>
              <SelectItem value="Techniques">Techniques</SelectItem>
              <SelectItem value="Theory">Theory</SelectItem>
              <SelectItem value="Lead">Lead Guitar</SelectItem>
              <SelectItem value="Rhythm">Rhythm Guitar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <p className="text-muted-foreground mb-6">
          Showing {filteredTutorials.length} tutorials
        </p>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial, index) => (
            <Card 
              key={tutorial.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
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
                    className="rounded-full w-16 h-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-primary/90 hover:bg-primary"
                  >
                    <Play className="h-8 w-8 ml-1" />
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
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {tutorial.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <User className="h-4 w-4 mr-2" />
                  {tutorial.instructor}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </span>
                  <span>{tutorial.category}</span>
                </div>
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No tutorials found matching your search criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Tutorials;
