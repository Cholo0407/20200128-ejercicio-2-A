import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition transform hover:bg-purple-700 hover:scale-105"
    >
      {text}
    </button>
  );
};

export default Button;
