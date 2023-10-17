import Heatmap from '../heatmap/HeatMap';
import './About.modules.css';

const About = () => {
    return (

        <div className="about">
            <img className="about-background" src="https://r4.wallpaperflare.com/wallpaper/979/756/6/rick-and-morty-tv-adult-swim-rick-sanchez-wallpaper-ff3c12efadb9450847ad72640483b050.jpg" />
            <div className="about-spacer" />
            <div className='about-adjust-size'>
                <div className='about-bgcard'>
                    <div className='header-text'> <h2>David Romero - (DaroOps)</h2></div>
                    <div className='head-card'>
                        <div className='dev-icon'>
                            <img className='profile-icon' src="https://github.com/DaroOps.png" alt="avatar" />
                        </div>
                        <div className='hide-heatmap-content'>
                            <Heatmap className='heatmap' />
                        </div>
                    </div>
                    <div className='about-info'>
                        <h2 className='spot-title'>About</h2>
                       
                        <p className='about-info-spot'>
                            My name is David, and I am a dedicated individual with a profound passion for creativity and innovation. I hold a deep reverence for technology and have immersed myself in various technologies, including Python, C#, and Java. My primary objective is to amalgamate the realms of technology and creativity to enhance the projects in which I am involved. My aspiration is to establish a compelling synergy that adeptly resolves challenges and serves as a source of inspiration.
                        </p>
                        <br />
                    </div>
                    
                    <div className="about-media">
                        <div className="li">
                            <a href="#" className="github-icon">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div className="li">
                            <a href="#" className="linkedin-icon">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default About;