const Card = ({ id, name, image, onClose }) => {
  
   return (

      <div className="card">
         <div className="cardExternalBorder">
         <button className="cardCloseDot" onClick={() => onClose(id)}>X</button>
            <div className="cardInternalBorder">
            
               <div className="cardDotContainer"></div>
               <p className="cardName">{name}</p>
               <img className="cardApiImg" src={image} alt={name} />
            </div>

         </div>
      </div>
   );
}

export default Card;