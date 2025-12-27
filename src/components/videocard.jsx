import React from "react";
import Image from "next/image";
import Link from "next/link";

const Videocard = ({ id, nombre }) => {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  
    return (
      <Link href={videoUrl} passHref>
        <div className="m-2 my-10 flex flex-col sm:flex-row items-center sm:items-start max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <div className="flex-shrink-0">
            <Image
              src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
              alt={`${nombre}`}
              width={120}
              height={90}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start sm:h-[90px] mt-4 sm:mt-0 sm:ml-4">
            <h3 className="text-xl font-semibold text-black dark:text-white">{nombre}</h3>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Videocard;