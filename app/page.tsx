"use client";

import React from "react";
import { useGastoContext } from "./contexto/GastoContext";
import Login from "./componentes/Login";
import Presupuesto from "./componentes/Presupuesto";
import FormularioGasto from "./componentes/FormularioGasto";
import TablaGastos from "./componentes/TablaGastos";

export default function Home() {
  const { isLoggedIn, logout } = useGastoContext();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", maxWidth: "800px", margin: "0 auto" }}>
        <button onClick={logout} style={{ padding: "6px 12px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>
          Cerrar Sesión
        </button>
      </div>
      <Presupuesto />
      <FormularioGasto />
      <TablaGastos />
    </main>
  );
}