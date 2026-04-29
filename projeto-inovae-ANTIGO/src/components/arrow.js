function Arrow({ direction = "left", onClick }) {
  return (
    <button onClick={onClick} className="arrow-btn">
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

export default Arrow;