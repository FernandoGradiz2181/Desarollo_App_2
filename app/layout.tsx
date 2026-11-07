
import type { Metadata } from "next";
import "./globals.css";
import ProveedorTrivia from "./Componentes/ProveedorTrivia";
import Encabezado from "./Componentes/Encabezado";

export const metadata: Metadata = {
  title: "Trivia",
  description: "Juego de preguntas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ProveedorTrivia>
          <Encabezado />
          {children}
        </ProveedorTrivia>
      </body>
    </html>
  );
}
