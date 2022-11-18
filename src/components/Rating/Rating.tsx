import { useEffect, useState } from 'react';

import './Rating.css';

const Rating = ({ avgRating, totalRatings }: any) => {
  const avgRatingFloat = parseFloat(avgRating);
  const [ratingClass, setRatingClass] = useState('');

  useEffect(() => {
    setRatingClass(getRatingClass());
  }, []);

  const getRatingClass = () => {
    let ratingClass;

    switch (true) {
      case avgRatingFloat >= 4.5:
        ratingClass = 'green';
        break;
      case avgRatingFloat >= 4 && avgRatingFloat < 4.5:
        ratingClass = 'light-green';
        break;
      case avgRatingFloat >= 3.5 && avgRatingFloat < 4:
        ratingClass = 'yellow';
        break;
      case avgRatingFloat >= 3 && avgRatingFloat < 3.5:
        ratingClass = 'orange';
        break;
      case avgRatingFloat <= 3:
        ratingClass = 'red';
        break;
      default:
        ratingClass = 'unavailable';
        break;
    }

    return ratingClass;
  };

  return (
    <p className={`card__rating ${ratingClass}`}>
      {isNaN(avgRatingFloat)
        ? 'N/A'
        : `${avgRatingFloat} (${totalRatings} reviews)`}
    </p>
  );
};

export default Rating;
