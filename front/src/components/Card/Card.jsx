import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addFav, removeFav } from "../../redux/actions/actions";
import './Card.modules.css';

const Card = ({ id, name, image, onClose }) => {
   const [isFav, setIsFav] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);

   useEffect(() => {

      myFavorites?.forEach((fav) => {
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

            <div className="closeCardContainer">
               <div className="closeButton">
                  {

                     closeFunc ?
                        (
                           <button className="cardCloseDot" onClick={(() => onClose(id))}>X</button>
                        ) :
                        (
                           <></>
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
                  {name}
               </div>

               <div className="favoriteButton">
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
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