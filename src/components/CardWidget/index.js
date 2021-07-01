import React, { useContext } from 'react';
import {CartContext} from '../../context/cartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {cart, cantidadTotal} = useContext(CartContext);

    return (
        <Link to='/cart'>
            {cart.length ===0? <div className="large material-icons">shopping_cart  </div>  : <>
            <div className= "large material-icons">shopping_cart </div> 
            <> {cantidadTotal()}</>
            </> }
        </Link>
    );       
}
 
export default CartWidget;