"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
  { name: "Book Appointment", path: "/patient/book" },
  { name: "Chat", path: "/chat" },  // Add chat link here
  { name: "Video Call", path: "/video-call" },   // Video Call link
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const isHiddenPage =
    pathname?.startsWith("/adminDashboard") ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname?.startsWith("/doctorDashboard");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const getUserData = async () => {
      try {
        const res = await fetch("/api/current-user");
        if (!res.ok) {
          setCurrentUser(null);
          return;
        }
        const data = await res.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setCurrentUser(null);
      }
    };

    getUserData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      if (data.message === 'Logged out successfully') {    // Redirect to login page after successful logout
        window.location.href = '/';
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  
  

  if (!mounted) return null;

  if (isHiddenPage) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#415A80]"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-[#415A80]" : "text-white"
                }`}
              >
                <span className="mr-2">🏥</span> SmiloClinic
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
                          ? "bg-[#A5D4DC] text-[#415A80] font-semibold"
                          : "bg-white text-[#415A80] font-semibold"
                        : scrolled
                        ? "text-[#415A80] hover:bg-[#E5E7E9]"
                        : "text-white hover:bg-[#334766]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login / Profile for logged-in users */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <>
                {/* Show user name and profile */}
                <span
                  className={`text-sm font-medium ${
                    scrolled ? "text-[#415A80]" : "text-white"
                  }`}
                >
                  {currentUser.name || "User"}
                </span>
                <Link
                  href="/profile"
                  className={`p-1 rounded-full transition-colors ${
                    scrolled ? "bg-[#A5D4DC]" : "bg-white"
                  }`}
                >
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-[#415A80] font-bold">
                    U
                  </div>
                </Link>
                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[#415A80] hover:bg-[#E5E7E9]"
                      : "text-white hover:bg-[#334766]"
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-[#415A80] hover:bg-[#E5E7E9]"
                      : "text-white hover:bg-[#334766]"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? "bg-[#415A80] text-white hover:bg-[#334766]"
                      : "bg-white text-[#415A80] hover:bg-[#E5E7E9]"
                  }`}
                >
                  Register
                </Link>
              </>
            )}

            {/* Admin link */}
            <div className="h-5 w-px bg-gray-200"></div>
            {/* <Link
              href="/adminDashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[#415A80] hover:bg-[#E5E7E9]"
                  : "text-white hover:bg-[#334766]"
              }`}
            >
              Admin
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 ${
                scrolled
                  ? "text-[#415A80] hover:bg-[#E5E7E9]"
                  : "text-white hover:bg-[#334766]"
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
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-4 pb-3 pt-2 bg-white border-t border-[#D7E2E9] shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.path
                  ? "bg-[#A5D4DC] text-[#415A80] font-semibold"
                  : "text-[#415A80] hover:bg-[#E5E7E9]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Logout or Login */}
          <div className="pt-4 pb-3 border-t border-[#D7E2E9]">
            <div className="flex flex-col space-y-3">
              {currentUser ? (
                <div className="flex flex-col space-y-3 px-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-[#A5D4DC] flex items-center justify-center text-[#415A80] font-bold">
                        U
                      </div>
                      <div className="ml-3 text-base font-medium text-[#415A80]">
                        {currentUser.name || "User"}
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="px-3 py-2 rounded-md text-sm font-medium bg-[#415A80] text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 rounded-md text-sm font-medium bg-[#415A80] text-white"
                    // onClick={() => setMobileMenuOpen(false)}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}