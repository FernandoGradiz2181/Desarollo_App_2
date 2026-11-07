
"use client";

import { useState, useEffect } from "react";
import { Pregunta } from "./Modelos/pregunta";
import { useTrivia } from "./Contexto/TriviaContext";

export default function Home() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [actual, setActual] = useState(0);
  const [seleccion, setSeleccion] = useState<boolean | null>(null);

  const { sumarPuntaje, sumarRespondida, reiniciarJuego } = useTrivia();

  useEffect(() => {
    const lista: Pregunta[] = [
      {
        idPreguntas: 1,
        DescripcionPregunta: "El sol es una estrella",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 2,
        DescripcionPregunta: "Los perros son reptiles",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 3,
        DescripcionPregunta: "La Tierra es un planeta",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 4,
        DescripcionPregunta: "El agua es de color rojo",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPreguntas: 5,
        DescripcionPregunta: "Los peces viven en el agua",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
    ];

    setPreguntas(lista);
  }, []);

  function responder(respuesta: boolean) {
    if (seleccion !== null) return;

    setSeleccion(respuesta);
    sumarRespondida();

    if (respuesta === preguntas[actual].respuestaCorrecta) {
      sumarPuntaje(preguntas[actual].puntajePregunta);
    }
  }

  function siguientePregunta() {
    setActual(actual + 1);
    setSeleccion(null);
  }

  function reiniciar() {
    setActual(0);
    setSeleccion(null);
    reiniciarJuego();
  }

  if (preguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  if (actual === preguntas.length) {
    return (
      <main>
        <h1>¡Juego terminado!</h1>
        <p>Tu puntaje es: </p>
        <button onClick={reiniciar}>Volver a jugar</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Trivia de Verdadero o Falso</h1>

      <h3>
        Pregunta {actual + 1} de {preguntas.length}
      </h3>

      <h2>{preguntas[actual].DescripcionPregunta}</h2>

      <button
        disabled={seleccion !== null}
        onClick={() => responder(true)}
      >
        Verdadero
      </button>

      {" "}

      <button
        disabled={seleccion !== null}
        onClick={() => responder(false)}
      >
        Falso
      </button>

      {seleccion !== null && (
        <div>
          <h3>
            {seleccion === preguntas[actual].respuestaCorrecta
              ? "¡Respuesta correcta!"
              : "Respuesta incorrecta"}
          </h3>

          <button onClick={siguientePregunta}>
            Siguiente pregunta
          </button>
        </div>
      )}
    </main>
  );
}
