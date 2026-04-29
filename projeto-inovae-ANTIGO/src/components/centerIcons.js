function CategoryIcon({ image, label }) {
  return (
    <div className="category-icon">
      <img src={image} alt={label} />
      <p>{label}</p>
    </div>
  );
}

export default CategoryIcon;