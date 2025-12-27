//app/Nosotros/page.jsx
import Comounirse from "@/components/ComoUnirse";
import Image from "next/image";

export default function Nosotros() {
    return (
        <div className="container flex flex-col mx-auto px-6 md:px-10 p-4">
          <h2 className="m-4 text-4xl font-bold text-black dark:text-white ">Sobre nosotros</h2>
          <div className="m-2 my-20 flex flex-wrap items-center justify-between w-full">
            <div className="px-6 md:px-10 w-full md:w-1/2 p-4">
              <h3 className="m-4 text-3xl font-bold text-black dark:text-white">
                  Historia
              </h3>
              <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Toda historia tiene un inicio y la de este servidor es la siguiente, dos amigos con el sueño e impulsados por el amor a minecraft y al técnico deciden crear su propio servidor, formando amistades y lazos invaluables, pero no tanto como el de ellos, en un momento el amor por el servidor y el cariño de su amistad se transformo en algo mas, las llamadas, las palabras entre cada uno se sentia mas cercano, ninguno tenia el valor para decirlo pero sabian que era mutuo Y no lo demostraban pero mediante el cariño que le ponían al servidor lo demostrataban, era su vínculo especial, si bien había mas gente sabian que seria siempre algo especial de ellos.
              </p>
            </div>
            <div className="px-6 md:px-10 w-full md:w-1/2 p-4 flex items-center justify-center">
              <Image
                src="/triskcraft_logo.png"
                alt="logo mapa"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="m-2 my-20 flex flex-wrap justify-between w-full">
            <div className="px-6 md:px-10 w-full md:w-1/2 p-4">
              <h3 className="m-4 text-3xl font-bold text-black dark:text-white">
                Visión
              </h3>
              <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
                Buscamos ser una comunidad que explote las mecanicas del Minecraft, diseñando y Construyendo proyectos cada vez mas grandes. 
              </p>
            </div>
            <div className="px-6 md:px-10 w-full md:w-1/2 p-4">
              <h3 className="m-4 text-3xl font-bold text-black dark:text-white">
                Mision
              </h3>
              <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
                Triskcraft busca ser una comunidad amable con nuevos y veteranos en Minecraft tecnico
                y una forma de aprender todos juntos para crear nuevos y mejores proyectos.
              </p>
            </div>
          </div>
        <Comounirse/>
    </div>
    );
  }