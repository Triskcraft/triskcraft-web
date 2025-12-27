//src/app/components/page.jsx
import Carrusel from "@/components/Carrusel";
import Comounirse from "@/components/ComoUnirse";
import Videocard from "@/components/videocard";
import DigTotal from "@/components/DigsTotal";

export default function HomePage() {
  const images = [
    "/img5.png",
    "/img1.png",
    "/img3.png",
    "/img2.png",
    "/img4.png",
  ];

  return (
    <div className="container flex flex-col mx-auto">
      <div className="my-10 flex flex-wrap items-center justify-between w-full">
        <div className="px-6 md:px-10 w-full md:w-1/2 p-4">
          <h1 className="m-4 text-5xl font-bold text-black dark:text-white">
            Triskcraft Network
          </h1>
          <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
            Triskcraft es un Survival MultiPlayer con una comunidad sana y dedicada a
            crear e innovar en todo lo que tiene que ver con Minecraft Técnico, Redstone y Decorativo.
            Nuestra meta es crecer y crear proyectos cada vez mas grandes con diseño propio e inovador. 
          </p>
        </div>
        <div className="md:px-6 w-full md:w-1/2 p-8 flex items-center justify-center h-full">
          <Carrusel images={images} />
        </div>
      </div>
      <Comounirse />
      <div className="px-6 md:px-10 w-full p-4">
        <h2 className="m-4 text-4xl font-bold text-black dark:text-white">Tours dentro del Servidor</h2>
        <div className="flex justify-evenly">
          <Videocard id="0-E_lBWVs9c" nombre="Tour 2 meses | Vugx" />
        </div>
      </div>
      <DigTotal cantidad={8}/>

    </div>
  );
}