import './style.scss';
import { skillsData } from '../../data/index.js';

export const Skills = () => {
    const { header, skills } = skillsData;
    return (
        <div className='skills'>
            <h1>{header}</h1>
            <div className='show'>
                {
                    skills.map(e => {
                        return <div key={e.id}>
                            <h2>{e.name}</h2>
                            <p>{e.description}</p>
                        </div>;
                    })
                }
            </div>
        </div>
    );
};