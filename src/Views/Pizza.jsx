import { useParams } from "react-router";
import { CardDetail } from "../Components/CardDetail";
import { PizzasContext } from "../Context/PizzasContext";
import { useContext, useEffect, useState } from "react";

export const Pizza = () => {
  const { pizzas } = useContext(PizzasContext);
  const { id } = useParams();

  const [pizza, setPizza] = useState({});

  const getPizza = async (idPizza) => {
    console.log("id", id);
    console.log("pizzas", pizzas);
    const result = pizzas.find((p) => p.id == idPizza);
    console.log("result", result);
    setPizza(result);
  };

  useEffect(() => {
    getPizza(id);
  }, []);

  return (
    <>
      <CardDetail pizza={pizza}></CardDetail>
    </>
  );
};
