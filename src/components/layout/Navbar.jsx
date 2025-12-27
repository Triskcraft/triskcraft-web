'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-triskgreen via-triskmint to-triskgreen text-triskgold shadow-xl border-b border-triskgold/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="rounded-full bg-white/5 p-2 transition hover:scale-105 hover:bg-white/10">
            <Image
              src="/Triskcraft_logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
          </Link>
          <div className="hidden sm:flex flex-col leading-tight text-sm text-triskgold/80">
            <span className="uppercase tracking-[0.2em] text-xs">Triskcraft</span>
            <span className="font-semibold text-white">SMP técnico y creativo</span>
          </div>
        </div>

        <button
          className="block rounded-lg p-2 text-triskgold transition hover:bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>

        <nav
          className={`absolute left-0 top-full w-full bg-gradient-to-b from-triskgreen to-[#0a1f18] shadow-lg transition-all duration-300 md:static md:w-auto md:bg-transparent md:shadow-none md:overflow-visible ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden md:max-h-none md:opacity-100 opacity-0 md:opacity-100"
          }`}
        >
          <ul className="flex flex-col items-start gap-4 px-6 py-4 text-lg font-semibold md:flex-row md:items-center md:gap-10 md:px-0 md:py-0">
            <li className="transition hover:text-triskgold/80 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]">
              <Link href="/">Inicio</Link>
            </li>
            <li className="transition hover:text-triskgold/80 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]">
              <Link href="/Nosotros">Nosotros</Link>
            </li>
            <li className="transition hover:text-triskgold/80 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]">
              <Link href="/Proyectos">Proyectos</Link>
            </li>
            <li className="transition hover:text-triskgold/80 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]">
              <Link href="/Miembros">Miembros</Link>
            </li>
            <li>
              <a
                href="https://discord.com/invite/VJQJRZehTG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-triskgold px-4 py-2 text-triskgreen shadow-lg shadow-triskgold/30 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Únete al Discord
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
