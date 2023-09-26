import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useEffect, useState } from "react";
const Statistics = () => {
  const [donate, setDonate] = useState([]);
  useEffect(() => {
    const DonationItems = JSON.parse(localStorage.getItem("donation"));

    if (DonationItems) {
      setDonate(DonationItems);
    } else {
      console.log("No Data Found");
    }
  }, []);

    const data = [
        { value: 12, label: 'A' },
        { value: donate.length , label: 'B' },
        
      ];
      
      const size = {
        width: 400,
        height: 200,
      };
      
    
    
  return (
    <div className="flex justify-center items-center h-[60vh] ">
      <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
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
  );
};

export default Statistics;
