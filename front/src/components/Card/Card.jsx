import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { addFav, removeFav } from "../../redux/actions/actions";
import { Link } from 'react-router-dom';

import './Card.modules.css';

const Card = ({ id, name, image, onClose, gender }) => {
   const [isFav, setIsFav] = useState(false);
   const [isCharged, setIsCharged] = useState(false);

   const myFavorites = useSelector((state) => state.myFavorites);

   useEffect(() => {

      const isCharacterFav = myFavorites.some((fav) => fav.id == id);
      setIsFav(isCharacterFav);

   }, [myFavorites]);

 
   const dispatch = useDispatch();

   const closeFunc = onClose;



   const handleFavorite = () => {
      isFav ? (setIsFav(false), dispatch(removeFav(id))) : (setIsFav(true), dispatch(addFav({ id, name, image, gender })));
      //console.log('MA<W', image)
   }


   return (
      <div className={`flip-card ${isCharged ? "charged" : ""}`}>
         <div className="flip-card-inner">
            <div className="flip-card-front">
         
               <div className="cardExternalBorder">
                  <div className="info-header">
                     <div className="name-container">
                        <div className="icon-name-header"></div>
                        <div className="name-header">Rick & Morty</div>
                     </div>
                     <div className="line-header"></div>
                     <div className="id-header">n°{id}</div>
                  </div>

                  <div className="cardInternalBorder">
                     <div className="cardName">
                        <Link className="card-link" to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bolder', fontSize: '150%' }}>
                           {name}
                        </Link>
                        <div className="closeButton">
                           {
                              closeFunc ?
                                 (
                                    <div className="close-button" onClick={(() => closeFunc(id))}>x</div>
                                 
                                 ) :
                                 (
                                    null
                                 )
                           }
                        </div>
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
                        <img 
                           className="cardApiImg"
                           src={image} alt={name}
                           onLoad={()=>setIsCharged(true)}
                        />
                     </div>
                  </div>
               
               </div>
            </div>
               <div className="flip-card-back">
                <div className="back-card">
                  <div className="back-card-image"/>
                </div>
               </div>
         </div>
      </div>

   );
}


export default Card;