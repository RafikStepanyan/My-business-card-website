import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import './style.scss';

export const Layout = () => {
    return (
        <div className='layout'>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
};