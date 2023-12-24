import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PizzasContext = createContext();

const URL = "/pizzas.json";

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await axios.get(URL);
      if (!response.status) {
        throw new Error("Error. No hay datos");
      }
      const pizzasList = response.data;
      setPizzas(pizzasList);
    } catch (error) {
      console.log("falla de api" + error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // Función para actualizar la cantidad de pizzas y recalcular el total
  const updatePedido = (index, newQuantity) => {
    const updatedPedidos = [...pedidos];
    updatedPedidos[index].cantidad = newQuantity;

    // Recalcula el total con la nueva cantidad
    const newTotal = updatedPedidos.reduce((acc, pedido) => {
      return acc + pedido.price * pedido.cantidad;
    }, 0);

    setPedidos(updatedPedidos);
    //atualización total pedidos
  };

  return (
    <PizzasContext.Provider
      value={{ pizzas, setPizzas, pedidos, setPedidos, updatePedido }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
