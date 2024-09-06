import Card from '../Card/Card.jsx';

import './Cards.modules.css';

const Cards = ({ characters, onClose }) => {

   return (
      <div className='cards'>
        <div className='tt'></div>
         
        
         <div className='cards-table'>
         {
            characters.map((character) => {
               return (
                  <Card

                     key={character.id}
                     id={character.id}
                     name={character.name}
                     onClose={onClose}
                     image={character.image}
                     gender={character.gender}

                  />
               )
            })

         }

      </div>
      </div>
               
   )
}

export default Cards;