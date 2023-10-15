import { Link } from "react-router-dom"

import './LinkButton.modules.css';

const LinkButton = ({ link, text }) => {
   
    const nameOfClass = text.toLowerCase() + 'Button';
    const style = {
        "--content": `'${text}'`
    };
    return (
        <div className={nameOfClass}>
            <div  >
                <Link to={link} className="link">
                    <button className='link-button' style={style}>
                    <div className="fill"></div>
                    {text}
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default LinkButton