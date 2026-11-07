
"use client";

import { useTrivia } from "../Contexto/TriviaContext";

export default function Encabezado() {
  const { puntaje, respondidas } = useTrivia();

  return (
    <header>
      <h2>Mi Trivia</h2>
      <p>Puntaje: {puntaje}</p>
      <p>Preguntas respondidas: {respondidas}</p>
    </header>
  );
}
