import React, {useContext, useState, useEffect} from 'react';

import {getFirestore} from '../../firebase';
import {CartContext} from '../../context/cartContext';
import firebase from 'firebase/app';


const Order = () => {
    
    const {cart, precioTotal, customer, clear}= useContext(CartContext); // con esto me traigo el carrito
    const [idOrden, setidOrden] = useState(null);
    const [orden, setOrden]= useState([]);

    useEffect(() => {  
 
        const db= getFirestore();
        const ordenesCol= db.collection('ordenes');
        let orden={};
        orden.date= firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer= customer;
        orden.total= precioTotal();
        orden.items= cart.map(({itemNvo}) =>{
            const id= itemNvo.item.id;
            const title = itemNvo.item.nombre;
            const price = parseInt(itemNvo.item.precio) * parseInt(itemNvo.cantidad);
            const imagen= itemNvo.item.imagenUrl;
            return { id, title, price, imagen}
        })

        ordenesCol
        .add(orden)
        .then(doc=>{setidOrden(doc.id)})
        .catch(err =>{console.log(err)})
        .finally(()=>clear())
        setOrden (orden.items);
 
    }, [])

    return ( 
        <>
            <h5>Muchas gracias por tu compra {customer.name}!!! Tu numero de orden es {idOrden} </h5>
            <p>Detalle de tu compra: </p>
            {orden.map((item) =>
                    <ul className="collection">
                            <li className="collection-item avatar">
                            <img src={item.imagen} alt="" className="circle"></img> 
                            <span className="title">{item.title}</span>
                            <p>cantidad: {item.cantidad} </p>
                            </li>
                        </ul>         
                    )}
        </> );  
}
 
export default Order;