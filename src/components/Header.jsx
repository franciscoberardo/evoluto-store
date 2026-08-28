import {
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // BUSCAR CON CMD + K
  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        document.getElementById("product-search")?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) {
      navigate("/productos");
      return;
    }

    navigate(`/productos?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6 lg:px-8">

          {/* LOGO */}
          <Link
            to="/"
            className="group shrink-0"
          >
            <div className="text-2xl font-black tracking-[-0.08em] text-white transition group-hover:text-red-500">
              EVOLUTO
            </div>

            <div className="hidden text-[8px] font-bold uppercase tracking-[0.3em] text-red-500 sm:block">
              Sport Nutrition
            </div>
          </Link>


          {/* BUSCADOR */}
          <form
            onSubmit={handleSearch}
            className="relative hidden flex-1 md:block"
          >
            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={15}
            />

            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar productos..."
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-16 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/60 focus:bg-white/[0.06]"
            />

            <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-500 lg:block">
              ⌘ K
            </span>
          </form>


          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-6 lg:flex">

            <Link
              to="/"
              className="text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              Inicio
            </Link>

            <Link
              to="/productos"
              className="text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              Productos
            </Link>

            <Link
              to="/productos?categoria=Proteinas"
              className="text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              Proteínas
            </Link>

            <Link
              to="/productos?categoria=Suplementos"
              className="text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              Suplementos
            </Link>

          </nav>


          {/* ACCIONES */}
          <div className="ml-auto flex items-center gap-3">

            {/* MOBILE SEARCH */}
            <button
              onClick={() => {
                document.getElementById("mobile-search")?.focus();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-red-500 hover:text-white md:hidden"
              aria-label="Buscar"
            >
              <FaSearch size={16} />
            </button>


            {/* CART */}
            <Link
              to="/carrito"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition hover:border-red-500 hover:text-white"
              aria-label="Carrito"
            >
              <FaShoppingBag size={17} />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">
                0
              </span>
            </Link>


            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition hover:border-red-500 hover:text-white lg:hidden"
              aria-label="Menú"
            >
              {mobileMenu ? (
                <FaTimes size={18} />
              ) : (
                <FaBars size={18} />
              )}
            </button>

          </div>

        </div>


        {/* MOBILE SEARCH */}
        <div className="border-t border-white/5 px-6 py-3 md:hidden">
          <form onSubmit={handleSearch} className="relative">

            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={14}
            />

            <input
              id="mobile-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar productos..."
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-red-500/60"
            />

          </form>
        </div>

      </header>


      {/* MOBILE MENU */}
      <div
        className={`fixed left-0 right-0 top-20 z-40 border-b border-white/10 bg-[#080808] px-6 transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >

        <nav className="flex flex-col py-5">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="border-b border-white/5 py-4 text-sm font-semibold text-zinc-300 hover:text-red-500"
          >
            Inicio
          </Link>

          <Link
            to="/productos"
            onClick={() => setMobileMenu(false)}
            className="border-b border-white/5 py-4 text-sm font-semibold text-zinc-300 hover:text-red-500"
          >
            Productos
          </Link>

          <Link
            to="/productos?categoria=Proteinas"
            onClick={() => setMobileMenu(false)}
            className="border-b border-white/5 py-4 text-sm font-semibold text-zinc-300 hover:text-red-500"
          >
            Proteínas
          </Link>

          <Link
            to="/productos?categoria=Suplementos"
            onClick={() => setMobileMenu(false)}
            className="border-b border-white/5 py-4 text-sm font-semibold text-zinc-300 hover:text-red-500"
          >
            Suplementos
          </Link>

          <Link
            to="/carrito"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-sm font-semibold text-zinc-300 hover:text-red-500"
          >
            Carrito
          </Link>

        </nav>

      </div>
    </>
  );
}

export default Header;