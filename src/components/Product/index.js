import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src= {item.imagenUrl} height="200px" alt='Imagen ilustrativa del item'/>
              
            </div>
            <div className="card-content">
            <span className="card-title black-text ">${item.precio}</span>
              <p>{item.nombre}</p>
            </div>
            <div className="card-action">
             <Link to={`/item/${item.id}`}>Mas Detalles</Link>
            </div>
          </div>
        </div>
     );
}
 
export default Product;