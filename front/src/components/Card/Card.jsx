const Card = ({id,name, image, onClose}) => {
   return (
      <div>
         <button onClick={()=>onClose(id)}>X</button>
         
         <h2>{name}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}

export default Card;