import Heatmap from '../heatmap/HeatMap';
import './About.modules.css';

const About = () => {
    return (

        <div className="about">
            <div className="about-spacer" />
            <h2>ABOUT ME</h2>
            <div className='hide-heatmap-content'>
                <Heatmap className='heatmap' />
            </div>
        </div>
    );

}

export default About;