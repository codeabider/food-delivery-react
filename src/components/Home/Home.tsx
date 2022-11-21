import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchRestaurantData } from '../../redux/slices/restaurants';

import debounce from '../../utils/general/debounce';

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

  const onSearch = debounce((e: any) => {
    console.log('search query: ', e?.target?.value);
  }, 1000);

  if (isLoading || !data.length) return <p>Loading...</p>;
  if (hasError) return <p>ERROR!!!</p>;

  return (
    <>
      <Link to={'/demo'}>Demo</Link>
      <input placeholder="Search" onKeyUp={onSearch} />
      <Cards cards={cards} />
    </>
  );
};

export default Home;
