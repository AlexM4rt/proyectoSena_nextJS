export default function Tarjeta({ img, alt, titulo, descripcion, btn }) {
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <a href="#" className="btn btn-secondary">
          {btn}
        </a>
      </div>
    </div>
  );
}
