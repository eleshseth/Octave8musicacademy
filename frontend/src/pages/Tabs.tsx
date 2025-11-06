import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Star, Clock, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allTabs = [
  {
    id: 1,
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    difficulty: 'Intermediate',
    rating: 4.9,
    duration: '8:02',
    genre: 'Rock',
    tuning: 'Standard',
  },
  {
    id: 2,
    title: 'Wonderwall',
    artist: 'Oasis',
    difficulty: 'Beginner',
    rating: 4.7,
    duration: '4:18',
    genre: 'Pop Rock',
    tuning: 'Standard',
  },
  {
    id: 3,
    title: 'Hotel California',
    artist: 'Eagles',
    difficulty: 'Advanced',
    rating: 4.8,
    duration: '6:30',
    genre: 'Classic Rock',
    tuning: 'Standard',
  },
  {
    id: 4,
    title: 'Blackbird',
    artist: 'The Beatles',
    difficulty: 'Intermediate',
    rating: 4.6,
    duration: '2:18',
    genre: 'Folk Rock',
    tuning: 'Standard',
  },
  {
    id: 5,
    title: 'Master of Puppets',
    artist: 'Metallica',
    difficulty: 'Advanced',
    rating: 4.9,
    duration: '8:36',
    genre: 'Metal',
    tuning: 'E Standard',
  },
  {
    id: 6,
    title: 'Tears in Heaven',
    artist: 'Eric Clapton',
    difficulty: 'Intermediate',
    rating: 4.5,
    duration: '4:32',
    genre: 'Blues',
    tuning: 'Standard',
  },
];

const Tabs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const filteredTabs = allTabs.filter((tab) => {
    const matchesSearch =
      tab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tab.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === 'all' || tab.difficulty === selectedDifficulty;
    const matchesGenre = selectedGenre === 'all' || tab.genre === selectedGenre;

    return matchesSearch && matchesDifficulty && matchesGenre;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-700 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 border-gray-500/30';
    }
  };

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Main content with same background as tutorial section */}
      <div className='bg-muted/20 min-h-screen pt-8'>
        <div className='container mx-auto px-4 py-8'>
          <div className='mb-8'>
            <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent'>
              Guitar Tabs Library
            </h1>
            <p className='text-xl text-muted-foreground'>
              Discover and master thousands of guitar tabs from your favorite
              artists
            </p>
          </div>

          {/* Search and Filters */}
          <div className='flex flex-col md:flex-row gap-4 mb-8 p-6 bg-card/50 backdrop-blur rounded-lg border border-border/50'>
            <div className='relative flex-1'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
              <Input
                placeholder='Search by song title or artist...'
                className='pl-10'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Select
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}>
              <SelectTrigger className='w-full md:w-48'>
                <Filter className='h-4 w-4 mr-2' />
                <SelectValue placeholder='Difficulty' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Levels</SelectItem>
                <SelectItem value='Beginner'>Beginner</SelectItem>
                <SelectItem value='Intermediate'>Intermediate</SelectItem>
                <SelectItem value='Advanced'>Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className='w-full md:w-48'>
                <SelectValue placeholder='Genre' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Genres</SelectItem>
                <SelectItem value='Rock'>Rock</SelectItem>
                <SelectItem value='Pop Rock'>Pop Rock</SelectItem>
                <SelectItem value='Classic Rock'>Classic Rock</SelectItem>
                <SelectItem value='Folk Rock'>Folk Rock</SelectItem>
                <SelectItem value='Metal'>Metal</SelectItem>
                <SelectItem value='Blues'>Blues</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <p className='text-muted-foreground mb-6'>
            Showing {filteredTabs.length} tabs
          </p>

          {/* Tabs Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredTabs.map((tab, index) => (
              <Card
                key={tab.id}
                className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in'
                style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start mb-2'>
                    <Badge
                      variant='outline'
                      className={getDifficultyColor(tab.difficulty)}>
                      {tab.difficulty}
                    </Badge>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <Star className='h-4 w-4 text-yellow-500 mr-1' />
                      {tab.rating}
                    </div>
                  </div>
                  <CardTitle className='text-lg group-hover:text-customGreen transition-colors'>
                    {tab.title}
                  </CardTitle>
                  <p className='text-muted-foreground'>{tab.artist}</p>
                </CardHeader>

                <CardContent>
                  <div className='space-y-2 mb-4'>
                    <div className='flex justify-between text-sm text-muted-foreground'>
                      <span className='flex items-center'>
                        <Clock className='h-4 w-4 mr-1' />
                        {tab.duration}
                      </span>
                      <span>{tab.genre}</span>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Tuning: {tab.tuning}
                    </div>
                  </div>
                  <Button
                    variant='outline'
                    className='w-full group-hover:bg-customGreen group-hover:text-primary-foreground transition-colors'>
                    View Tab
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTabs.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-xl text-muted-foreground'>
                No tabs found matching your search criteria.
              </p>
              <p className='text-muted-foreground mt-2'>
                Try adjusting your filters or search term.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tabs;
