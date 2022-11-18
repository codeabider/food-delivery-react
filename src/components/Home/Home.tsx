import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRestaurantData } from '../../redux/slices/restaurants';

import Cards from '../Cards/Cards';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, hasError, isLoading } = useAppSelector(
    (state) => state.restaurants
  );
  const [cards, setCards] = useState([{}]);

  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, []);

  useEffect(() => {
    setCards(data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>ERROR!!!</p>;

  console.log({ cards });

  return <Cards cards={cards} />;
};

export default Home;
