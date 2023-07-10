import { Link } from 'react-router-dom';
import './style.scss';

export const Menu = () => {
    return (
        <div className='menu'>
            <h1>Rafik.</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};