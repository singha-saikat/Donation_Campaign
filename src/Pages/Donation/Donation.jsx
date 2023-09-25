import { useEffect, useState } from "react";
import DonationCard from "../../Components/Donation card/DonationCard";

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
    
    

    return (
        
            <div>
               donate.map(donateCard => <DonationCard key={donateCard.Id} card={donateCard}></DonationCard>)

            </div>
        
    );
};

export default Donation;