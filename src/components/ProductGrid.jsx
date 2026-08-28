import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="border border-white/10 py-20 text-center">

        <h3 className="text-lg font-black uppercase">
          No encontramos productos
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Probá con otra búsqueda o categoría.
        </p>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;