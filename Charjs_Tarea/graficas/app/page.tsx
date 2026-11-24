import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <Link href="/consulta1" className="btn btn-primary">
          Consulta Grafica 1
        </Link>

        <Link href="/consulta2" className="btn btn-primary">
          Consulta Grafica 2
        </Link>

        <Link href="/consulta3" className="btn btn-primary">
         {/*En la base de datos se encuentra el producto con el valor más bajo que es o
         por eso no se muestra en el grafico */}
          Consulta Grafica 3
        </Link>

      </main>
    </div>
  );
}