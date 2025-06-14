'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { validateIranianPhone, formatIranianPhone } from '@/utils/validation';
import { ApiResponse } from '@/types/user';
import styles from './auth.module.scss';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatIranianPhone(value);
    setPhone(formattedValue);
    
    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!validateIranianPhone(phone)) {
      setPhoneError('شماره تلفن وارد شده معتبر نیست');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data: ApiResponse = await response.json();
      
      if (data.results && data.results.length > 0) {
        login(data.results[0]);
        router.push('/dashboard');
      } else {
        throw new Error('No user data received');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('خطا در ورود. لطفا دوباره تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>ورود به سیستم</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="شماره تلفن"
            type="tel"
            placeholder="09xx xxx xxxx"
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
            required
          />
          <Button
            type="submit"
            disabled={!phone || isLoading}
            loading={isLoading}
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}
