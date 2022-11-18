import Rating from '../Rating/Rating';

import './Card.css';

const IMG_BASE_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill';

export interface ICard {
  name: string;
  address: string;
  cloudinaryImageId: string;
  sla: {
    maxDeliveryTime: number;
  };
  costForTwoString: string;
  cuisines: string[];
  avgRating: string;
  totalRatings: number;
}

const Card = ({
  name,
  address,
  cloudinaryImageId,
  sla,
  costForTwoString,
  cuisines,
  avgRating,
  totalRatings
}: ICard) => {
  const ratingProps = { avgRating, totalRatings };
  return (
    <div className="card">
      <h4 className="card__title">{name}</h4>
      <p className="card__description">{address}</p>
      <img
        className="card__img"
        src={`${IMG_BASE_URL}/${cloudinaryImageId}`}
        alt="restaurant"
      />
      <p className="card__cuisines">{cuisines?.join(' | ')}</p>
      <div className="card__info">
        <Rating {...ratingProps} />
        <span>Delivery in: {sla?.maxDeliveryTime} mins</span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};

export default Card;
