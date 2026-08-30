import { Link } from "react-router-dom";
import { FaTruck, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Envios() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            ANTAFEX
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Envíos
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Todo lo que necesitás saber sobre nuestros envíos y entregas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <FaTruck className="mb-5 text-2xl text-red-500" />

            <h2 className="mb-2 text-lg font-bold">
              Envíos
            </h2>

            <p className="text-sm leading-6 text-zinc-400">
              Realizamos envíos a todo el territorio argentino.
              El costo y tiempo de entrega pueden variar según
              la localidad.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <FaMapMarkerAlt className="mb-5 text-2xl text-red-500" />

            <h2 className="mb-2 text-lg font-bold">
              Seguimiento
            </h2>

            <p className="text-sm leading-6 text-zinc-400">
              Una vez despachado tu pedido, recibirás la información
              correspondiente para poder realizar el seguimiento.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <FaClock className="mb-5 text-2xl text-red-500" />

            <h2 className="mb-2 text-lg font-bold">
              Tiempos
            </h2>

            <p className="text-sm leading-6 text-zinc-400">
              Los tiempos de entrega dependen del destino y del
              servicio de correo utilizado.
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}

export default Envios;