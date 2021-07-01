import React, {createContext, useState} from 'react';

export const CartContext= createContext({});

export const CartProvider= ({defaultValue=[], children})=>{ //si o si poner un valor por defecto o el useState se inicializa con el children
    const [cart, setCart]= useState(defaultValue);
    const [customer, setCustomer]= useState(defaultValue);

    const removeItem = (id) =>{
        setCart (cart.filter(({itemNvo})=> itemNvo.item.id !== id));
    };

    const addItem = (itemNvo, cantidad)=>{
         let productoIndex= []
            productoIndex=cart.findIndex(producto => itemNvo.item.id === producto.itemNvo.item.id);
         if (productoIndex === -1){
            setCart(cart=>[...cart, {itemNvo, cantidad}]);	
        } else{
            let modificarCart=[...cart];
            modificarCart[productoIndex].itemNvo.cantidad += itemNvo.cantidad;
            setCart(modificarCart);
            }
    };
  
   const clear = ()=>{
        setCart([])
    } 
    
    const precioTotal =() =>{
        let total=0;
        cart.forEach(({itemNvo}) => { total +=parseInt(itemNvo.item.precio) * parseInt(itemNvo.cantidad)});
        return parseInt(total);
    }

    const cantidadTotal =() =>{
        let cantidad=0;
        cart.forEach(({itemNvo}) => { cantidad += parseInt(itemNvo.cantidad)});
        return parseInt(cantidad);
    }

     const addCustomer = (comprador)=>{
        setCustomer(comprador);
    }
 
    return <CartContext.Provider value= {{cart, addItem,removeItem, clear, precioTotal, cantidadTotal, customer, addCustomer}}>{children}</CartContext.Provider>
}