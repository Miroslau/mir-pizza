import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pizzaAPI from "../../api/pizza/pizzaAPI";

const FullPizzaPage: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPizza = async () => {
    try {
      const { data } = await pizzaAPI.getPizzaById(id);
      setPizza(data);
    } catch (error) {
      alert("Ошибка при получении пиццы!");
      navigate("/");
    }
  };

  useEffect(() => {
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizzaPage;
