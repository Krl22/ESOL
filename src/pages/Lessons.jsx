import React from "react";

const Lessons = () => {
  const lessons = [
    { id: 1, title: "Lección 1: Introducción", completed: true },
    { id: 2, title: "Lección 2: Verbos básicos", completed: false },
    // Agrega más lecciones según sea necesario
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lecciones</h1>
      <div className="mt-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p>Progreso: {lesson.completed ? "Completada" : "No Completada"}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              {lesson.completed ? "Revisar" : "Comenzar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
