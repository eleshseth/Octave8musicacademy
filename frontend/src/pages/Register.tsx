import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Guitar, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match.',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long.',
        variant: 'destructive',
      });
      setLoading(false);
      return;
    }

    const success = await signup(
      formData.name,
      formData.email,
      formData.password
    );

    if (success) {
      toast({
        title: 'Account created!',
        description:
          'Your account has been created successfully and you are now logged in.',
      });
      navigate('/');
    } else {
      toast({
        title: 'Error',
        description: 'Failed to create account. Please try again.',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Link to='/' className='inline-flex items-center space-x-2 group'>
           <img
             src='/assets/logo.png'
             alt='Octave8 Music Academy Logo'
             className='h-10 w-10 text-primary transition-transform group-hover:rotate-12'
           />
            <span className='text-3xl font-bold bg-customGreen bg-clip-text text-transparent'>
              octave8 Music Academy
            </span>
          </Link>
          <h1 className='text-2xl font-bold mt-6 mb-2'>Create Account</h1>
          <p className='text-muted-foreground'>
            Join thousands of guitar learners today
          </p>
        </div>

        <div className='bg-card border border-border rounded-lg p-6 shadow-lg'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your full name'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <div className='relative'>
                <Input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Create a password'
                  required
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className='h-4 w-4' />
                  ) : (
                    <Eye className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <div className='relative'>
                <Input
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm your password'
                  required
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='sm'
                  className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <EyeOff className='h-4 w-4' />
                  ) : (
                    <Eye className='h-4 w-4' />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type='submit'
              className='w-full bg-customGreen hover:bg-customGreen/90 text-primary-foreground'
              disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className='mt-6 text-center text-sm'>
            <span className='text-muted-foreground'>
              Already have an account?{' '}
            </span>
            <Link
              to='/signin'
              className='text-primary hover:underline font-medium'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
