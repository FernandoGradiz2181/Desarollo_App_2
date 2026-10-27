"use client";

import { useState } from "react";
import { Tarea } from "./Modelos/Tarea";
import Formulario from "./componentes/FormularioTarea";
import Tabla from "./componentes/TablaTareas";

export default function Home() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function agregarTarea() {
    if (titulo.trim() === "" || descripcion.trim() === "") {
      alert("Completa todos los campos");
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      estado: "Pendiente",
    };

    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
    setDescripcion("");
  }

  function cambiarEstado(id: number, estado: string) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, estado: estado } : tarea
      )
    );
  }

  function eliminarTarea(id: number) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <main>
      <h1>Lista de Tareas</h1>

      <Formulario
        titulo={titulo}
        setTitulo={setTitulo}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        agregarTarea={agregarTarea}
      />

      <h2>Mis tareas</h2>

      <Tabla
        tareas={tareas}
        cambiarEstado={cambiarEstado}
        eliminarTarea={eliminarTarea}
      />
    </main>
  );
}