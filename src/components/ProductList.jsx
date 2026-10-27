import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ onAdd }) {
  return (
    <section id="products" className="container py-5">
      <h2 className="text-center mb-4">Featured Products</h2>

      <div className="row g-4">
        {products.map((p) => (
          <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
            <ProductCard product={p} onAdd={onAdd} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
