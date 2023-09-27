import Card from "../Card/Card";



const Cards = ({cards}) => {
  
  // const cards = useLoaderData();
  // console.log(cards);
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-0" >
        
        {cards.map((card,index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
