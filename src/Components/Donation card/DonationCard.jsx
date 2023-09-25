const DonationCard = ({ card }) => {
  console.log(card);
  const {
    
    image,
    category,
    title,
    category_background_color,
    card_background_color,
    text_color,price
  } = card;

  return (
    <div className="mt-12">
      <a
        href="#"
        className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
        style={{background:card_background_color}}
      >
        <img className="w-2/5" src={image} alt="" />
        <div className="px-8">
            <span className="px-2 py-1 rounded-md m-4"
              style={{
                background: category_background_color,
                color: text_color,
              }}>{category}</span>
            <p className="px-2 mt-1  ml-2" style={{ color: text_color }}>{title}</p>
            <p className="px-2 mt-1  ml-2" style={{ color: text_color }}>{price}</p>
            <button className="border p-1 ml-2" style={{background:text_color}}>View Details</button>

        </div>
      </a>
      
    </div>
  );
};

export default DonationCard;
