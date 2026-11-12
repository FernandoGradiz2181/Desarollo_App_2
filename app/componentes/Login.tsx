"use client";

import React, { useState } from "react";
import { useGastoContext } from "../contexto/GastoContext";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const { login } = useGastoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(usuario, clave);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", textAlign: "center", fontFamily: "sans-serif", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Mis Gastos / Inicio de Sesión</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="password"
          placeholder="Clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#0056b3", color: "white", border: "none", cursor: "pointer", fontSize: "16px", borderRadius: "4px" }}>
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}