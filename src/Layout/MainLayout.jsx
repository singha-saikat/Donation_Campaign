import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
// import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto p-2">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;