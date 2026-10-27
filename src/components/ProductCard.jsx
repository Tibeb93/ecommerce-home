function ProductCard({ product, onAdd }) {
  return (
    <div className="card h-100 product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />

      <div className="card-body d-flex flex-column">
        <small className="text-muted">{product.category}</small>
        <h5 className="card-title">{product.name}</h5>
        <p className="fw-bold fs-5 mt-auto">
          ETB {product.price.toLocaleString()}
        </p>
        <button className="btn btn-primary" onClick={onAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
