import React from "react";

const Account = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Mi Cuenta</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Información del Usuario</h2>
        <p>Nombre: Juan Pérez</p>
        <p>Email: juan.perez@example.com</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Editar Perfil
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Mis Logros</h2>
        <ul>
          <li>Lección 1 completada</li>
          <li>Lección 2 completada</li>
          <li>...</li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
