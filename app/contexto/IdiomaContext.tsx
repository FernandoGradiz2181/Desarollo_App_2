
"use client";

import { createContext, useContext } from "react";
import palabras from "../modelos/palabras.json";

export const IdiomaContext = createContext(palabras);

export function usePalabras() {
  return useContext(IdiomaContext);
}
