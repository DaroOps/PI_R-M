import Card from '../card/Card';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions/actions";

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
                     name={<Link to={`/detail/${id}`} >
                           <h3 className="card-name">{name}</h3>
                           </Link>}
               
                     image={image}
                     onClose={onClose}
                     addFav= {addFav}
                     removeFav={removeFav}
                  
                  
                  /> 
               )
            })
      }

    </div>
   )
}

export default Cards;