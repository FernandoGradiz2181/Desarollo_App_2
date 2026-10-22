import React from "react";

export default function Medidor({temperatura, unidad}: {temperatura: number, unidad: string}) {

  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;

  if (unidad === "C") {
    celsius = temperatura;
    fahrenheit = (temperatura * 9) / 5 + 32;
    kelvin = temperatura + 273.15;
  } else if (unidad === "F") {
    celsius = ((temperatura - 32) * 5) / 9;
    fahrenheit = temperatura;
    kelvin = ((temperatura - 32) * 5) / 9 + 273.15;
  } else if (unidad === "K") {
    celsius = temperatura - 273.15;
    fahrenheit = ((temperatura - 273.15) * 9) / 5 + 32;
    kelvin = temperatura;
  }

  return (
    <div>
      <h2>Resultados</h2>

      <p>Celsius: {celsius.toFixed(2)} °C</p>
      <p>Fahrenheit: {fahrenheit.toFixed(2)} °F</p>
      <p>Kelvin: {kelvin.toFixed(2)} K</p>
    </div>
  );
}
