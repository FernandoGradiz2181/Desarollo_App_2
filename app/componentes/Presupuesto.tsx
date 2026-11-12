"use client";

import React, { useState } from "react";
import { useGastoContext } from "../contexto/GastoContext";

export default function Presupuesto() {
  const [inputVal, setInputVal] = useState("");
  const { presupuesto, setPresupuesto, porcentajeGastado } = useGastoContext();

  const handleGuardar = () => {
    const val = parseFloat(inputVal);
    if (!isNaN(val)) setPresupuesto(val);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0", fontFamily: "sans-serif" }}>
      <h3>Establecer Presupuesto Mensual</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
        <input
          type="number"
          placeholder="Monto de presupuesto Mensual"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button onClick={handleGuardar} style={{ padding: "8px 15px", backgroundColor: "#0056b3", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>
          Guardar Presupuesto
        </button>
      </div>

      {presupuesto > 0 && (
        <h4 style={{ margin: "10px 0" }}>
          Presupuesto Establecido Lps. {presupuesto.toLocaleString("es-HN", { minimumFractionDigits: 2 })}
        </h4>
      )}

      {/* Alerta Amarilla (80%) */}
      {porcentajeGastado >= 80 && porcentajeGastado < 100 && (
        <div style={{ backgroundColor: "#fff3cd", color: "#856404", padding: "12px", margin: "10px auto", maxWidth: "500px", border: "1px solid #ffeeba", borderRadius: "4px" }}>
          Ha alcanzado el 80% del presupuesto
        </div>
      )}

      {/* Alerta Roja (Límite superado) */}
      {porcentajeGastado >= 100 && (
        <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "12px", margin: "10px auto", maxWidth: "500px", border: "1px solid #f5c6cb", borderRadius: "4px" }}>
          Has superado el límite del presupuesto, debes ajustar gastos
        </div>
      )}
    </div>
  );
}