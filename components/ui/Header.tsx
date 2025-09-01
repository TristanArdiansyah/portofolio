import Link from 'next/link';
import HeaderAnimation from '../utils/HeaderAnimation';
import MobileMenuNav from './MobileMenuNav';
import NavItem from './NavItem';

const Header = () => {
  return (
    <HeaderAnimation>
      <nav 
        className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-10/12 lg:max-w-screen-md flex items-center justify-between flex-row px-6 py-3 border border-white/30 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 gap-5 lg:gap-0'
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      >
        <div className='flex justify-between gap-5 relative items-center'>
          <img
            src="/android-chrome-192x192.png"
            alt="Bioma logo"
            className="w-10 h-10 rounded-md object-contain flex-shrink-0"
          />
          <h1>
            <Link href='/' >
              <strong></strong>
            </Link>
          </h1>
        </div>

        <div className='ml-[-0.80rem]'>
          <MobileMenuNav />
          <NavItem />
        </div>
      </nav>
    </HeaderAnimation>
  )
}

export default Header;