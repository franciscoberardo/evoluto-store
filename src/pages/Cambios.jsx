function Cambios() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          ANTAFEX
        </p>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Cambios y devoluciones
        </h1>

        <div className="mt-10 space-y-8">

          <div>
            <h2 className="mb-3 text-xl font-bold">
              Cambios
            </h2>

            <p className="leading-7 text-zinc-400">
              Si necesitás realizar un cambio, ponete en contacto
              con nosotros indicando tu número de pedido y el motivo
              del cambio.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold">
              Estado del producto
            </h2>

            <p className="leading-7 text-zinc-400">
              Para realizar un cambio, el producto deberá encontrarse
              en las condiciones en las que fue recibido y conservar
              su packaging original cuando corresponda.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold">
              ¿Necesitás ayuda?
            </h2>

            <p className="leading-7 text-zinc-400">
              Si tenés dudas sobre un cambio o devolución, contactanos
              antes de enviar el producto para que podamos indicarte
              cómo proceder.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Cambios;