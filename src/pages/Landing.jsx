import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">
        Bienvenido a LearnEnglish
      </h1>
      <p className="mt-4 text-center">
        Aprende inglés de manera divertida y efectiva.
      </p>
      <div className="mt-8 text-center">
        <NavLink to="/home">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Comenzar Ahora
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
