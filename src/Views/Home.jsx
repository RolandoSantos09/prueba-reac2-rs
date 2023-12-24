import { Card } from "../Components/Card";
import { PizzasContext } from "../Context/PizzasContext";
import { useContext } from "react";

export const Home = () => {
  const { pizzas } = useContext(PizzasContext);

  return (
    <>
      <div>
        {pizzas.map((pizza, i) => (
          <div className="col" key={i}>
            <Card pizza={pizza}></Card>
          </div>
        ))}
      </div>
    </>
  );
};
