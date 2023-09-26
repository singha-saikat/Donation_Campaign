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
        { value: 12, label: 'T. D' },
        { value: donate.length , label: 'M.D' },
        
      ];
      
      const size = {
        width: 400,
        height: 200,
      };
      
    
    
  return (
    <div>
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
      <div className='flex justify-center gap-5'>
        <span className='bg-[#01B2AF] text-gray-800 p-2 rounded-lg font-bold'>T.D : Total Donation</span>
        <span className='bg-[#2F96FF] text-gray-800 p-2 rounded-lg font-bold'>M.D : My Donation</span>
      </div>
    </div>
  );
};

export default Statistics;
