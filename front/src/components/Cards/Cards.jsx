import Card from '../card/Card';
import { Link } from 'react-router-dom';


import './Cards.modules.css';

const Cards = ({characters, onClose}) => {

   return (
   <div className='cardsTable'>
      {
         characters.map(({id, name, image}) => {
               return(
                  <Card 
                    
                     key={id}
                     id={id}
                     name={ <Link to={`/detail/${id}`}  style={{textDecoration: 'none', color: 'inherit', fontWeight:'bolder', fontSize:'150%'}}>{name}</Link>}
                     onClose={onClose}
                     image={image}
                    
                  />     
               )
            })
      }

    </div>
   )
}

export default Cards;