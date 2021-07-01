import React, {useContext} from 'react';
import FormCustomer from '../FormCustomer';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/cartContext';
import 'firebase/firestore';

const Cart = () => {
    const {cart, removeItem}= useContext(CartContext);
    const sinItemcart=  <> <h5>Tu carrito esta vacio! Para comprar, empieza aqui: </h5>
                            <Link to='/'>
                                <button className="waves-effect waves-light btn red lighten-2 btn-large col s6">Comprar</button>
                            </Link> </>

        if (cart.length === 0) return sinItemcart;

    return (
        <>
        <h3 className="center-align">Carrito de compras</h3>
        <div className="row">
            <div className="col s6">
            {cart.map(({itemNvo}) => 
                   <ul className="collection">
                        <li className="collection-item avatar">
                        <img src={itemNvo.item.imagenUrl} alt="" className="circle"></img>
                        <span className="title">{itemNvo.item.nombre}</span>
                        <p> Total: ${itemNvo.item.precio} <br></br>
                            cantidad: {itemNvo.cantidad}
                        </p>
                        <button className="secondary-content" onClick={()=>removeItem(itemNvo.item.id)}><i className="material-icons">remove_shopping_cart</i></button>
                        </li>
                    </ul>         
                )}
                </div>
                <div className="col s6 ">
                    <FormCustomer />
                </div>
                
        </div>
        </>
        );
    
    }

export default Cart;