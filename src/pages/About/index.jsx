import './style.scss';
import { aboutData } from '../../data/index.js';

export const About = () => {
    const { header, description } = aboutData;
    return (
        <div className='about'>
            <div className='first2'>
                <h1>{header}</h1>
                <p>{description}</p>
            </div>
            <div className='second2'>
                <img src="/img/pngwing.com.png" alt="" />
            </div>
        </div>
    );
};