const Card = ({ card }) => {
    const {
      image,
      category,
      title,
      category_background_color,
      card_background_color,
      text_color,
      button_background_color,
    } = card;
  
    const cardClassName = `max-w-sm border-gray-200 rounded-lg shadow ${
      card_background_color ? `bg-${card_background_color}` : ''
    } dark:bg-green-800 dark:border-gray-700 mt-8`;
    const categoryClassName = `px-2 text-${text_color}`
    
  
    return (
      <div>
        <div className={cardClassName}>
          <a href="#">
            <img className="rounded-t-lg w-full mb-4" src={image} alt="" />
          </a>
          <p className={categoryClassName}>{category}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  