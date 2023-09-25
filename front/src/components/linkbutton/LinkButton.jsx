import { Link } from "react-router-dom"

const LinkButton = ({ link, text }) => {

    const nameOfClass = text.toLowerCase()+'Button';
    return(
        <div className={nameOfClass}>
            <Link to={link} >
                <button >{text}</button>
            </Link>
        </div>
    );

}

export default LinkButton