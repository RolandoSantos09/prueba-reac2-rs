import { Resume } from "../Components/Resume";
import { PizzasContext } from "../Context/PizzasContext";
import { useContext, useEffect } from "react";

export const Carrito = () => {
  const { pedidos, setPedidos, updatePedido } = useContext(PizzasContext);

  const total = pedidos.reduce((acc, pedido) => {
    return acc + pedido.price;
  }, 0);

  return (
    <>
      <div className="card text-bg-light ">
        <div className="card-body">
          <h5 className="card-title">Detalles del pedido:</h5>
          <div className="card">
            <ul className="list-group list-group-flush">
              {pedidos.map((item, i) => (
                <Resume
                  key={i}
                  item={item}
                  index={i}
                  updatePedido={updatePedido}
                />
              ))}
            </ul>
            <div className="card-body">
              <h4 className="card-title">Total: $ {total}</h4>
              <button className="btn btn-success">Ir a Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
