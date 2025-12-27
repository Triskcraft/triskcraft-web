"use client"
import React, { useEffect, useState } from 'react';

const DigTotal = ({ cantidad } ) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Cargando...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const scoresArray = Object.keys(data).map((key) => ({
    name: key,
    score: data[key],
  }));

  const sortedScores = scoresArray.sort((a, b) => b.score - a.score);

  const topScores = sortedScores.slice(0, parseInt(cantidad, 10));

  const totalScore = scoresArray.reduce((sum, user) => sum + user.score, 0);

  return (
    <div className="p-4 w-8/9 mb-8 justify-evenly flex flex-col">
      <h2 className="text-4xl ml-10 mb-4 font-bold text-black dark:text-white">Top Jugadores</h2>
      <p className="w-5/6 m-4 py-2 text-2xl text-gray-500 dark:text-gray-400 mb-6">
            Top {cantidad} de los juagadores con mas bloques minados dentro del servidor.
          </p>
      <table className="">
        <thead>
          <tr>
            <th className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white">Nombre</th>
            <th className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white">Puntaje</th>
          </tr>
        </thead>
        <tbody>
          <tr className="font-bold">
            <td className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white text-center" title='posiblemente los datos no son totalmente presisos'>Total</td>
            <td className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white text-center">{totalScore.toLocaleString()}</td>
          </tr>
          {topScores.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white text-center">{user.name}</td>
              <td className="py-2 px-4 text-xl sm:text-2xl text-black dark:text-white text-center">{user.score.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DigTotal;
