import { useEffect, useState } from "react";
import DonationCard from "../../Components/Donation card/DonationCard";
// import CardExplore from "../../Components/Card explonation/CardExplore";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState(false);
  const [dataLength,setDataLength] = useState(4);

  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));

    if (DonationItems) {
      setDonate(DonationItems);
    } else {
      setNoData("No Data Found");
    }
  }, []);
  console.log(donate);

  return (
    <div>
      {noData ? (
        <p className="flex justify-center items-center h-[60vh] text-3xl text-purple-600">
          {noData}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {donate.slice(0, dataLength).map((donateCard) => (
              <DonationCard key={donateCard} card={donateCard}></DonationCard>
            ))}
          </div>
        </div>
      )}
      <div className={`flex justify-center ${dataLength === donate.length ? 'hidden' : ''}`}>
         
        {donate.length>4? <button onClick={ () => setDataLength(donate.length)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 mt-8 ">
            <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See All
            </span>
        </button> : ''}
      </div>
    </div>
  );
};

export default Donation;
