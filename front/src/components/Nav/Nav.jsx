import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch}) =>
{
    return(
            <div className="Nav">
                <SearchBar onSearch={onSearch}/>
            </div>
    );
}

export default Nav;