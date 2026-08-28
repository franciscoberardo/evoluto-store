import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat(
      "es-AR"
    ).format(price);

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#080808] px-5">

        <div className="text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-white/10 text-2xl">
            🛒
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-brand">
            Tu carrito
          </span>

          <h1 className="mt-3 text-3xl font-black uppercase italic text-white">
            Está vacío
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Todavía no agregaste ningún producto.
          </p>

          <Link
            to="/productos"
            className="mt-7 inline-flex bg-red-brand px-7 py-4 text-[10px] font-black uppercase text-white transition hover:bg-white hover:text-black"
          >
            Ver productos
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808]">

      <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8">

        <div className="mb-10">

          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-brand">
            Tu compra
          </span>

          <h1 className="mt-3 text-4xl font-black uppercase italic text-white">
            Carrito
          </h1>

        </div>


        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

          {/* ITEMS */}

          <div className="space-y-3">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-4 border border-white/10 bg-[#111] p-4"
              >

                <Link
                  to={`/productos/${item.id}`}
                  className="flex h-28 w-28 shrink-0 items-center justify-center bg-white"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-3"
                  />

                </Link>


                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">

                  <div>

                    <span className="text-[8px] font-black uppercase tracking-wider text-red-brand">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-sm font-black uppercase text-white">
                      {item.name}
                    </h3>

                  </div>


                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div className="flex h-8 border border-white/10">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="w-8 text-gray-500 hover:text-white"
                      >
                        <FaMinus size={8} />
                      </button>

                      <span className="flex w-8 items-center justify-center border-x border-white/10 text-[10px] font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="w-8 text-gray-500 hover:text-white"
                      >
                        <FaPlus size={8} />
                      </button>

                    </div>

                    <span className="text-sm font-black text-white">
                      $
                      {formatPrice(
                        item.price *
                          item.quantity
                      )}
                    </span>

                  </div>

                </div>


                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="self-start p-2 text-gray-600 transition hover:text-red-brand"
                  aria-label="Eliminar"
                >
                  <FaTrash size={11} />
                </button>

              </div>

            ))}


            <div className="flex justify-between pt-3">

              <Link
                to="/productos"
                className="flex items-center gap-2 text-[9px] font-bold uppercase text-gray-500 hover:text-white"
              >
                <FaArrowLeft />
                Seguir comprando
              </Link>

              <button
                onClick={clearCart}
                className="text-[9px] font-bold uppercase text-gray-600 hover:text-red-brand"
              >
                Vaciar carrito
              </button>

            </div>

          </div>


          {/* SUMMARY */}

          <aside className="h-fit border border-white/10 bg-[#111] p-6">

            <h2 className="text-sm font-black uppercase text-white">
              Resumen
            </h2>

            <div className="mt-6 space-y-4 border-y border-white/10 py-5">

              <div className="flex justify-between text-[10px]">

                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-bold text-white">
                  ${formatPrice(cartTotal)}
                </span>

              </div>

              <div className="flex justify-between text-[10px]">

                <span className="text-gray-500">
                  Envío
                </span>

                <span className="font-bold text-green-500">
                  A calcular
                </span>

              </div>

            </div>

            <div className="flex justify-between py-5">

              <span className="text-xs font-black uppercase text-white">
                Total
              </span>

              <span className="text-xl font-black text-red-brand">
                ${formatPrice(cartTotal)}
              </span>

            </div>


            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full rounded-xl bg-red-600 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-red-500"
            >
              Finalizar compra
            </button>

            <p className="mt-4 text-center text-[8px] text-gray-600">
              Próximamente integración de pagos.
            </p>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default Cart;