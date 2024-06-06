import React from "react";

const Environment = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Configuración del Entorno</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Preferencias</h2>
        <div className="mt-2">
          <label className="block">
            <span className="text-gray-700">Tema</span>
            <select className="form-select mt-1 block w-full">
              <option>Claro</option>
              <option>Oscuro</option>
            </select>
          </label>
        </div>
        <div className="mt-2">
          <label className="block">
            <span className="text-gray-700">Idioma</span>
            <select className="form-select mt-1 block w-full">
              <option>Español</option>
              <option>Inglés</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Environment;
