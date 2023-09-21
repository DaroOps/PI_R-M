const Card = ({ id, name, image, onClose }) => {
   //
   // <button onClick={() => onClose(id)}>X</button>
   return (

      <div className="card">
         <div className="cardExternalBorder">
            <div className="cardInternalBorder">
               <div class="cardDotContainer"></div>
               <p className="cardName">{name}</p>
               <img className="cardApiImg" src={image} alt={name} />
            </div>

         </div>
      </div>
   );
}

export default Card;