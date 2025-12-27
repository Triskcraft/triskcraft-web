import React from "react";
import Image from "next/image";

const Comounirse = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-between w-full">
      <div className="md:block md:w-1/2 p-4 flex items-center justify-center h-full">
        <a href="https://discord.com/invite/VJQJRZehTG">
          <Image
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
          alt="Discord"
          width={300}
          height={300}
          className="mx-auto hover:scale-105" 
          />
        </a>
      </div>
      <div className="px-6 md:px-10 w-full md:w-1/2 p-4">
        <h2 className="text-4xl mb-4 font-semibold text-black dark:text-white">Como Entrar al SMP?</h2>
        <p className="mb-10 w-5/6text-lg sm:text-2xl text-gray-500 dark:text-gray-400">
          Si te interesa entrar a jugar a nuestro SMP tecnico, debes entrar a nuestro Discord,
          ir al canar #data, abrir Ticket y rellenar el formulario. </p>
        <a
          href="https://discord.com/invite/VJQJRZehTG"
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 px-6 py-2 bg-dsblue text-xl md:text-3xl text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Link de Discord
        </a>
      </div>
    </div>
  );
};

export default Comounirse;