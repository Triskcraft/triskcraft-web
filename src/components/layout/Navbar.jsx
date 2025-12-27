'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-colorsecundaro text-black dark:text-white font-bold p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="hover:text-gray-400 transition-colors">
          <Image
            src="/Triskcraft_logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>
      </div>
      <button
        className="md:hidden block text-black dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
      </button>

      <nav
        className={`absolute md:static top-24 left-0 w-full md:w-auto bg-colorsecundaro md:bg-transparent 
        md:flex text-2xl md:space-x-6 p-4 md:p-0 transition-transform transform ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center space-x-12 space-y-4 md:space-y-0">
          <li className="hover:scale-105">
            <Link href="/" className="hover:text-triskyellow transition-colors">
              Inicio
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              href="/Nosotros"
              className="hover:text-triskyellow transition-colors"
            >
              Nosotros
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              href="/Proyectos"
              className="hover:text-triskyellow transition-colors"
            >
              Proyectos
            </Link>
          </li>
          <li className="hover:scale-105">
            <Link
              href="/Miembros"
              className="hover:text-triskyellow  transition-colors"
            >
              Miembros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
