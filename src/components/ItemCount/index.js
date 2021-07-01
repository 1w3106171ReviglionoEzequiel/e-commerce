import React, {useState, useContext} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/cartContext';


const ItemCount = ({stock, inicial, item}) => {

    const [contador, setContador]= useState(parseInt(inicial))
    const [cantidad, setCantidad]= useState(0);
  
    const myContext = useContext(CartContext);

    const agregarCarrito = (contador) => {
        setCantidad (contador);
        myContext.addItem({item, cantidad:contador}); 
    };
    
    const restarUno= () =>{setContador(contador-1)};
    const sumarUno= () =>{setContador(contador+1)};
    
    return (
        <div className="row"> 
            <button
                className="waves-effect waves-light btn red lighten-2 col s1 offset-s1"
                disabled= {contador <= 0}
                onClick={restarUno}>-</button>  
            <div className="col s1 flow-text"> {contador}</div>
            <button
                className="waves-effect waves-light btn red lighten-2 col s1 "
                disabled= {contador >= stock}
                onClick={sumarUno}>+</button>
            <Link to='/cart'>
                <button
                    className="waves-effect waves-light btn red lighten-2 btn-large col s5 agcarrito"
                    onClick={()=>agregarCarrito(contador)}>Agregar al carrito</button> 
            </Link>
        </div>
         );
        }
 
export default ItemCount;