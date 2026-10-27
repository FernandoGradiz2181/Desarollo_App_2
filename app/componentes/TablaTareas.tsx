"use client";
import { Tarea } from "../Modelos/Tarea";

export default function Tabla({
  tareas,
  cambiarEstado,
  eliminarTarea,
}: {
  tareas: Tarea[];
  cambiarEstado: (id: number, estado: string) => void;
  eliminarTarea: (id: number) => void;
}) {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {tareas.map((tarea) => (
          <tr key={tarea.id}>
            <td>{tarea.id}</td>
            <td>{tarea.titulo}</td>
            <td>{tarea.descripcion}</td>

            <td>
              <select
                value={tarea.estado}
                onChange={(e) =>
                  cambiarEstado(tarea.id, e.target.value)
                }
              >
                <option>Pendiente</option>
                <option>En Proceso</option>
                <option>Completada</option>
              </select>
            </td>

            <td>
              <button onClick={() => eliminarTarea(tarea.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}