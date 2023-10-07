import Card from '../card/Card';



import './Cards.modules.css';

const Cards = ({characters, onClose}) => {

   return (
   <div className='cardsTable'>
      {
         characters.map((character) => {
               return(
                  <Card 
                    
                     key={character.id}
                     id={character.id}
                     name={ character.name}
                     onClose={onClose}
                     image={character.image}
                     gender={character.gender}
                    
                  />     
               )
            })
      }

    </div>
   )
}

export default Cards;