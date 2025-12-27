// components/Footer.js
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaTiktok, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a1f18] via-triskgreen to-black text-triskgold py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:space-x-20 space-x-6 mb-6 text-lg font-semibold">
            <Link href="/" className="transition-colors hover:text-white">Inicio</Link>

            <Link href="/Nosotros" className="mx-4 transition-colors hover:text-white">Nosotros</Link>

            <Link href="/Proyectos" className="mx-4 transition-colors hover:text-white">Proyectos</Link>

            <Link href="/Miembros" className="mx-4 transition-colors hover:text-white">Miembros</Link>

        </div>

        <div className="mb-6 flex justify-center space-x-8 md:space-x-16">
          <a
            href="https://www.youtube.com/@Triskcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={32} className="h-8 w-8 text-triskgold hover:scale-110 hover:text-white transition duration-200" />
            </a>
          <a
            href="https://www.tiktok.com/@triskraftsmp?_t=8jfGgknsH7L&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={32} className="h-8 w-8 text-triskgold hover:scale-110 hover:text-white transition duration-200" />
            </a>
          <a
            href="https://discord.com/invite/VJQJRZehTG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={32} className="h-8 w-8 text-triskgold hover:scale-110 hover:text-white transition duration-200" />
            </a>
          <a
            href="https://x.com/TriskcraftSMP?t=Z_KsCeOccGY27ZJKZZjBhg&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaTwitter className="h-8 w-8 text-triskgold hover:scale-110 hover:text-white transition duration-200" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61556143652619&sfnsn=scwspwa&mibextid=RUbZ1f"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={32} className="h-8 w-8 text-triskgold hover:scale-110 hover:text-white transition duration-200" />

          </a>
        </div>

        <div className="text-center text-sm text-white/80">
            <p>&copy; {new Date().getFullYear()} Triskcraft. Todos los derechos reservados.</p>
            <p className="mt-1">
            Sitio diseñado y desarrollado por <a href="https://github.com/TheVugx" target="_blank" rel="noopener noreferrer" className="text-triskgold hover:text-white">Vugx</a>.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
