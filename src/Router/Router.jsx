import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Components/Card Details/CardDetails";
import Error from "../Components/Error/Error";


const CreatedRouter = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout />,
    errorElement:<Error/>,
    
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('/donation.json')
      },
      {
        path:"/card/:Id",
        element: <CardDetails/>,
        loader: () => fetch('/donation.json')
      }
    ],
  },
]);

export default CreatedRouter;
