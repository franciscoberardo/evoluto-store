import {
  FaArrowRight,
  FaTruck,
  FaCreditCard,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { products } from "../data/products";

import ProductGrid from "../components/ProductGrid";

import fondoOn from "../assets/fondo-on.png";

function Home() {
  const featuredProducts = products.slice(0, 4);

  const proteinProduct = products.find(
    (product) =>
      product.category === "Proteinas"
  );

  const creatineProduct = products.find(
    (product) =>
      product.name.toLowerCase().includes("creatina")
  );

  const supplementProduct = products.find(
    (product) =>
      product.category === "Suplementos"
  );

  return (
    <main className="bg-[#080808]">

      {/* ==========================================
          HERO
      =========================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* RED SHAPES */}

        <div className="absolute -left-20 top-20 h-72 w-72 -skew-x-12 bg-red-brand/20 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-96 w-96 skew-x-12 bg-red-brand/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent_45%,rgba(227,6,19,0.12)_45%,rgba(227,6,19,0.12)_55%,transparent_55%)]" />


        <div className="relative mx-auto grid min-h-[570px] max-w-[1400px] grid-cols-1 lg:grid-cols-2">

          {/* COPY */}

          <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-red-brand" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-brand">
                EVOLUTO Nutrition
              </span>

            </div>

            <h1 className="max-w-[650px] text-5xl font-black uppercase italic leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">

              Potenciá

              <span className="block text-red-brand">
                tu rendimiento
              </span>

              al máximo.

            </h1>

            <p className="mt-7 max-w-[480px] text-sm leading-7 text-gray-400">
              Proteínas, creatinas y suplementos
              deportivos seleccionados para llevar
              tus entrenamientos al siguiente nivel.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/productos"
                className="flex items-center gap-3 bg-red-brand px-6 py-4 text-[10px] font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Ver productos
                <FaArrowRight />
              </Link>

              <Link
                to="/productos?categoria=Proteinas"
                className="flex items-center gap-3 border border-white/20 px-6 py-4 text-[10px] font-black uppercase tracking-wider text-white transition hover:border-red-brand hover:text-red-brand"
              >
                Proteínas
              </Link>

            </div>

          </div>


          {/* PRODUCT IMAGE */}


<div className="relative flex min-h-[420px] items-center justify-center overflow-hidden lg:min-h-0">

  {/* FONDO NEGRO CON GRADIENTE ROJO */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_48%,#220000_0%,#0d0505_28%,#080808_55%,#050505_100%)]" />


  {/* ========================= */}
  {/* GLOW GRANDE DETRAS */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[58%]
      top-1/2
      h-[420px]
      w-[420px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-red-600/20
      blur-[90px]
    "
  />


  {/* ========================= */}
  {/* CIRCULO ROJO PRINCIPAL */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[58%]
      top-1/2
      h-[365px]
      w-[365px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-red-500/70
      shadow-[0_0_20px_rgba(239,68,68,0.35),0_0_60px_rgba(220,38,38,0.15)]
    "
  />


  {/* ========================= */}
  {/* CIRCULO INTERIOR */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[58%]
      top-1/2
      h-[300px]
      w-[300px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-red-500/20
    "
  />


  {/* ========================= */}
  {/* DESTELLO ARRIBA */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[68%]
      top-[18%]
      h-2
      w-2
      rounded-full
      bg-red-400
      shadow-[0_0_15px_5px_rgba(239,68,68,0.5)]
    "
  />


  {/* ========================= */}
  {/* DESTELLO LATERAL */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[78%]
      top-[45%]
      h-1.5
      w-1.5
      rounded-full
      bg-red-500
      shadow-[0_0_12px_4px_rgba(239,68,68,0.5)]
    "
  />


  {/* ========================= */}
  {/* PEQUEÑO DESTELLO */}
  {/* ========================= */}

  <div
    className="
      absolute
      left-[40%]
      top-[65%]
      h-1
      w-1
      rounded-full
      bg-red-400
      shadow-[0_0_10px_3px_rgba(239,68,68,0.5)]
    "
  />


  {/* ========================= */}
  {/* REFLEJO ROJO EN EL PISO */}
  {/* ========================= */}

  <div
    className="
      absolute
      bottom-[7%]
      left-[58%]
      h-[55px]
      w-[260px]
      -translate-x-1/2
      rounded-[50%]
      bg-red-600/30
      blur-[30px]
    "
  />


  {/* ========================= */}
  {/* LÍNEA DE LUZ EN EL PISO */}
  {/* ========================= */}

  <div
    className="
      absolute
      bottom-[11%]
      left-[58%]
      h-[2px]
      w-[180px]
      -translate-x-1/2
      bg-red-500/60
      blur-[1px]
      shadow-[0_0_20px_5px_rgba(239,68,68,0.25)]
    "
  />


  {/* ========================= */}
  {/* PRODUCTO */}
  {/* ========================= */}

  <img
    src={fondoOn}
    alt="Suplementos deportivos"
    className="
      relative
      z-10
      max-h-[440px]
      w-[75%]
      object-contain
      drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)]
      transition
      duration-700
      hover:scale-105
    "
  />


  {/* ========================= */}
  {/* TEXTO PREMIUM */}
  {/* ========================= */}

  <div className="absolute bottom-7 right-7 z-20 hidden border-l-2 border-red-500 pl-3 sm:block">

    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
      Premium
    </p>

    <p className="text-xs font-black uppercase text-white">
      Sport Nutrition
    </p>

  </div>

</div>
</div>
</section>


      {/* ==========================================
          BENEFITS
      =========================================== */}

      <section className="border-b border-white/10 bg-[#0e0e0e]">

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-3">

          <div className="flex items-center gap-4 border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r lg:px-10">

            <FaTruck className="text-xl text-red-brand" />

            <div>
              <p className="text-[10px] font-black uppercase text-white">
                Envíos
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                A todo el país
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4 border-b border-white/10 px-6 py-6 sm:border-b-0 sm:border-r lg:px-10">

            <FaCreditCard className="text-xl text-red-brand" />

            <div>
              <p className="text-[10px] font-black uppercase text-white">
                Pagá como quieras
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                Múltiples medios de pago
              </p>
            </div>

          </div>


          <div className="flex items-center gap-4 px-6 py-6 lg:px-10">

            <FaShieldAlt className="text-xl text-red-brand" />

            <div>
              <p className="text-[10px] font-black uppercase text-white">
                Compra segura
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                Productos originales
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          CATEGORIES
      =========================================== */}

      <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-8">

        <div className="mb-10 flex items-end justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-red-brand" />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-brand">
                Categorías
              </span>

            </div>

            <h2 className="text-3xl font-black uppercase italic tracking-tight text-white sm:text-4xl">
              Elegí tu objetivo.
            </h2>

          </div>

          <Link
            to="/productos"
            className="hidden items-center gap-2 text-[10px] font-bold uppercase text-gray-400 transition hover:text-red-brand sm:flex"
          >
            Ver todos
            <FaArrowRight />
          </Link>

        </div>


        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* PROTEINAS */}

          <Link
            to="/productos?categoria=Proteinas"
            className="group relative min-h-[350px] overflow-hidden bg-red-brand"
          >

            <div className="absolute inset-0 bg-[linear-gradient(135deg,#e30613_0%,#a40009_100%)]" />

            <div className="absolute right-[-50px] top-[-50px] h-64 w-64 rounded-full border-[50px] border-black/10" />

            {proteinProduct && (
              <img
                src={proteinProduct.image}
                alt="Proteínas"
                className="absolute bottom-0 right-[-15px] z-10 h-[80%] w-[65%] object-contain transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="relative z-20 p-7">

              <span className="text-[9px] font-black text-white/60">
                01
              </span>

              <h3 className="mt-2 text-2xl font-black uppercase italic text-white">
                Proteínas
              </h3>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-white/70">
                Ver productos →
              </p>

            </div>

          </Link>


          {/* CREATINAS */}

          <Link
            to="/productos?categoria=Creatinas"
            className="group relative min-h-[350px] overflow-hidden bg-[#171717]"
          >

            <div className="absolute inset-0 bg-[linear-gradient(135deg,#181818,#090909)]" />

            {creatineProduct && (
              <img
                src={creatineProduct.image}
                alt="Creatinas"
                className="absolute bottom-0 right-[-10px] z-10 h-[75%] w-[70%] object-contain transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="relative z-20 p-7">

              <span className="text-[9px] font-black text-red-brand">
                02
              </span>

              <h3 className="mt-2 text-2xl font-black uppercase italic text-white">
                Creatinas
              </h3>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-gray-500">
                Ver productos →
              </p>

            </div>

          </Link>


          {/* SUPLEMENTOS */}

          <Link
            to="/productos?categoria=Suplementos"
            className="group relative min-h-[350px] overflow-hidden bg-[#111]"
          >

            {supplementProduct && (
              <img
                src={supplementProduct.image}
                alt="Suplementos"
                className="absolute bottom-0 right-[-10px] z-10 h-[75%] w-[70%] object-contain transition duration-500 group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-[linear-gradient(135deg,#151515,#050505)]" />

            <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full border-[60px] border-red-brand/10" />

            <div className="absolute right-5 top-5 text-[90px] font-black italic text-white/[0.03]">
              +
            </div>

            <div className="relative z-20 flex h-full min-h-[350px] flex-col justify-between p-7">

              <div>

                <span className="text-[9px] font-black text-red-brand">
                  03
                </span>

                <h3 className="mt-2 text-2xl font-black uppercase italic text-white">
                  Suplementos
                </h3>

              </div>

              <div>

                <FaBolt className="mb-3 text-xl text-red-brand" />

                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                  Rendimiento sin excusas
                </p>

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* ==========================================
          FEATURED PRODUCTS
      =========================================== */}

      <section className="bg-[#0d0d0d] py-20">

        <div className="mx-auto max-w-[1400px] px-5 lg:px-8">

          <div className="mb-10 flex items-end justify-between">

            <div>

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-red-brand" />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-brand">
                  Selección
                </span>

              </div>

              <h2 className="text-3xl font-black uppercase italic text-white sm:text-4xl">
                Productos destacados
              </h2>

            </div>

            <Link
              to="/productos"
              className="hidden items-center gap-2 text-[10px] font-bold uppercase text-gray-400 transition hover:text-red-brand sm:flex"
            >
              Ver todos
              <FaArrowRight />
            </Link>

          </div>

          <ProductGrid
            products={featuredProducts}
          />

        </div>

      </section>


      {/* ==========================================
          PROMO BANNER
      =========================================== */}

      <section className="relative overflow-hidden bg-red-brand">

        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(0,0,0,0.12)_30%,rgba(0,0,0,0.12)_60%,transparent_60%)]" />

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-8">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">
              Entrená más fuerte
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase italic leading-none text-white sm:text-5xl">
              Tu próximo nivel
              <br />
              empieza hoy.
            </h2>

          </div>

          <Link
            to="/productos"
            className="flex items-center gap-3 bg-black px-7 py-4 text-[10px] font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
          >
            Comprar ahora
            <FaArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;