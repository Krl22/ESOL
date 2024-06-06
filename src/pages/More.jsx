import React from "react";

const More = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Más Opciones</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <p>
          Si tienes alguna pregunta, no dudes en contactarnos a
          contacto@example.com.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Soporte</h2>
        <p>
          Visita nuestra página de soporte para obtener ayuda y respuestas a tus
          preguntas frecuentes.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Términos y Condiciones</h2>
        <p>
          Lee nuestros términos y condiciones para entender cómo funciona
          nuestra plataforma.
        </p>
      </div>
    </div>
  );
};

export default More;
