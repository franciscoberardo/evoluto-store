import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("categoria") || "";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText);

      const matchesCategory =
        !category ||
        product.category.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);


  const title = search
    ? `Resultados para "${search}"`
    : category
      ? category
      : "Todos los productos";


  return (
    <main className="min-h-screen bg-[#050505]">

      {/* HEADER */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#050505]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-red-500">
            ANTAFEX / SHOP
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            Encontrá la suplementación que necesitás para llevar
            tu rendimiento al siguiente nivel.
          </p>

        </div>

      </section>


      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* TOP BAR */}
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-zinc-500">
            <span className="font-bold text-white">
              {filteredProducts.length}
            </span>{" "}
            productos encontrados
          </p>

          {(search || category) && (
            <Link
              to="/productos"
              className="w-fit text-xs font-bold uppercase tracking-wider text-red-500 transition hover:text-red-400"
            >
              Limpiar filtros
            </Link>
          )}

        </div>


        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-6 text-center">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <FaSearch
                size={20}
                className="text-zinc-600"
              />
            </div>

            <h2 className="text-xl font-black text-white">
              No encontramos productos
            </h2>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              No hay productos que coincidan con{" "}
              <span className="font-semibold text-zinc-300">
                "{search}"
              </span>
              .
            </p>

            <Link
              to="/productos"
              className="mt-7 rounded-xl bg-red-600 px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-red-500"
            >
              Ver todos los productos
            </Link>

          </div>

        )}

      </section>

    </main>
  );
}

export default Products;