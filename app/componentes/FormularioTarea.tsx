"use client";

export default function Formulario({
  titulo,
  setTitulo,
  descripcion,
  setDescripcion,
  agregarTarea,
}: any) {
  return (
    <div>
      <h2>Agregar tarea</h2>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <br /><br />

      <button onClick={agregarTarea}>Agregar</button>
    </div>
  );
}