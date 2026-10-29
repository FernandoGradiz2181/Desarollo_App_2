
"use client";

import { useState, useEffect } from "react";
import { usePalabras } from "./contexto/IdiomaContext";
import BotonEspanol from "./componentes/BotonEspanol";
import BotonIngles from "./componentes/BotonIngles";

type Idioma = "es" | "en";

export default function Home() {
  const palabras = usePalabras();

  const [idioma, setIdioma] = useState<Idioma>("es");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    const palabrasTraducidas = palabras.map(
      (palabra) => palabra[idioma]
    );

    setLista(palabrasTraducidas);
  }, [idioma, palabras]);

  return (
    <main>
      <h1>Traductor de palabras</h1>

      <BotonEspanol
        cambiarIdioma={() => setIdioma("es")}
      /> <br />

      {" "}

      <BotonIngles
        cambiarIdioma={() => setIdioma("en")}
      />

      <h2>
        Idioma actual: {idioma === "es" ? "Español" : "Inglés"}
      </h2>

      <ul>
        {lista.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </main>
  );
}
