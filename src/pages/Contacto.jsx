import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
          ANTAFEX
        </p>

        <h1 className="text-4xl font-black md:text-5xl">
          Contacto
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          ¿Tenés alguna consulta? Estamos para ayudarte.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/50"
          >
            <FaInstagram className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              Instagram
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Seguinos en Instagram
            </p>
          </a>

          <a
            href="mailto:contacto@antafex.com"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/50"
          >
            <FaEnvelope className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              Email
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              contacto@antafex.com
            </p>
          </a>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-red-500/50"
          >
            <FaWhatsapp className="mb-5 text-2xl text-red-500" />

            <h2 className="font-bold">
              WhatsApp
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Escribinos por WhatsApp
            </p>
          </a>

        </div>

      </section>
    </main>
  );
}

export default Contacto;