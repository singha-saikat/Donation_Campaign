import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const [donate, setDonate] = useState([]);
  const element = useLoaderData();
  
  const size = {
    width: 400,
    height: 200,
  };

  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));

    if (DonationItems) {
      setDonate(DonationItems);
    } else {
      console.log("No Data Found");
    }
  }, []);

  const totalValue = element.length;
  const myDonation = donate.length;

  const data = [
    { value: totalValue, label: `T.D (${((totalValue / (totalValue + myDonation)) * 100).toFixed(2)}%)` },
    { value: myDonation, label: `M.D (${((myDonation / (totalValue + myDonation)) * 100).toFixed(2)}%)` },
  ];

  const is100Percent = totalValue === 12 && myDonation === 12;

  return (
    <div>
      <div className="flex justify-center items-center h-[60vh] ">
        <PieChart
          series={[
            {
              arcLabel: (item) => item.label,
              arcLabelMinAngle: 45,
              data: is100Percent ? [{ value: 1, label: "100%" }] : data, 
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
          {...size}
        />
      </div>
      
    </div>
  );
};

export default Statistics;
