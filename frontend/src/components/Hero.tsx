
import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const backgroundPattern = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23334155" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url('${backgroundPattern}')` }}
      ></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-customGreen bg-clip-text text-transparent animate-fade-in">
            Master the Guitar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Learn with professional tabs, interactive tutorials, and chord diagrams. 
            Your journey to guitar mastery starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8 py-6 bg-customGreen hover:from-primary/90 hover:to-orange-500/90">
              <Play className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-customGreen hover:text-black " asChild>
              <Link to="/tabs">Browse Tabs</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-2xl font-bold">10k+</span>
              </div>
              <p className="text-muted-foreground">Guitar Tabs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="h-5 w-5 text-green-500 mr-1" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-muted-foreground">Video Tutorials</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-blue-500 mr-1" />
                <span className="text-2xl font-bold">50k+</span>
              </div>
              <p className="text-muted-foreground">Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
