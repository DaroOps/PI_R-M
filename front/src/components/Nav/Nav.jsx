import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { useNavigate } from "react-router-dom";
import './Nav.modules.css';

const Nav = ({ onSearch }) => {

    const navigate = useNavigate();

    const generateRandomId = () => {
        const num = Math.floor(Math.random() * 826) + 1;
        onSearch(num);
    };

    const performLogout = () => {
        localStorage.clear();
        console.log("LOGOUT CLICK " + localStorage.getItem('access'));
        navigate('/');
    }

    return (
        <div className="nav" >

            <div className="logo"><h3>LOGO</h3></div>

            <div className="navRouteIndex">
                <div className="homeButton">
                    <Link to='/home' >
                        <button >Home</button>
                    </Link>
                </div>

                <div className="favoritesButton">
                    <Link to='/favorites'>
                        <button >Favorites</button>
                    </Link>
                </div>

                <div className="aboutButton">
                    <Link to={'/about'}>
                        <button >About</button>
                    </Link>
                </div>
            </div>

            <div className="navSearchbar">
                <div className="searchBar">
                    <SearchBar onSearch={onSearch} />
                </div>
                <div className="randomButton">
                    <button onClick={generateRandomId}>?</button>
                </div>
            </div>

            <div className="logoutButton">
                <button onClick={performLogout}>Log Out</button>
            </div>

        </div>
    );
}

export default Nav