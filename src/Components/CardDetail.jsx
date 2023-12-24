export const CardDetail = ({ pizza }) => {
  console.log("pizza", pizza);
  const {
    img = "",
    name = "Titulo",
    ingredients = ["text", "text", "text", "text"],
    id = "0",
    price = "000",
    desc = "texto texto",
  } = pizza;

  const addToCarro = () => {};

  return (
    <div className="card p-0">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid object-fit-cover bg-secondary-subtle h-100 w-100"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <hr></hr>
            <p className="card-text">{desc}</p>
            <ul>
              {ingredients.map((ingrediente, i) => (
                <li key={i}>{ingrediente}</li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <h4 className="card-title">Precio: $ {price}</h4>
              <button onClick={addToCarro} className="btn btn-danger">
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
