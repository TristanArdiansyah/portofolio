'use client';

import styles from '../../styles/mobileMenu.module.css';
// import { useEffect } from 'react';
import cn from 'classnames';
import useMenuNav from '@/hooks/useMenuNav';
import LinksMenuNav from './LinksMenuNav';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => {

  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}>
      <path
        d='M2.5 7.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 12.5H17.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => {
  return (
    <svg
      className='h-5 w-5 absolute text-gray-100'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}>
      <path d='M18 6L6 18' />
      <path d='M6 6l12 12' />
    </svg>
  );
}

const MobileMenuNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  const { isMenuOpen, toggleMenu } = useMenuNav();

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible lg:hidden border')}
        aria-label='Toggle menu'
        type='button'
        onClick={toggleMenu}>

        <MenuIcon data-hide={isMenuOpen} />

        <CrossIcon data-hide={!isMenuOpen} />

      </button>
      {
        isMenuOpen && (
          <ul
            className={cn(
              styles.menu,
              'flex flex-col items-start justify-center absolute right-0 backdrop-blur-sm bg-black/20 text-end p-5 rounded-br-2xl mr-5',
              styles.menuRendered
            )}>

            <LinksMenuNav />

          </ul>
        )
      }
            <button
        onClick={toggleTheme}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-primary)',
          color: 'var(--text-primary)'
        }}
        className={clsx(
          'lg:hidden relative inline-flex h-[44px] w-[44px] items-center justify-center rounded-full',
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
    </>
  );
}

export default MobileMenuNav;