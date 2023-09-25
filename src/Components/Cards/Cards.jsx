import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
  const cards = useLoaderData();
  console.log(cards);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
