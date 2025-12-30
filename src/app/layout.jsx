//src/app/components/layout.jsx
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


export const metadata = {
  title: 'Triskcraft SMP',
  description: 'SMP dedicado a Minecraft Tecnico, Redstone y Decoracion.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-triskgreen via-[#0b261e] to-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
