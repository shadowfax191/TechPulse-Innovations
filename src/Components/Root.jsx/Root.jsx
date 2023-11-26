

import { Outlet } from 'react-router-dom';
import NavbarNew from './Navbar';
import { FooterWithSocialLinks } from './Footer';





const Root = () => {
    return (
        <div>
            <NavbarNew></NavbarNew>
            <Outlet></Outlet>
            <FooterWithSocialLinks></FooterWithSocialLinks>
           
        </div>
    );
};

export default Root;