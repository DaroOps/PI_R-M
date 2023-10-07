import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addFav, removeFav } from "../../redux/actions/actions";
import { Link } from 'react-router-dom';

import './Card.modules.css';

const Card = ({ id, name, image, onClose, gender }) => {
   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);

   useEffect(() => {

      const isCharacterFav = myFavorites.some((fav) => fav.id === Number(id));
      setIsFav(isCharacterFav);

   }, [myFavorites]);

   const dispatch = useDispatch();

   const closeFunc = onClose;



   const handleFavorite = () => {
      isFav ? (setIsFav(false), dispatch(removeFav(id))) : (setIsFav(true), dispatch(addFav({ id , name, image, gender})));
      //console.log('MA<W', image)
   }


   return (

      <div className="card">
         <div className="cardExternalBorder">

            <div className="closeCardContainer">
               <div className="closeButton">
                  {
                     closeFunc ?
                        (
                           <button className="cardCloseDot" onClick={(() => closeFunc(id))}>X</button>
                        ) :
                        (
                           null
                        )
                  }
               </div>
               <div className="idContainer">

                  <div className="idHolder">
                     <p>{id}</p>
                  </div>
               </div>
            </div>

            <div className="cardInternalBorder">
               <div className="cardName">
                  <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bolder', fontSize: '150%' }}>
                     {name}
                  </Link>
               </div>

               <div className="favoriteButton">

                  {
                     isFav ? (
                        <button className="favButton" onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className="favButton" onClick={handleFavorite}>🤍</button>
                     )
                  }
               </div>
               <div className="imageCardContainer">
                  <img className="cardApiImg" src={image} alt={name} />
               </div>
            </div>
         </div>
      </div>
   );
}


export default Card;