import { useNavigate } from 'react-router-dom';
import './style.scss';

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='first1'>
                <h1>Hi, I'm Rafik Stepanyan</h1>
                <h2>Frontend Developer</h2>
                <p>As a frontend developer, my main responsibility is to create the user interface and implement the visual and interactive elements of websites or web applications. I work closely with designers and back-end developers to bring these digital products to life, making sure they are not only functional but also visually appealing and provide a seamless user experience.</p>
                <div>
                    <button className='hire' onClick={() => {
                        window.open('https://www.linkedin.com/in/rafik-stepanyan-139229264/', '_blank');
                    }}>Hire Me</button>
                    <button className='talk' onClick={() => {
                        navigate('/contact');
                    }}>Let's Talk</button>
                </div>
            </div>
            <div className='second1'></div>
        </div>
    );
};