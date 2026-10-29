
"use client";

export default function BotonIngles({
  cambiarIdioma,
}: {
  cambiarIdioma: () => void;
}) {
  return (
    <button onClick={cambiarIdioma}>
      Cambiar Idioma Inglés
    </button>
  );
}
