import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

const Nav = ({ onSearch }) => {
    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        onSearch(num);
    };

    return (
        <section id="nav" >
            <div id="navRouteIndex">
                <Link to='/home' >
                    <button id="homeButton">Home</button>
                </Link>

                <Link to={'/about'}>
                    <button id="aboutButton">About</button>
                </Link>
                
                <Link>
                <button id="logoutButton">Log Out</button>
                </Link>

            </div>
            <div id="navSearchbar">

                <SearchBar onSearch={onSearch}  />
                <button id='randomButton' onClick={generateRandomId}>Random</button>
            </div>
            
        </section>
    );
}

export default Nav