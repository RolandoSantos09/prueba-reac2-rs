import { useState } from "react";

export const Resume = ({ item, index, updatePedido }) => {
  const {
    id = "0",
    name = "text",
    price = "000",
    cantidad = 0,
    img = "",
  } = item;

  const [quantity, setQuantity] = useState(cantidad);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    updatePedido(index, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updatePedido(index, quantity - 1);
    }
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="flex-fill">
          <img
            src={img}
            alt={name}
            className="ratio ratio-16x9 float-start bg-secondary-subtle"
            style={{ width: "56px" }}
          />
          <span className="align-middle ps-2">{name}</span>
        </div>
        <div>
          <span className="align-middle pe-2 text-success">$ {price}</span>
          <button
            type="button"
            className="btn btn-danger"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span className="align-middle px-2">{quantity}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};
