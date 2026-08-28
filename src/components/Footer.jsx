import {
  FaInstagram,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050505]">

      {/* TOP RED LINE */}
      <div className="h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700" />

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-1">

            <Link
              to="/"
              onClick={scrollToTop}
              className="group inline-block"
            >
              <span className="text-3xl font-black tracking-[-0.08em] text-white transition group-hover:text-red-500">
                EVOLUTO
              </span>

              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.35em] text-red-500">
                Sport Nutrition
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-zinc-400">
              Suplementación deportiva para llevar tu rendimiento
              al siguiente nivel.
            </p>

            {/* SOCIALS */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaWhatsapp size={17} />
              </a>

              <a
                href="mailto:"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
              >
                <FaEnvelope size={15} />
              </a>

            </div>
          </div>


          {/* TIENDA */}
          <div>

            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Tienda
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/productos"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Todos los productos
              </Link>

              <Link
                to="/productos?categoria=Proteinas"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Proteínas
              </Link>

              <Link
                to="/productos?categoria=Suplementos"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Suplementos
              </Link>

              <Link
                to="/productos?categoria=Creatina"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Creatinas
              </Link>

            </div>
          </div>


          {/* AYUDA */}
          <div>

            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Ayuda
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/envios"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Envíos
              </Link>

              <Link
                to="/cambios"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Cambios y devoluciones
              </Link>

              <Link
                to="/faq"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Preguntas frecuentes
              </Link>

              <Link
                to="/contacto"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Contacto
              </Link>

            </div>
          </div>


          {/* INFORMACIÓN */}
          <div>

            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-white">
              Información
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/terminos"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Términos y condiciones
              </Link>

              <Link
                to="/privacidad"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Política de privacidad
              </Link>

              <Link
                to="/medios-de-pago"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-red-500"
              >
                Medios de pago
              </Link>

            </div>

            {/* PAYMENT BADGE */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Compra segura
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Pagos protegidos
              </p>

              <div className="mt-3 flex gap-2">
                <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] font-bold text-zinc-500">
                  VISA
                </span>

                <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] font-bold text-zinc-500">
                  MASTER
                </span>

                <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] font-bold text-zinc-500">
                  MP
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />


        {/* BOTTOM */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-zinc-600">
            © 2026 EVOLUTO. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 transition hover:text-red-500"
          >
            Volver arriba

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white">
              <FaArrowUp size={11} />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;