import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";




const Dashboard = () => {
    return (
        <div className="flex gap-2 max-w-screen-[2000px] mx-auto">
            <SideBar></SideBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Dashboard;

