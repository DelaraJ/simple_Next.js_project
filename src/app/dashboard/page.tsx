'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button/Button';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>در حال بارگذاری...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1 className={styles.welcome}>
            {user.name.first} {user.name.last} عزیز، خوش آمدید!
          </h1>
          <Button onClick={handleLogout} variant="secondary">
            خروج
          </Button>
        </div>
        
        <div className={styles.userInfo}>
          <div className={styles.avatar}>
            <img src={user.picture.large} alt="User Avatar" />
          </div>
          <div className={styles.details}>
            <p><strong>نام:</strong> {user.name.first} {user.name.last}</p>
            <p><strong>ایمیل:</strong> {user.email}</p>
            <p><strong>تلفن:</strong> {user.phone}</p>
          </div>
        </div>
        
        <div className={styles.content}>
          <h2>داشبورد اصلی</h2>
          <p>به داشبورد خود خوش آمدید. اینجا می‌توانید اطلاعات خود را مشاهده کنید.</p>
        </div>
      </div>
    </div>
  );
}