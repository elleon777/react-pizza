import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62a4844e47e6e40063941e8f.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка пи пролучении страницы');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <>
          <img src={pizza.imageUrl} alt="" />
          <h2>{pizza.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur voluptate
            officiis amet, deleniti molestiae error architecto
          </p>
          <h4>{pizza.price} ₽</h4>
          <Link to="/">
            <button className="button button--outline button--add">
              <span>Назад</span>
            </button>
          </Link>
        </>
      ) : (
        <>Загрузка...</>
      )}
    </div>
  );
};

export default FullPizza;
