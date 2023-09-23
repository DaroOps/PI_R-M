import Cards from "../cards/Cards";

const Favorites = ({myFavorites}) => {


    return (
       <div>
            <Cards characters={myFavorites}/>
        </div>

    );

}

export default Favorites


