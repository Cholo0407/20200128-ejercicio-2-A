import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="h-screen bg-gradient-to-l from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          ¡Bienvenido a la Gestión de Cursos Online!
        </h1>
        <p className="text-gray-600 mb-8">
          Administra y organiza tus cursos de forma fácil y efectiva.
        </p>
        <button
          onClick={handleClick}
          className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition transform hover:bg-purple-700 hover:scale-105"
        >
          Ir a la Página Principal
        </button>
      </div>
    </div>
  );
};

export default Welcome;
