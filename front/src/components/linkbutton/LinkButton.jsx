import { Link } from "react-router-dom"

import './LinkButton.modules.css';

const LinkButton = ({ link, text }) => {

    const nameOfClass = text.toLowerCase() + 'Button';
    return (
        <div className={nameOfClass}>
            <div className="link-button">
                <Link to={link} >
                    <span className='link-text'>{text}</span>
                </Link>
              
            </div>
        </div>
    );

}

export default LinkButton