
"use client";

import { useState } from "react";
import { TriviaContext } from "../Contexto/TriviaContext";

export default function ProveedorTrivia({
  children,
}: {
  children: React.ReactNode;
}) {
  const [puntaje, setPuntaje] = useState(0);
  const [respondidas, setRespondidas] = useState(0);

  function sumarPuntaje(puntos: number) {
    setPuntaje(puntaje + puntos);
  }

  function sumarRespondida() {
    setRespondidas(respondidas + 1);
  }

  function reiniciarJuego() {
    setPuntaje(0);
    setRespondidas(0);
  }

  return (
    <TriviaContext.Provider
      value={{
        puntaje,
        respondidas,
        sumarPuntaje,
        sumarRespondida,
        reiniciarJuego,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}
