import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  Play,
  Pause,
  Star,
  Download,
  Heart,
  Share2,
  Clock,
  User,
  Music,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample tab data - in a real app this would come from your API
const tabsData = {
  1: {
    id: 1,
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    difficulty: 'Intermediate',
    rating: 4.9,
    duration: '8:02',
    genre: 'Rock',
    tuning: 'Standard',
    bpm: 82,
    capo: 'No Capo',
    key: 'A Minor',
    tabContent: `
E|--0---0---0---0---0---0---0---0---|
B|--1---1---1---1---1---1---1---1---|
G|--0---0---0---0---2---2---2---2---|
D|--2---2---2---2---2---2---2---2---|
A|--3---3---3---3---0---0---0---0---|
E|--x---x---x---x---x---x---x---x---|
   Am           F            C            G

Intro:
Am - F - C - G (x2)

Verse 1:
Am                    F
There's a lady who's sure
C                     G
All that glitters is gold
Am                    F
And she's buying a stairway
C          G
To heaven

[Continue with full tab notation...]
    `,
    description:
      'Classic rock masterpiece by Led Zeppelin. This tab includes the acoustic intro, electric solos, and complete song structure.',
    chords: ['Am', 'F', 'C', 'G', 'Dm', 'Em'],
    techniques: ['Fingerpicking', 'Hammer-ons', 'Pull-offs', 'Bends'],
    views: 15420,
    likes: 892,
  },
  2: {
    id: 2,
    title: 'Wonderwall',
    artist: 'Oasis',
    difficulty: 'Beginner',
    rating: 4.7,
    duration: '4:18',
    genre: 'Pop Rock',
    tuning: 'Standard',
    bpm: 87,
    capo: 'Capo 2nd fret',
    key: 'G Major',
    tabContent: `
Capo 2nd fret

Chords used:
Em7   G    D    C    Am7  Cadd9

Em7: 022030
G:   320003
D:   xx0232
C:   x32010
Am7: x02010
Cadd9: x32030

Verse:
Em7          G           D           C
Today is gonna be the day that they're gonna throw it back to you
Em7          G           D           C
By now you should've somehow realized what you gotta do

[Continue with full tab notation...]
    `,
    description:
      'Popular song by Oasis, perfect for beginners learning basic open chords and strumming patterns.',
    chords: ['Em7', 'G', 'D', 'C', 'Am7', 'Cadd9'],
    techniques: ['Open chords', 'Strumming patterns', 'Capo use'],
    views: 23150,
    likes: 1205,
  },
};

const TabView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const tab =
    tabsData[parseInt(id || '1') as keyof typeof tabsData] || tabsData[1];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Intermediate':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Advanced':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <div className='bg-muted/20 min-h-screen pt-8'>
        <div className='container mx-auto px-4 py-8'>
          {/* Back Button */}
          <Button
            variant='ghost'
            onClick={() => navigate('/tabs')}
            className='mb-6 hover:text-customGreen'>
            <ArrowLeft className='h-4 w-4 mr-2' />
            Back to Tabs
          </Button>

          {/* Tab Header */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            {/* Main Info */}
            <div className='lg:col-span-2'>
              <Card className='bg-card/50 backdrop-blur border-border/50'>
                <CardHeader>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                    <div>
                      <CardTitle className='text-3xl font-bold text-customGreen mb-2'>
                        {tab.title}
                      </CardTitle>
                      <p className='text-xl text-muted-foreground mb-4'>
                        by {tab.artist}
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        <Badge
                          variant='outline'
                          className={getDifficultyColor(tab.difficulty)}>
                          {tab.difficulty}
                        </Badge>
                        <Badge
                          variant='outline'
                          className='bg-blue-500/10 text-blue-500'>
                          {tab.genre}
                        </Badge>
                        <div className='flex items-center text-sm text-muted-foreground'>
                          <Star className='h-4 w-4 text-yellow-500 mr-1' />
                          {tab.rating} ({tab.views} views)
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex flex-col gap-2'>
                      <Button
                        onClick={handlePlayToggle}
                        className='bg-customGreen hover:bg-customGreen/90 text-primary-foreground'>
                        {isPlaying ? (
                          <>
                            <Pause className='h-4 w-4 mr-2' />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className='h-4 w-4 mr-2' />
                            Play Along
                          </>
                        )}
                      </Button>
                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={handleLikeToggle}
                          className={
                            isLiked ? 'text-red-500 border-red-500' : ''
                          }>
                          <Heart
                            className={`h-4 w-4 ${
                              isLiked ? 'fill-current' : ''
                            }`}
                          />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Share2 className='h-4 w-4' />
                        </Button>
                        <Button variant='outline' size='sm'>
                          <Download className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Song Details */}
            <div>
              <Card className='bg-card/50 backdrop-blur border-border/50'>
                <CardHeader>
                  <CardTitle className='text-lg'>Song Details</CardTitle>
                </CardHeader>
                <CardContent className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Duration:</span>
                    <span>{tab.duration}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Tuning:</span>
                    <span>{tab.tuning}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Capo:</span>
                    <span>{tab.capo}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Key:</span>
                    <span>{tab.key}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>BPM:</span>
                    <span>{tab.bpm}</span>
                  </div>
                  <Separator />
                  <div>
                    <p className='text-sm font-semibold mb-2'>Main Chords:</p>
                    <div className='flex flex-wrap gap-1'>
                      {tab.chords.map((chord) => (
                        <Badge
                          key={chord}
                          variant='secondary'
                          className='text-xs'>
                          {chord}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className='text-sm font-semibold mb-2'>Techniques:</p>
                    <div className='flex flex-wrap gap-1'>
                      {tab.techniques.map((technique) => (
                        <Badge
                          key={technique}
                          variant='outline'
                          className='text-xs'>
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tab Content */}
          <Card className='bg-card/50 backdrop-blur border-border/50 mb-8'>
            <CardHeader>
              <CardTitle className='text-xl'>Guitar Tab</CardTitle>
              <p className='text-muted-foreground'>{tab.description}</p>
            </CardHeader>
            <CardContent>
              <div className='bg-black/5 dark:bg-white/5 rounded-lg p-6 overflow-x-auto'>
                <pre className='text-sm font-mono text-customGreen whitespace-pre'>
                  {tab.tabContent}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Additional Actions */}
          <div className='text-center'>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button variant='outline' className='hover:text-customGreen'>
                <Music className='h-4 w-4 mr-2' />
                View Chord Charts
              </Button>
              <Button variant='outline' className='hover:text-customGreen'>
                <User className='h-4 w-4 mr-2' />
                More from {tab.artist}
              </Button>
              <Button variant='outline' className='hover:text-customGreen'>
                <Clock className='h-4 w-4 mr-2' />
                Practice Mode
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TabView;
