"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface Gasto {
  idgasto?: number;
  categoria: string;
  monto: string | number;
  fecha: string;
  descripcion?: string; 
}

interface GastoContextType {
  isLoggedIn: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
  presupuesto: number;
  setPresupuesto: (val: number) => void;
  gastos: Gasto[];
  agregarGasto: (gasto: Gasto) => Promise<void>;
  eliminarGasto: (idgasto: number) => Promise<void>;
  totalGastos: number;
  porcentajeGastado: number;
}

const GastoContext = createContext<GastoContextType | undefined>(undefined);

export const GastoProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);


  const login = (u: string, p: string) => {
    if (u === "admin" && p === "admin123") {
      setIsLoggedIn(true);
      return true;
    }
    alert("Usuario o clave incorrectos. Usa admin / admin123");
    return false;
  };

  const logout = () => setIsLoggedIn(false);


  const obtenerGastos = async () => {
    try {
      const res = await fetch("http://localhost:5000/gasto");
      const data = await res.json();
     
      if (Array.isArray(data)) {
        setGastos(data);
      } else {
        setGastos([]);
      }
    } catch (error) {
      console.error("Error al obtener los gastos:", error);
      setGastos([]);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
     
      const cargarDatos = async () => {
        await obtenerGastos();
      };
      cargarDatos();
    }
  }, [isLoggedIn]);


  const agregarGasto = async (nuevoGasto: Gasto) => {
    try {
      const res = await fetch("http://localhost:5000/gasto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoGasto),
      });
      if (res.ok) {
        obtenerGastos(); 
      }
    } catch (error) {
      console.error("Error al guardar el gasto:", error);
    }
  };

  const eliminarGasto = async (idgasto: number) => {
    try {
      const res = await fetch(`http://localhost:5000/gasto/${idgasto}`, {
        method: "DELETE",
      });
      if (res.ok) {
        obtenerGastos();
      }
    } catch (error) {
      console.error("Error al eliminar el gasto:", error);
    }
  };


  const totalGastos = Array.isArray(gastos)
    ? gastos.reduce((acc, curr) => acc + Number(curr.monto || 0), 0)
    : 0;

  const porcentajeGastado = presupuesto > 0 ? (totalGastos / presupuesto) * 100 : 0;

  return (
    <GastoContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        presupuesto,
        setPresupuesto,
        gastos,
        agregarGasto,
        eliminarGasto,
        totalGastos,
        porcentajeGastado,
      }}
    >
      {children}
    </GastoContext.Provider>
  );
};

export const useGastoContext = () => {
  const context = useContext(GastoContext);
  if (!context) {
    throw new Error("useGastoContext debe usarse dentro de un GastoProvider");
  }
  return context;
};