import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    Id,
    image,
    category,
    title,
    category_background_color,
    card_background_color,
    text_color,
  } = card;

  return (
    <div>
      <Link to={`/card/${Id}`}>
        <div
          className="max-w-sm border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-gray-700 mt-8"
          style={{ background: card_background_color }}
        >
          <div>
            <img className="rounded-t-lg w-full mb-4" src={image} alt="" />
          </div>
          <div className="px-4">
            <span
              className="px-2 py-1 rounded-md m-4"
              style={{
                background: category_background_color,
                color: text_color,
              }}
            >
              {category}
            </span>
            <p className="px-2 mt-4 pb-4 ml-2" style={{ color: text_color }}>
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
