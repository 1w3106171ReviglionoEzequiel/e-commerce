import React from 'react';
import Product from '../Product';

const ItemList = ({productos}) => {

    return ( 
        <div className="row">
            {productos.map(item => <Product 
                                            key= {item.id}
                                            item={item} 
                                            />)}
            
        </div>
     );
}
 
export default ItemList;