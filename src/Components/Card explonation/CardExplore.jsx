const CardExplore = ({ card }) => {
  const { image, title, text_color, price, description } = card;
  return (
    <div>
      <div className="mt-8">
        <img className="w-full h-[70vh]" src={image} alt="" />
        <div className="pl-8 bg-[#0B0B0B80] py-4 ">
          <button
            className="text-white p-2 rounded "
            style={{ background: text_color }}
          >
            Donate {price}
          </button>
        </div>
      </div>
      <div className="mb-16">
        <h1 className="mt-8 text-2xl font-bold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardExplore;
