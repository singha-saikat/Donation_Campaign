import { useEffect, useState } from "react";
import DonationCard from "../../Components/Donation card/DonationCard";
// import CardExplore from "../../Components/Card explonation/CardExplore";

const Donation = () => {
    const [donate,setDonate] = useState([]);
    const [noData,setNoData] = useState(false);


    useEffect(() => {
        const DonationItems = JSON.parse(localStorage.getItem("donation"));
        
        if(DonationItems){
            setDonate(DonationItems);
        }
        else{
            setNoData("No Data Found");
        }
        
    },[])
    console.log(donate);
    
    

    return (
        
            <div>
              { noData? <p className="flex justify-center items-center h-[60vh] text-3xl text-purple-600">{noData}</p> : 
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {donate.slice(0,4).map(donateCard => <DonationCard key={donateCard} card={donateCard}></DonationCard>)}
                </div>

              </div>}

            </div>
        
    );
};

export default Donation;