import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Play } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Basic Guitar Course',
      description:
        'Master the fundamentals of guitar playing with step-by-step lessons covering chords, strumming patterns, and basic techniques.',
      image:
        'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&h=300&fit=crop&crop=center',
      duration: '12 weeks',
      level: 'Beginner',
      students: '2,543',
      rating: '4.9',
      price: '$99',
      features: [
        'Basic chord progressions',
        'Strumming techniques',
        'Music reading basics',
        '10+ popular songs',
      ],
    },
    {
      id: 2,
      title: 'Music Theory Course',
      description:
        'Understand the language of music with comprehensive theory lessons covering scales, harmony, rhythm, and composition fundamentals.',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop&crop=center',
      duration: '16 weeks',
      level: 'Intermediate',
      students: '1,876',
      rating: '4.8',
      price: '$149',
      features: [
        'Scales and modes',
        'Chord construction',
        'Harmonic analysis',
        'Composition basics',
      ],
    },
    {
      id: 3,
      title: 'Violin Course',
      description:
        'Learn the elegant art of violin playing from proper bow technique to beautiful melodies with our structured curriculum.',
      image:
        'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=500&h=300&fit=crop&crop=center',
      duration: '20 weeks',
      level: 'Beginner',
      students: '1,234',
      rating: '4.7',
      price: '$179',
      features: [
        'Proper posture & hold',
        'Bow techniques',
        'Scale practice',
        'Classical pieces',
      ],
    },
    {
      id: 4,
      title: 'Flute Course',
      description:
        'Discover the beautiful sounds of the flute with lessons on breath control, embouchure, and playing techniques for all skill levels.',
      image:
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop&crop=center',
      duration: '14 weeks',
      level: 'Beginner',
      students: '892',
      rating: '4.6',
      price: '$129',
      features: [
        'Breath control',
        'Embouchure technique',
        'Finger positions',
        'Classical & modern pieces',
      ],
    },
    {
      id: 5,
      title: 'Classical Guitar Course',
      description:
        'Explore the sophisticated world of classical guitar with fingerstyle techniques, classical repertoire, and advanced musical expression.',
      image:
        'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=300&fit=crop&crop=center',
      duration: '18 weeks',
      level: 'Advanced',
      students: '567',
      rating: '4.9',
      price: '$199',
      features: [
        'Fingerstyle technique',
        'Classical repertoire',
        'Music interpretation',
        'Advanced harmony',
      ],
    },
    {
      id: 6,
      title: 'Drum Course',
      description:
        'Master the rhythm and power of drums with comprehensive lessons covering basic beats, fills, and advanced drumming techniques.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&crop=center',
      duration: '15 weeks',
      level: 'Beginner',
      students: '1,456',
      rating: '4.8',
      price: '$159',
      features: [
        'Basic drum beats',
        'Stick techniques',
        'Fill patterns',
        'Rock & jazz styles',
      ],
    },
    {
      id: 7,
      title: 'Songwriting Course',
      description:
        'Unleash your creativity and learn the art of crafting compelling songs with melody, lyrics, chord progressions, and song structure.',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop&crop=center',
      duration: '12 weeks',
      level: 'Intermediate',
      students: '934',
      rating: '4.7',
      price: '$139',
      features: [
        'Lyric writing',
        'Melody composition',
        'Chord progressions',
        'Song structure',
      ],
    },
    {
      id: 8,
      title: 'Keyboard Course',
      description:
        'Learn to play piano and keyboard with proper technique, scales, chords, and beautiful pieces from classical to contemporary styles.',
      image:
        'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&h=300&fit=crop&crop=center',
      duration: '16 weeks',
      level: 'Beginner',
      students: '2,189',
      rating: '4.9',
      price: '$169',
      features: [
        'Proper hand position',
        'Scales & arpeggios',
        'Chord progressions',
        'Classical & pop pieces',
      ],
    },
    {
      id: 9,
      title: 'Guitar Crash Course',
      description:
        'Fast-track your guitar skills with an intensive course designed to get you playing your favorite songs in just 4 weeks.',
      image:
        'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=500&h=300&fit=crop&crop=center',
      duration: '4 weeks',
      level: 'Beginner',
      students: '3,245',
      rating: '4.8',
      price: '$79',
      features: [
        'Essential chords',
        'Quick song learning',
        'Strumming patterns',
        'Popular songs',
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
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

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Main content with same background as tutorial section */}
      <div className='bg-muted/20 min-h-screen pt-8'>
        <div className='container mx-auto px-4 py-8'>
          <div className='mb-8'>
            <h1 className='text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent text-center'>
              Music Courses
            </h1>
            <p className='text-xl text-muted-foreground text-center'>
              Master your musical journey with our comprehensive courses
              designed for all skill levels
            </p>
          </div>

          {/* Courses Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur border-border/50 animate-fade-in'
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='relative overflow-hidden rounded-t-lg'>
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute top-4 right-4'>
                    <Badge
                      variant='outline'
                      className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Button
                      size='lg'
                      className='rounded-full bg-white w-16 h-16 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hover:bg-customGreen'>
                      <Play className='h-8 w-8 ml-1 text-customGreen' />
                    </Button>
                  </div>
                </div>

                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start mb-2'>
                    <span className='text-2xl font-bold text-customGreen'>
                      {course.price}
                    </span>
                    <div className='flex items-center text-sm text-muted-foreground'>
                      <Star className='h-4 w-4 text-yellow-500 mr-1' />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className='text-lg group-hover:text-customGreen transition-colors'>
                    {course.title}
                  </CardTitle>
                  <p className='text-sm text-muted-foreground mt-2'>
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className='flex justify-between text-sm text-muted-foreground mb-4'>
                    <span className='flex items-center'>
                      <Clock className='h-4 w-4 mr-1' />
                      {course.duration}
                    </span>
                    <span className='flex items-center'>
                      <Users className='h-4 w-4 mr-1' />
                      {course.students} students
                    </span>
                  </div>

                  <div className='space-y-2 mb-4'>
                    <h4 className='text-sm font-semibold'>
                      What you'll learn:
                    </h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      {course.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center'>
                          <div className='w-1.5 h-1.5 bg-customGreen rounded-full mr-2' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className='w-full bg-customGreen hover:bg-customGreen/90 text-primary-foreground transition-colors'>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className='mt-16 text-center bg-card/50 backdrop-blur border border-border/50 rounded-lg p-8'>
            <h2 className='text-2xl font-bold mb-4'>
              Ready to Start Your Musical Journey?
            </h2>
            <p className='text-muted-foreground mb-6'>
              Join thousands of students who have transformed their musical
              abilities with our expert instructors
            </p>
            <Button
              size='lg'
              className='bg-customGreen hover:bg-customGreen/90 text-primary-foreground'>
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
