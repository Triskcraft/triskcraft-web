//app/Proyectos/page.jsx
import Comounirse from "@/components/ComoUnirse";
import Videocard from "@/components/videocard";
import DigTotal from "@/components/DigsTotal";

export default function Proyectos() {
  return (
    <div className="container flex flex-col mx-auto">
      <div className="px-6 md:px-10 p-4">
        <h2 className="m-4 text-4xl font-bold text-black dark:text-white">
          Proyectos
        </h2>
        <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
          Esta seccion sera la lista de Proyectos de diseño exclusivo de
          Triskcraft.
        </p>
      </div>
      <div className="px-6 md:px-10 p-4">
        <h3 className="m-4 text-2xl font-bold text-black dark:text-white">
          Concrete Selector
        </h3>
        <Videocard id="p00yOMQQpMc" nombre="Concrete Selector 96k/h" />
      </div>
      <DigTotal cantidad={12} />
      <Comounirse />
    </div>
  );
}
