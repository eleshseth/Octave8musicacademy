import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import Index from './pages/Index';
import Tabs from './pages/Tabs';
import Tutorials from './pages/Tutorials';
import Chords from './pages/Chords';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Courses from './pages/Courses';

const queryClient = new QueryClient();

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-primary'></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/tabs' element={<Tabs />} />
      <Route path='/tutorials' element={<Tutorials />} />
      <Route path='/chords' element={<Chords />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/register' element={<Register />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
