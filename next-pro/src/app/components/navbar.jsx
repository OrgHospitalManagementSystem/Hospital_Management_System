"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Profile", path: "/profile" },
  { name: "User Profile", path: "/userProfile" },
  { name: "Admin Dashboard", path: "/adminDashbord" },
  { name: "Payment", path: "/Payment" },
  { name: "doctorDashboard", path: "/doctorDashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-bold">🏥 Hospital System</h1>
        <ul className="flex flex-wrap items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-white hover:underline ${
                  pathname === link.path ? "font-bold underline" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
