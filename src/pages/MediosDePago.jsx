import {
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
} from "react-icons/fa";

function MediosDePago() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          ANTAFEX
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Medios de pago
        </h1>

        <p className="mt-4 text-zinc-400">
          Conocé las opciones disponibles para pagar tu compra.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <FaCreditCard className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              Tarjetas
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Podés realizar el pago utilizando tarjeta de crédito
              o débito según las opciones disponibles al momento
              de la compra.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <FaUniversity className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              Transferencia
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              También podés realizar el pago mediante transferencia
              bancaria si esta opción se encuentra disponible.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <FaMoneyBillWave className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              Otros medios
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Los medios de pago disponibles serán informados durante
              el proceso de compra.
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

export default MediosDePago;