import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardExplore = ({ card }) => {
  const { image, title, text_color, price, description,Id } = card;

  const handleDonate = () => {
    toast.success('Your contribution will make a significant difference and positively impact the lives of those in need', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const addToDonationPage = [];
    const DonationItems = JSON.parse(localStorage.getItem("donation"));
    if(!DonationItems){
        addToDonationPage.push(card);
        localStorage.setItem('donation',JSON.stringify(addToDonationPage));

    }
    else{
        const isExist = DonationItems.find(card => card.Id == Id);
        if(!isExist){
            addToDonationPage.push(...DonationItems,card);
            localStorage.setItem('donation',JSON.stringify(addToDonationPage));
        }else{
            console.log("error");
        }
    }
  };

  return (
    <div className="relative">
      <img className="w-full h-[70vh]" src={image} alt="" />
      <div
        className="absolute bottom-44 left-0 w-full  px-8 py-4"
        style={{ background: `rgba(11, 11, 11, 0.4)`, backdropFilter: `blur(1px)` }}
      >
        <button onClick={handleDonate} className="text-white p-2 border rounded" style={{background:text_color}}>
          Donate {price}
        </button>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardExplore;
