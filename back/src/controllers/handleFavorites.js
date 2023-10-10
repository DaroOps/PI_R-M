let myFavorites = [];

function postFav(req, res){
    const newFav = req.body
    
    myFavorites.push(newFav);
  
    res
        .status(200)
        .json(myFavorites)
}

function deleteFav(req, res){
    const {id} = req.params;
    const filtereFavorites = myFavorites.filter((character) => character.id != id)
    myFavorites = filtereFavorites;
    //console.log('back, favorites filtered',filtereFavorites);
    return res
        .status(200)
        .json(myFavorites);

}

module.exports= {
    postFav,
    deleteFav
}
