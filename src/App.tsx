import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchRestaurantData } from './redux/slices/restaurants';
import './App.css';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();
  const { data, hasError, isLoading } = useAppSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>ERROR!!!</p>;

  return <div className="App">{data?.data?.length} results found.</div>;
}

export default App;
