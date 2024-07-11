"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
