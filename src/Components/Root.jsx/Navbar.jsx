import React, { useContext, useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,

} from "@material-tailwind/react";



import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";





function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <NavLink to='/'> <Typography
                as='div'
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-base font-medium">
                    Home
                </ListItem>
            </Typography></NavLink>
            <NavLink to='/contact-us'> <Typography
                as='div'
                variant="small"
                color="blue-gray"
                className="font-medium"
            >

                <ListItem className="flex items-center gap-2 py-2 pr-4 text-base font-medium">
                    Contact Us
                </ListItem>
            </Typography></NavLink>

            <NavLink to='/dashboard'>
                <Typography
                    as='div'
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                >
                    <ListItem className="flex items-center gap-2 py-2 pr-4 text-base font-medium">
                        Dashboard
                    </ListItem>
                </Typography></NavLink>
        </List>
    );
}


const NavbarNew = () => {

    const { user, LogOut } = useContext(AuthContext)

    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const [isSticky, setIsSticky] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [Dropdown, setDropdown] = useState(false)

    const handleLogOut = () => {
        LogOut()
    }

    return (

        <div className={`fixed  w-full mx-auto z-20 `}>
            <Navbar className={`mx-auto max-w-screen-2xl px-4  py-2 ${isSticky ? 'duration-700 shadow-md bg-blue-gray-200 border-blue-gray-200' : ' bg-transparent border-transparent md:py-5 duration-700'}`}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    >
                        <div className="flex items-center gap-2">

                            <img className="w-10" src="https://i.ibb.co/cXFfVF8/ux.png" alt="" />
                            TechPulse Innovations
                        </div>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    {
                        user ?
                            <div className=" hidden lg:block">
                                <button onClick={() => setDropdown(!Dropdown)}  >
                                    <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                </button>

                                {
                                    Dropdown && <div className="z-10 px-5 py-3 end-12  absolute rounded-lg  bg-blue-gray-200">
                                        <ul className="py-2" >
                                            <p className="capitalize py-2 text-center text-lg">{user?.displayName}</p>
                                            <Button onClick={handleLogOut} variant="gradient" size="sm">
                                                Log Out
                                            </Button>
                                        </ul>
                                    </div>
                                }
                            </div>
                            :
                            <div className="hidden gap-2 lg:flex">
                                <NavLink to='/logIn'> <Button variant="text" size="sm" color="gray">
                                    Log In
                                </Button></NavLink>
                                <NavLink to='/signIn'><Button variant="gradient" size="sm">
                                    Register
                                </Button></NavLink>
                            </div>
                    }
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <div>
                                <Bars4Icon className="h-6 w-6" strokeWidth={2} />
                            </div>


                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    {user ? <div className="text-center flex flex-col justify-center ">
                        <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                        <p className="capitalize text-black font-bold text-center pb-2 text-lg">{user?.displayName}</p>
                        <Button onClick={handleLogOut} variant="gradient" size="sm" className="pb-2 ">
                            Log out
                        </Button>

                    </div>
                        :
                        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">

                            <Button variant="outlined" size="sm" color="gray" fullWidth>
                                Log In
                            </Button>
                            <Button variant="gradient" size="sm" fullWidth >
                                Sign In
                            </Button>
                        </div>
                    }

                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarNew;

