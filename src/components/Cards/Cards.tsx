import Card, { ICard } from '../Card/Card';

// TODO: add keys, interface for props
const Cards = ({ cards }: any) => {
  return (
    <section className="cards-container">
      {cards.map((cardData: ICard) => (
        <Card {...cardData} />
      ))}
    </section>
  );
};

export default Cards;
