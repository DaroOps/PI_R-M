import LinkButton from "../linkbutton/LinkButton";
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
                
                    <LinkButton link={'/home'} text='Home' />

                    <LinkButton link={'/favorites'} text='Favorites' />
                
                    <LinkButton link={'/about'} text='About' />
                
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