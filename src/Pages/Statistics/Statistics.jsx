import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
const Statistics = () => {
    const data = [
        { value: 12, label: 'A' },
        { value: 4 , label: 'B' },
        
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
