//app/Proyectos/page.jsx
import Comounirse from "@/components/ComoUnirse";
import Videocard from "@/components/videocard";
import DigTotal from "@/components/DigsTotal";

export default function Proyectos() {
  return (
    <div className="container mx-auto flex max-w-6xl flex-col rounded-3xl border border-triskgold/20 bg-black/30">
      <div className="p-4 px-6 md:px-10">
        <h2 className="m-4 text-4xl font-bold text-triskgold drop-shadow-lg">
          Proyectos
        </h2>
        <p className="m-4 mb-6 w-5/6 py-2 text-lg text-white/75">
          Esta seccion sera la lista de Proyectos de diseño exclusivo de
          Triskcraft.
        </p>
      </div>
      <div className="p-4 px-6 md:px-10">
        <h3 className="m-4 text-2xl font-bold text-white">
          Concrete Selector
        </h3>
        <Videocard id="p00yOMQQpMc" nombre="Concrete Selector 96k/h" />
      </div>
      <DigTotal cantidad={12} />
      <Comounirse />
    </div>
  );
}
