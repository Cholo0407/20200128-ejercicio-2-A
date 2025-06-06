import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Página Principal</h1>
        <p className="text-gray-700 text-lg">
          Aquí puedes ver y gestionar todos tus cursos online. ¡Todo a tu alcance!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
