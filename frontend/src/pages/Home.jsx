import React from "react";
import Title from "../components/Tittle"; 

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <Title text="Página Principal" /> 
        <p className="text-gray-700 text-lg mb-6">
          Aquí puedes ver y gestionar todos tus cursos online. ¡Todo a tu alcance!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
