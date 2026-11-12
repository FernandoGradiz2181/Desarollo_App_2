"use client";

import React from "react";
import { useGastoContext } from "../contexto/GastoContext";

export default function TablaGastos() {
  const { gastos, eliminarGasto } = useGastoContext();

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", overflowX: "auto", fontFamily: "sans-serif" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd", backgroundColor: "#f9f9f9" }}>
            <th style={{ padding: "10px" }}>Monto</th>
            <th style={{ padding: "10px" }}>Categoría</th>
            <th style={{ padding: "10px" }}>Fecha</th>
            <th style={{ padding: "10px" }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((g, index) => (
            <tr key={g.idgasto || index} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "10px" }}>{g.monto}</td>
              <td style={{ padding: "10px" }}>{g.categoria}</td>
              <td style={{ padding: "10px" }}>{g.fecha}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => g.idgasto && eliminarGasto(g.idgasto)}
                  style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "4px" }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}