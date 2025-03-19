"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import useIsClient from "../_hooks/useIsClient";
import { FaCalendar } from "react-icons/fa";

export default function Navbar() {
  const isClient = useIsClient();

  return (
    <nav className="bg-primary text-neutralWhite shadow-lg sticky top-0 z-10">
      <div className="container flex justify-evenly mx-auto px-5 py-3 items-center">
        <button
          className="md:hidden block text-neutralWhite focus:outline-none"
          id="menu-toggle"
        >
          ☰
        </button>
        <div className="hidden md:flex justify-around space-x-12" id="menu">
          <Link href="/" className="hover:text-secondaryGreen">
            Home
          </Link>
          <Link href="/about" className="hover:text-secondaryGreen">
            About Us
          </Link>
          <Link href="/services" className="hover:text-secondaryGreen">
            Services
          </Link>
          <Link href="/specialities" className="hover:text-secondaryGreen">
            Specialities
          </Link>
          <Link href="/media" className="hover:text-secondaryGreen">
            Media
          </Link>
          <Link href="/contact" className="hover:text-secondaryGreen">
            Contact
          </Link>
        </div>
        {isClient && (
          <Link href="/appointment">
            <button className="text-accentDarkBlue bg-neutralWhite ml-1 p-1 px-3 rounded flex items-center gap-3">
              <FaCalendar />
              <span>Make Appointment</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
