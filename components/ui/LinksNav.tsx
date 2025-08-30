import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { NavItemHeaderAnimation } from '@/types';

export const navItemsSelected: { [key: string]: NavItemHeaderAnimation } = {
  '/': {
    name: 'Home',
    x: 1,
    y: -3,
    w: '60px',
  },
  '/about': {
    name: 'About',
    x: 65,
    y: -3,
    w: '60px',
  },
  '/projects': {
    name: 'Projects',
    x: 130,
    y: -3,
    w: '75px',
  },
  // '/blog': {
  //   name: 'blog',
  //   x: 209,
  //   y: -3,
  //   w: '50px',
  // }
};

const LinksNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle hydration mismatch and theme initialization
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldUseDark = false;
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      shouldUseDark = savedTheme === 'dark';
    } else {
      shouldUseDark = systemPrefersDark;
    }
    
    setIsDarkMode(shouldUseDark);
    document.documentElement.setAttribute('data-theme', shouldUseDark ? 'dark' : 'light');
    
    // Save the determined theme if none was previously saved
    if (!savedTheme) {
      localStorage.setItem('theme', shouldUseDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-4">
        {Object.entries(navItemsSelected).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <Link
              key={path}
              href={path}
              className={clsx(
                'hidden lg:inline-block transition-colors duration-200 ease-in-out hover:text-neutral-600 py-[2px] px-[10px] rounded-md',
                {
                  'text-neutral-700': !isActive,
                  'font-bold text-neutral-900 bg-neutral-100': isActive,
                }
              )}
            >
              {name}
            </Link>
          );
        })}
        {/* Placeholder for theme toggle to prevent layout shift */}
        <div className="w-[44px] h-[44px]" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {Object.entries(navItemsSelected).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <Link
            key={path}
            href={path}
            style={{
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: isActive ? 'bold' : 'normal'
            }}
            className="hidden lg:inline-block transition-all duration-200 ease-in-out py-[2px] px-[10px] hover:opacity-80"
          >
            {name}
          </Link>
        );
      })}
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-primary)',
          color: 'var(--text-primary)'
        }}
        className={clsx(
          'relative inline-flex h-[44px] w-[44px] items-center justify-center rounded-full',
          'transition-all duration-200 ease-in-out border',
          'hover:scale-105 active:scale-95 hover:opacity-90',
          'focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Sun Icon (Light Mode) */}
        <svg
          className={clsx(
            'absolute h-5 w-5 transform transition-all duration-300 ease-in-out',
            isDarkMode 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon Icon (Dark Mode) */}
        <svg
          className={clsx(
            'absolute h-5 w-5 transform transition-all duration-300 ease-in-out',
            isDarkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        {/* Subtle background animation */}
        <div
          className={clsx(
            'absolute inset-0 rounded-full transition-all duration-300 ease-in-out',
            'bg-gradient-to-r opacity-0 hover:opacity-10',
            isDarkMode
              ? 'from-yellow-400 to-orange-500'
              : 'from-blue-500 to-purple-600'
          )}
        />
      </button>
    </div>
  );
};

export default LinksNav;