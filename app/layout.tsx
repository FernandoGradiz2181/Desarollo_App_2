import { GastoProvider } from "./contexto/GastoContext";
import "./globals.css";

export const metadata = {
  title: "Administrador de Gastos - Examen",
  description: "Examen Desarrollo Web II",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <GastoProvider>{children}</GastoProvider>
      </body>
    </html>
  );
}

