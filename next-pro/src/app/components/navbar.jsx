


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
  { name: "Book Appointment", path: "/patient/book" },
  { name: "My Appointments", path: "/patient/my-appointments" },
  { name: "Chat", path: "/chat" },  // إضافة رابط الشات هنا
  { name: "Video Call", path: "/video-call" },   // ✅ رابط الفيديو كول

];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if current path is admin dashboard, login, or register
  const isHiddenPage = pathname?.startsWith('/adminDashboard') || 
                        pathname === '/login' || 
                        pathname === '/register';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Prevent hydration issues
  if (!mounted) return null;
  
  // في صفحات لوحة التحكم أو تسجيل الدخول والتسجيل لا يُعرض الـ Navbar
  if (isHiddenPage) {
    return null;
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-[#415A80]'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className={`text-xl font-bold ${scrolled ? 'text-[#415A80]' : 'text-white'}`}>
                <span className="mr-2">🏥</span> Health Clinic
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.path 
                        ? scrolled 
                          ? 'bg-[#A5D4DC] text-[#415A80] font-semibold' 
                          : 'bg-white text-[#415A80] font-semibold'
                        : scrolled 
                          ? 'text-[#415A80] hover:bg-[#E5E7E9]' 
                          : 'text-white hover:bg-[#334766]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth & Admin Links */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled ? 'text-[#415A80] hover:bg-[#E5E7E9]' : 'text-white hover:bg-[#334766]'
                }`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled ? 'bg-[#415A80] text-white hover:bg-[#334766]' : 'bg-white text-[#415A80] hover:bg-[#E5E7E9]'
                }`}
              >
                Register
              </Link>
            </div>
            <div className="h-5 w-px bg-gray-200"></div>
            <Link
              href="/adminDashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled ? 'text-[#415A80] hover:bg-[#E5E7E9]' : 'text-white hover:bg-[#334766]'
              }`}
            >
              Admin
            </Link>
            <Link
              href="/profile"
              className={`p-1 rounded-full transition-colors ${scrolled ? 'bg-[#A5D4DC]' : 'bg-white'}`}
            >
              <div className="h-8 w-8 rounded-full bg-[#A5D4DC] flex items-center justify-center text-[#415A80] font-bold">
                U
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                scrolled ? 'text-[#415A80] hover:bg-[#E5E7E9]' : 'text-white hover:bg-[#334766]'
              }`}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-4 pb-3 pt-2 bg-white border-t border-[#D7E2E9] shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path
                  ? 'bg-[#A5D4DC] text-[#415A80] font-semibold'
                  : 'text-[#415A80] hover:bg-[#E5E7E9]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-[#D7E2E9]">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between px-3">
                <Link
                  href="/login"
                  className="w-full px-3 py-2 rounded-md text-base font-medium text-[#415A80] hover:bg-[#E5E7E9] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
              <div className="flex items-center justify-between px-3">
                <Link
                  href="/register"
                  className="w-full px-3 py-2 rounded-md text-base font-medium bg-[#415A80] text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
              <div className="border-t border-[#D7E2E9] pt-3 mt-1">
                <div className="flex items-center justify-between px-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-[#A5D4DC] flex items-center justify-center text-[#415A80] font-bold">
                      U
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-[#415A80]">User Profile</div>
                    </div>
                  </div>
                  <Link
                    href="/adminDashboard"
                    className="px-3 py-2 rounded-md text-sm font-medium bg-[#415A80] text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}