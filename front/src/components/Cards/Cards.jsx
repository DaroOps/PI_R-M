import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Cards = ({characters, onClose}) => {
   
   return (
   <div>
      {
         characters.map(({id,name, status, species, gender, origin , image}) => {
               return(
                  <Card 
                     key={id}
                     id={id}
                     name={<Link to={`/detail/${id}`} >
                           <h3 className="card-name">{name}</h3>
                           </Link>}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                  /> 
               )
            })
      }

    </div>
   )
}

export default Cards;