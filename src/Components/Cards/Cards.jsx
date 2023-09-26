import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
// import { useState } from "react";


const Cards = () => {
  // const [results,setReasults] = useState();
  const cards = useLoaderData();
  // console.log(cards);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
        
        {cards.map((card,index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
