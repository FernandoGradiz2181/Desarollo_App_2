"use client";

import React, { useState } from "react";
import { useGastoContext } from "../contexto/GastoContext";

export default function FormularioGasto() {
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("Comida");
  const [fecha, setFecha] = useState("");

  const { agregarGasto } = useGastoContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!monto || !fecha) return;

  const gasto = {
      categoria,
      monto: parseFloat(monto),
      fecha,
    };

    await agregarGasto(gasto);

    setMonto("");
    setFecha("");
  };

  return (
    <form onSubmit={handleSubmit} className="form p-3">
      <select
        className="form-control mb-3"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Comida">Comida</option>
        <option value="Transporte">Transporte</option>
        <option value="Ropa">Ropa</option>
        <option value="Entretenimiento">Entretenimiento</option>
      </select>

      <input
        type="number"
        placeholder="Monto"
        className="form-control mb-3"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        required
      />

      <input
        type="date"
        className="form-control mb-3"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-success">
        Guardar Gasto
      </button>
    </form>
  );
}