'use client'

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import {useRouter} from 'next/navigation';
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const  router=useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <main className="h-screen">
      {showSplash ? <SplashScreen /> : router.push('/login')}
    </main>
  );
}