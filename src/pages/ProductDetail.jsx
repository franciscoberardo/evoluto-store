import {
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaCheck,
} from "react-icons/fa";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  useState,
} from "react";

import { products } from "../data/products";

import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const [quantity, setQuantity] =
    useState(1);

  const [added, setAdded] =
    useState(false);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#080808]">

        <div className="text-center">

          <h1 className="text-3xl font-black uppercase italic">
            Producto no encontrado
          </h1>

          <Link
            to="/productos"
            className="mt-6 inline-flex bg-red-brand px-6 py-3 text-xs font-black uppercase"
          >
            Volver a productos
          </Link>

        </div>

      </main>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat(
      "es-AR"
    ).format(price);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#080808]">

      <div className="mx-auto max-w-[1300px] px-5 py-10 lg:px-8 lg:py-16">

        <Link
          to="/productos"
          className="mb-10 flex w-fit items-center gap-2 text-[10px] font-bold uppercase text-gray-500 transition hover:text-red-brand"
        >
          <FaArrowLeft size={10} />
          Volver a productos
        </Link>


        <div className="grid overflow-hidden border border-white/10 bg-[#101010] lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative flex min-h-[500px] items-center justify-center bg-white">

            <div className="absolute left-0 top-0 h-32 w-32 border-b-[60px] border-r-[60px] border-red-brand/10" />

            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 max-h-[560px] w-full object-contain p-12 transition duration-500 hover:scale-105"
            />

          </div>


          {/* INFO */}

          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-brand">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-black uppercase italic leading-none tracking-tight text-white sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-6 h-[2px] w-12 bg-red-brand" />

            <p className="mt-7 text-sm leading-7 text-gray-500">
              {product.description}
            </p>

            <div className="mt-8">

              <span className="text-3xl font-black text-white">
                ${formatPrice(product.price)}
              </span>

            </div>


            {/* STOCK */}

            <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase">

              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-gray-400">
                {product.stock} unidades disponibles
              </span>

            </div>


            {/* QUANTITY */}

            <div className="mt-8 flex items-center gap-4">

              <span className="text-[9px] font-black uppercase text-gray-500">
                Cantidad
              </span>

              <div className="flex h-11 border border-white/10">

                <button
                  onClick={() =>
                    setQuantity(
                      Math.max(
                        1,
                        quantity - 1
                      )
                    )
                  }
                  className="w-10 text-gray-400 transition hover:bg-white/5 hover:text-white"
                >
                  <FaMinus size={9} />
                </button>

                <div className="flex w-10 items-center justify-center border-x border-white/10 text-xs font-bold">
                  {quantity}
                </div>

                <button
                  onClick={() =>
                    setQuantity(
                      Math.min(
                        product.stock,
                        quantity + 1
                      )
                    )
                  }
                  className="w-10 text-gray-400 transition hover:bg-white/5 hover:text-white"
                >
                  <FaPlus size={9} />
                </button>

              </div>

            </div>


            {/* ADD */}

            <button
              onClick={handleAdd}
              disabled={product.stock === 0}
              className="mt-7 flex h-14 items-center justify-center gap-3 bg-red-brand text-[11px] font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black disabled:bg-gray-700"
            >

              {added ? (
                <>
                  <FaCheck />
                  Agregado al carrito
                </>
              ) : (
                <>
                  <FaShoppingCart />
                  Agregar al carrito
                </>
              )}

            </button>


            {/* INFO */}

            <div className="mt-8 grid grid-cols-2 border-t border-white/10 pt-7">

              <div>

                <p className="text-[9px] font-black uppercase text-gray-400">
                  Producto original
                </p>

                <p className="mt-1 text-[9px] text-gray-600">
                  Garantía de autenticidad
                </p>

              </div>

              <div>

                <p className="text-[9px] font-black uppercase text-gray-400">
                  Envíos
                </p>

                <p className="mt-1 text-[9px] text-gray-600">
                  A todo el país
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetail;