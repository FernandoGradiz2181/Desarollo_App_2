
"use client";

export default function BotonEspanol({
  cambiarIdioma,
}: {
  cambiarIdioma: () => void;
}) {
  return (
    <button onClick={cambiarIdioma}>
      Cambiar Idioma Español
    </button>
  );
}
