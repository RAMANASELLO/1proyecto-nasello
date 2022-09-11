import {Link} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';

      const Item = ({id, name, description, price, image}) => {
    return (
      <div>
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
          <Link to={`/detalle/${id}`}>
            <button className="boton-ver">Ver detalle</button>
          </Link>
      </div>
    );
  };
  
  export default Item