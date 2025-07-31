
import { Guitar, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
            <img
                src="../assets/logo.png"
                alt="logo"
                width={50}
                height={30}
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold bg-customGreen bg-clip-text text-transparent">
               octave8 Music Academy
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate platform for guitar learning. Master your favorite songs with professional tabs, 
              interactive tutorials, and comprehensive chord libraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-customGreen transition-colors">Tutorials</Link></li>
              <li><Link to="/tabs" className="text-muted-foreground hover:text-customGreen transition-colors">Guitar Tabs</Link></li>
              <li><Link to="/chords" className="text-muted-foreground hover:text-customGreen transition-colors">Chord Library</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-customGreen transition-colors">Scales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-customGreen transition-colors">Forums</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-customGreen transition-colors">Submit Tabs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-customGreen transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-customGreen transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GuitarMaster. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-customGreen transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-customGreen transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-customGreen transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
