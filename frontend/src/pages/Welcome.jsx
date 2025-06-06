import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Tittle"; 
import Button from "../components/Button"; 

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home"); 
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
        <Title text="¡Bienvenido a la Gestión de Cursos Online!" /> 
        <p className="text-gray-600 mb-8">
          Administra y organiza tus cursos de forma fácil y efectiva.
        </p>
        <Button onClick={handleClick} text="Ir a la Página Principal" />
      </div>
    </div>
  );
};

export default WelcomePage;
