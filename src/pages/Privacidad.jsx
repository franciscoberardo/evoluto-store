function Privacidad() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          ANTAFEX
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Política de privacidad
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-400">

          <div>
            <h2 className="mb-3 text-lg font-bold text-white">
              Datos personales
            </h2>

            <p>
              Los datos proporcionados durante el proceso de compra
              serán utilizados para gestionar el pedido y comunicarnos
              con el cliente cuando sea necesario.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-white">
              Protección de la información
            </h2>

            <p>
              Nos comprometemos a utilizar la información proporcionada
              únicamente para los fines relacionados con la operación
              de la tienda.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Privacidad;