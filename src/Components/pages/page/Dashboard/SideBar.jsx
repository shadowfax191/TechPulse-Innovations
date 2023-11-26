import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,


} from "@material-tailwind/react";
import {

    ShoppingBagIcon,
    UserCircleIcon,

    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import {  Home, Payment, People, Work } from "@mui/icons-material";
import useHr from "../../../Hooks/useHr";
import useEmployee from "../../../Hooks/useEmployee";
import useAdmin from "../../../Hooks/useAdmin";



const SideBar = () => {
    const [isHR] = useHr()
    const [isEmployee] = useEmployee()
    const [isAdmin] = useAdmin()

    return (
        <div className="">
            <Card className=" min-h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-200 rounded-none rounded-e-xl">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        {isHR && 'Dashboard for HR'}
                        {isEmployee && 'Dashboard for Employee'}
                        {isAdmin && 'Dashboard for Admin'}
                    </Typography>
                </div>
                <List>
                    {/* HR */}
                    {
                        isHR && <div>

                            <NavLink to='/dashboard/employee-list'><ListItem>
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Employee-list

                            </ListItem></NavLink>

                            <NavLink to='/dashboard/progress'>  <ListItem>
                                <ListItemPrefix>
                                    <InboxIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                progress
                            </ListItem></NavLink>

                            <ListItem>
                                <ListItemPrefix>
                                    <UserCircleIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Profile
                            </ListItem>

                        </div>
                    }
                    {/* employee */}
                    {
                        isEmployee &&
                        <div>
                            <Link to='/dashboard/payment'><ListItem>
                                <ListItemPrefix>
                                    <Payment className="h-5 w-5" />
                                </ListItemPrefix>
                                Payment-History
                            </ListItem></Link>
                            <Link to='/dashboard/work'><ListItem>
                                <ListItemPrefix>
                                    <Work className="h-5 w-5" />
                                </ListItemPrefix>
                                Work-Sheet
                            </ListItem></Link>

                        </div>

                    }
                    {
                        isAdmin && <div>
                            <Link to='/dashboard/allEmployee'><ListItem>
                                <ListItemPrefix>
                                    <People className="h-5 w-5" />
                                </ListItemPrefix>
                                All Employee-list
                            </ListItem></Link>
                        </div>
                    }


                    <Link to='/'><ListItem>
                        <ListItemPrefix>
                            <Home className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem></Link>

                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>

            </Card>
        </div>

    );
};

export default SideBar;