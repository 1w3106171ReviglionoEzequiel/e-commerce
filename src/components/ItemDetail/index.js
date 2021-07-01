import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({item}) => {

    return(   
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
              <div className="card-image">
                <img src= {item?.imagenUrl} alt='Imagen ilustrativa del producto' />
                
              </div>
              <div className="card-content">
                  <span className="card-title black-text">${item?.precio}</span>
                  <p>{item?.nombre}</p>
                  <p>{item?.descripcion}</p>
                  <ItemCount stock="5"
                    inicial="1"
                    item={item} />
              </div>
          </div>
        </div>
      </div>
     );
}
 
export default ItemDetail;