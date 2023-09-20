import Card from '../card/Card';
import { Link } from 'react-router-dom';

const Cards = ({characters, onClose}) => {
   
   return (
   <div>
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
                  /> 
               )
            })
      }

    </div>
   )
}

export default Cards;