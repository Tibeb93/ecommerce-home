const categories = [
  { id: 1, name: "Home", icon: "🏠" },
  { id: 2, name: "Electronics", icon: "📱" },
  { id: 3, name: "Fashion", icon: "👕" },
  { id: 4, name: "Books", icon: "📚" },
];

function Categories() {
  return (
    <section id="categories" className="container py-5">
      <h2 className="text-center mb-4">Shop by Category</h2>

      <div className="row g-3">
        {categories.map((c) => (
          <div className="col-6 col-md-3" key={c.id}>
            <div className="category-card text-center p-4">
              <div className="category-icon">{c.icon}</div>
              <h5 className="mt-2 mb-0">{c.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
