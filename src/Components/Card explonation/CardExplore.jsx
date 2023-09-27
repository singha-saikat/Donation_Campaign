import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardExplore = ({ card }) => {
  const { image, title, text_color, price, description,Id } = card;

  const handleDonate = () => {
    toast.success('Your contribution will make a significant difference and positively impact the lives of those in need', {
      position: "top-right",
      autoClose: 3000,
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
        }
        else{
            addToDonationPage.push(...DonationItems,card);
            localStorage.setItem('donation',JSON.stringify(addToDonationPage));
        }
    }
  };

  return (
    <div className="relative mt-12">
      <img className="w-full h-[70vh] object-cover object-center rounded-b-md" src={image} alt="" />
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-gray-900 opacity-40 rounded-b-md"
        style={{ background: `rgba(11, 11, 11, 0.4)`, backdropFilter: `blur(1px)` }}
      >
        <button onClick={handleDonate} className="text-white p-2 border rounded" style={{background:text_color}}>
          Donate {price}
        </button>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className='mb-8'>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardExplore;
