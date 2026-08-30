import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat(
      "es-AR"
    ).format(price);
  };

  return (
    <article className="group relative">

      {/* IMAGE */}

      <div className="relative aspect-square overflow-hidden bg-white">

        {/* BADGE */}

        <div className="absolute left-3 top-3 z-10 bg-red-brand px-2 py-1 text-[8px] font-black uppercase text-white">
          Disponible
        </div>

        <Link
          to={`/productos/${product.id}`}
          className="block h-full"
        >

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
          />

        </Link>

        {/* QUICK ADD */}

        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="absolute bottom-3 left-3 right-3 flex h-10 translate-y-16 items-center justify-center gap-2 bg-red-brand text-[10px] font-black uppercase text-white opacity-0 transition-all duration-300 hover:bg-red-dark group-hover:translate-y-0 group-hover:opacity-100 disabled:bg-gray-500"
        >
          <FaShoppingCart size={11} />

          {product.stock > 0
            ? "Agregar al carrito"
            : "Sin stock"}
        </button>

      </div>


      {/* INFO */}

      <div className="bg-white px-4 py-4">

        <div className="mb-1 flex items-center gap-1 text-[9px] text-gray-400">

          <FaStar className="text-[#f5a400]" />

          <span>
            {product.rating}
          </span>

        </div>

        <span className="text-[9px] font-bold uppercase tracking-wider text-red-brand">
          {product.category}
        </span>

        <Link
          to={`/productos/${product.id}`}
          className="mt-1 block min-h-[36px] text-[12px] font-bold uppercase leading-tight text-black transition hover:text-red-brand"
        >
          {product.name}
        </Link>

        <div className="mt-3 flex items-center justify-between">

          <span className="text-[16px] font-black text-black">
            ${formatPrice(product.price)}
          </span>

          <span className="text-[9px] font-medium text-gray-400">
            Stock: {product.stock}
          </span>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;