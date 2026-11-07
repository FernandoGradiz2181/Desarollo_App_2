
"use client";

import { createContext, useContext, useState } from "react";

interface TriviaDatos {
  puntaje: number;
  respondidas: number;
  sumarPuntaje: (puntos: number) => void;
  sumarRespondida: () => void;
  reiniciarJuego: () => void;
}

export const TriviaContext = createContext<TriviaDatos>({
  puntaje: 0,
  respondidas: 0,
  sumarPuntaje: () => {},
  sumarRespondida: () => {},
  reiniciarJuego: () => {},
});

export function useTrivia() {
  return useContext(TriviaContext);
}
