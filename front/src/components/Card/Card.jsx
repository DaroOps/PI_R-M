import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Card = ({ id, name, image, onClose, addFav, removeFav }) => {
   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);

   useEffect(() => {

      myFavorites.forEach((fav) => {
         if (fav.id === Number(id)) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const dispatch = useDispatch();

   const closeFunc = onClose;

   

   const handleFavorite = () => {
      isFav ? (setIsFav(false), dispatch(removeFav(id))) : (setIsFav(true), dispatch(addFav(id)));
      //console.log(isFav)
   }
   

   return (

      <div className="card">
         <div className="cardExternalBorder">
            {
               closeFunc ?
                  (
                     <button className="cardCloseDot" onClick={(() => onClose(id))}>X</button>
                  ) :
                  (
                     <div></div>
                  )
            }
            <div className="cardInternalBorder">
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }

               <div className="cardDotContainer"></div>
               <h3 className="cardName">{name}</h3>
               <img className="cardApiImg" src={image} alt={name} />
            </div>

         </div>
      </div>
   );
}

export default Card;