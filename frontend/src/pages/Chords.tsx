
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Play, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allChords = [
  {
    id: 1,
    name: "C Major",
    symbol: "C",
    difficulty: "Beginner",
    category: "Major",
    fingers: [0, 1, 0, 2, 3, 0],
    description: "One of the first chords every guitarist learns"
  },
  {
    id: 2,
    name: "G Major",
    symbol: "G",
    difficulty: "Beginner",
    category: "Major",
    fingers: [3, 2, 0, 0, 3, 3],
    description: "Essential open chord for many songs"
  },
  {
    id: 3,
    name: "D Major",
    symbol: "D",
    difficulty: "Beginner",
    category: "Major",
    fingers: [0, 0, 0, 2, 3, 2],
    description: "Bright and cheerful major chord"
  },
  {
    id: 4,
    name: "A Minor",
    symbol: "Am",
    difficulty: "Beginner",
    category: "Minor",
    fingers: [0, 0, 2, 2, 1, 0],
    description: "The easiest minor chord to learn"
  },
  {
    id: 5,
    name: "E Minor",
    symbol: "Em",
    difficulty: "Beginner",
    category: "Minor",
    fingers: [0, 2, 2, 0, 0, 0],
    description: "Simple two-finger minor chord"
  },
  {
    id: 6,
    name: "F Major Barre",
    symbol: "F",
    difficulty: "Intermediate",
    category: "Barre",
    fingers: [1, 1, 3, 3, 2, 1],
    description: "First barre chord most guitarists learn"
  },
  {
    id: 7,
    name: "B Minor Barre",
    symbol: "Bm",
    difficulty: "Intermediate",
    category: "Barre",
    fingers: [2, 2, 4, 4, 3, 2],
    description: "Common barre chord shape"
  },
  {
    id: 8,
    name: "C Major 7",
    symbol: "Cmaj7",
    difficulty: "Intermediate",
    category: "Extended",
    fingers: [0, 3, 2, 0, 0, 0],
    description: "Beautiful jazzy sound"
  }
];

const Chords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredChords = allChords.filter(chord => {
    const matchesSearch = chord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chord.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || chord.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || chord.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-700 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  const ChordDiagram = ({ fingers, name }: { fingers: number[], name: string }) => {
    const frets = 5;
    const strings = 6;

    return (
      <div className="flex flex-col items-center bg-muted/30 p-4 rounded-lg">
        <div className="mb-2 font-semibold text-sm">{name}</div>
        <div className="relative">
          {/* Fret numbers */}
          <div className="flex justify-between w-24 mb-2">
            {fingers.map((finger, index) => (
              <div key={index} className="text-xs text-center w-3">
                {finger === 0 ? "○" : finger}
              </div>
            ))}
          </div>
          
          {/* Guitar neck diagram */}
          <div className="border-t-4 border-foreground">
            {Array.from({ length: frets }).map((_, fretIndex) => (
              <div key={fretIndex} className="flex border-b border-muted-foreground/30">
                {Array.from({ length: strings }).map((_, stringIndex) => (
                  <div 
                    key={stringIndex} 
                    className="w-4 h-4 border-r border-muted-foreground/30 last:border-r-0 relative"
                  >
                    {fingers[stringIndex] === fretIndex + 1 && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            Chord Library
          </h1>
          <p className="text-xl text-muted-foreground">
            Master guitar chords with interactive diagrams and detailed fingering guides
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card/50 backdrop-blur rounded-lg border border-border/50">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search chords..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Difficulty" />
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
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Major">Major</SelectItem>
              <SelectItem value="Minor">Minor</SelectItem>
              <SelectItem value="Barre">Barre</SelectItem>
              <SelectItem value="Extended">Extended</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <p className="text-muted-foreground mb-6">
          Showing {filteredChords.length} chords
        </p>

        {/* Chords Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredChords.map((chord, index) => (
            <Card 
              key={chord.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className={getDifficultyColor(chord.difficulty)}>
                    {chord.difficulty}
                  </Badge>
                  <div className="text-2xl font-bold text-primary">
                    {chord.symbol}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {chord.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{chord.category}</p>
              </CardHeader>
              
              <CardContent>
                <ChordDiagram fingers={chord.fingers} name={chord.symbol} />
                <p className="text-sm text-muted-foreground mt-4 mb-4">
                  {chord.description}
                </p>
                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  <Play className="h-4 w-4 mr-2" />
                  Play Chord
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredChords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No chords found matching your search criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Chords;
