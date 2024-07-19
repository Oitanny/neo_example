'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/navigation';

export default function LoginPage() {
  const router=useRouter()
  const handleSubmit = () => {
    router.push("/dashboard");
  };
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: '/slide1.jpeg', heading: 'Welcome', subheading: 'Start your journey with us' },
    { image: '/slide2.png', heading: 'Discover', subheading: 'Explore new possibilities' },
    { image: '/slide3.png', heading: 'Connect', subheading: 'Join our community today' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    {/* Left column - Login form */}
    <div className="w-full md:w-1/2 flex flex-col bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 md:py-0">
      <div className="mb-8 md:mt-8 md:ml-8 flex flex-row items-center">
        <Image
         
          src="/logo.png"
          alt="Your Company"
          width={75}
          height={75}
        />
        <h2 className='text-lg font-semibold'>neodonya</h2>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your email to sign in to the app
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#EE6C4D] focus:border-[#EE6C4D] focus:z-10 sm:text-sm"
                  placeholder="email@domain.com"
                />
              </div>
            </div>

            <div>
              <button
              onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#EE6C4D] hover:bg-[#D55C40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE6C4D]"
              >
                Sign In with Email
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="flex flex-row w-full justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <Image 
                src={"/google_icon.png"}
                width={20}
                height={20}
                
                />
                <span className='ml-3'>Google</span>
              </button>
            </div>
          </div>

          {/* <p className="mt-2 text-center text-sm text-gray-600">
            By clicking continue, you agree to our{' '}
            <Link href="/terms" className="font-medium text-[#EE6C4D] hover:text-[#D55C40]">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="font-medium text-[#EE6C4D] hover:text-[#D55C40]">
              Privacy Policy
            </Link>
          </p> */}

          <p className="mt-4 text-center text-sm text-gray-600">
            New to neodonya?{' '}
            <Link href="/signup" className="font-medium text-[#EE6C4D] hover:text-[#D55C40]">
              Sign Up instead
            </Link>
          </p>
        </div>
      </div>
    </div>

    {/* Right column - Slider */}
    <div className="w-full md:w-1/2 bg-[#EE6C4D] flex flex-col justify-center items-center text-white py-8 md:py-0">
    <div className="relative w-3/4 h-1/2 md:h-1/2 mb-14 rounded-lg overflow-hidden">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Image
        src={slide.image}
        alt={slide.heading}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
  ))}
</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{slides[currentSlide].heading}</h2>
      <p className="text-lg md:text-xl text-center px-4">{slides[currentSlide].subheading}</p>
      <div className="mt-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-[#F08C74]'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  </div>

  );
}