import React from "react";
import Image from "next/image";
import Link from "next/link";

const Videocard = ({ id, nombre }) => {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  
    return (
      <Link href={videoUrl} passHref>
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-triskgold/25 bg-white/5 p-4 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-triskgold/10 opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <Image
              src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
              alt={`${nombre}`}
              width={480}
              height={270}
              className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative mt-4 flex items-start justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-triskgold">
                YouTube Tour
              </span>
              <h3 className="text-lg font-semibold leading-tight text-white">{nombre}</h3>
            </div>
            <span className="rounded-full bg-triskgold/20 px-3 py-1 text-xs font-semibold text-triskgold">
              Ver
            </span>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Videocard;
